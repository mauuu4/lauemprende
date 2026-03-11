<?php
/**
 * API para consultar estadisticas de clicks en enlaces externos.
 * Requiere clave de acceso via query param: ?key=CLAVE
 * Devuelve el resumen de todos los clicks registrados.
 */

// Clave de acceso simple (cambiar en produccion)
$accessKey = 'lauemprende-clicks-2026';

// Headers de seguridad
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Cache-Control: no-store');

// Verificar clave
$providedKey = $_GET['key'] ?? '';
if ($providedKey !== $accessKey) {
    http_response_code(403);
    echo json_encode(['error' => 'Acceso denegado']);
    exit;
}

// Archivo de datos
$dataFile = __DIR__ . '/click-data.json';

if (!file_exists($dataFile)) {
    echo json_encode([
        'success' => true,
        'message' => 'No hay clicks registrados aun',
        'totalLinks' => 0,
        'totalClicks' => 0,
        'links' => []
    ]);
    exit;
}

$data = json_decode(file_get_contents($dataFile), true) ?: [];

// Calcular totales y ordenar por clicks
$totalClicks = 0;
$links = [];

foreach ($data as $entry) {
    $totalClicks += $entry['totalClicks'];

    // Calcular clicks del mes actual
    $currentMonth = date('Y-m');
    $monthlyClicks = $entry['monthly'][$currentMonth] ?? 0;

    $links[] = [
        'url' => $entry['url'],
        'label' => $entry['label'] ?? '',
        'page' => $entry['page'] ?? '',
        'totalClicks' => $entry['totalClicks'],
        'monthlyClicks' => $monthlyClicks,
        'firstClick' => $entry['firstClick'],
        'lastClick' => $entry['lastClick']
    ];
}

// Ordenar por total de clicks (mayor primero)
usort($links, function($a, $b) {
    return $b['totalClicks'] - $a['totalClicks'];
});

echo json_encode([
    'success' => true,
    'totalLinks' => count($links),
    'totalClicks' => $totalClicks,
    'currentMonth' => date('Y-m'),
    'links' => $links
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
