<?php
/**
 * API para registrar clicks en enlaces externos.
 * Recibe POST con JSON: { url, label, page }
 * Guarda los clicks en un archivo JSON con conteo acumulado.
 */

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Headers de seguridad
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Cache-Control: no-store');

// Dominios permitidos (CORS para mismo dominio)
$allowedOrigins = [
    'https://lauemprende.com',
    'https://www.lauemprende.com',
    'https://prueba.lauemprende.com',
    'http://localhost:4321'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
}

// Leer body
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || empty($input['url'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required field: url']);
    exit;
}

// Sanitizar datos
$url = filter_var($input['url'], FILTER_SANITIZE_URL);
$label = isset($input['label']) ? mb_substr(strip_tags($input['label']), 0, 200) : '';
$page = isset($input['page']) ? mb_substr(strip_tags($input['page']), 0, 200) : '';

// Validar que sea una URL real
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid URL']);
    exit;
}

// Archivo de datos
$dataFile = __DIR__ . '/click-data.json';

// Leer datos existentes
$data = [];
if (file_exists($dataFile)) {
    $content = file_get_contents($dataFile);
    $data = json_decode($content, true) ?: [];
}

// Clave unica por URL
$key = md5($url);
$now = date('Y-m-d H:i:s');
$month = date('Y-m');

if (!isset($data[$key])) {
    // Primer click en esta URL
    $data[$key] = [
        'url' => $url,
        'label' => $label,
        'page' => $page,
        'totalClicks' => 0,
        'firstClick' => $now,
        'lastClick' => $now,
        'monthly' => []
    ];
}

// Incrementar contadores
$data[$key]['totalClicks']++;
$data[$key]['lastClick'] = $now;

// Actualizar label/page si vienen (puede cambiar con el tiempo)
if ($label) $data[$key]['label'] = $label;
if ($page) $data[$key]['page'] = $page;

// Conteo mensual
if (!isset($data[$key]['monthly'][$month])) {
    $data[$key]['monthly'][$month] = 0;
}
$data[$key]['monthly'][$month]++;

// Guardar
$saved = file_put_contents(
    $dataFile,
    json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    LOCK_EX
);

if ($saved === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save data']);
    exit;
}

echo json_encode([
    'success' => true,
    'totalClicks' => $data[$key]['totalClicks']
]);
