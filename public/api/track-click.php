<?php
/**
 * API para registrar clicks en enlaces externos.
 * Recibe POST con JSON: { url, titulo, pagina }
 * Guarda los clicks en un archivo JSON con conteo acumulado.
 * Usa flock() para lectura y escritura atómica (evita pérdida de datos concurrentes).
 */

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Preflight CORS
    $origenesPermitidos = [
        'https://lauemprende.com',
        'https://www.lauemprende.com',
        'https://prueba.lauemprende.com',
        'http://localhost:4321'
    ];
    $origen = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origen, $origenesPermitidos, true)) {
        header("Access-Control-Allow-Origin: $origen");
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Max-Age: 86400');
    }
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Headers de seguridad
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Cache-Control: no-store');

// Dominios permitidos (CORS)
$origenesPermitidos = [
    'https://lauemprende.com',
    'https://www.lauemprende.com',
    'https://prueba.lauemprende.com',
    'http://localhost:4321'
];

$origen = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origen, $origenesPermitidos, true)) {
    header("Access-Control-Allow-Origin: $origen");
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
}

// Leer body
$cuerpo = file_get_contents('php://input');
if (!$cuerpo) {
    http_response_code(400);
    echo json_encode(['error' => 'Cuerpo de la solicitud vacío']);
    exit;
}

$entrada = json_decode($cuerpo, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'JSON inválido']);
    exit;
}

if (!$entrada || empty($entrada['url'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Campo requerido faltante: url']);
    exit;
}

// Sanitizar datos
$url = filter_var($entrada['url'], FILTER_SANITIZE_URL);
$titulo = isset($entrada['titulo']) ? mb_substr(strip_tags($entrada['titulo']), 0, 300) : '';
$pagina = isset($entrada['pagina']) ? mb_substr(strip_tags($entrada['pagina']), 0, 200) : '';

// Validar que sea una URL real
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo json_encode(['error' => 'URL inválida']);
    exit;
}

// Archivo de datos
$archivoDatos = __DIR__ . '/datos-clicks.json';
$mes = date('Y-m');
$clave = md5($url);

// Lectura y escritura atómica con flock() para evitar race conditions
$fp = fopen($archivoDatos, 'c+');
if (!$fp) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo abrir el archivo de datos']);
    exit;
}

// Bloquear archivo (espera si otro proceso lo tiene bloqueado)
if (!flock($fp, LOCK_EX)) {
    fclose($fp);
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo obtener el bloqueo del archivo']);
    exit;
}

// Leer contenido actual dentro del bloqueo
$contenido = '';
$tamano = filesize($archivoDatos);
if ($tamano > 0) {
    $contenido = fread($fp, $tamano);
}
$datos = $contenido ? (json_decode($contenido, true) ?: []) : [];

// Crear o actualizar entrada
if (!isset($datos[$clave])) {
    $datos[$clave] = [
        'url' => $url,
        'titulo' => $titulo,
        'pagina' => $pagina,
        'clicksTotales' => 0,
        'mensual' => []
    ];
}

// Incrementar contadores
$datos[$clave]['clicksTotales']++;

// Actualizar titulo/pagina si vienen (puede cambiar con el tiempo)
if ($titulo) $datos[$clave]['titulo'] = $titulo;
if ($pagina) $datos[$clave]['pagina'] = $pagina;

// Conteo mensual
if (!isset($datos[$clave]['mensual'][$mes])) {
    $datos[$clave]['mensual'][$mes] = 0;
}
$datos[$clave]['mensual'][$mes]++;

// Escribir datos actualizados (truncar archivo primero)
ftruncate($fp, 0);
rewind($fp);
$json = json_encode($datos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$escrito = fwrite($fp, $json);

// Liberar bloqueo y cerrar
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

if ($escrito === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al guardar los datos']);
    exit;
}

echo json_encode([
    'exito' => true,
    'clicksTotales' => $datos[$clave]['clicksTotales']
]);
