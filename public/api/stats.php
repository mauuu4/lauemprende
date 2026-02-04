<?php
/**
 * API para obtener estadísticas de visitas desde archivos AWStats
 * Con sistema de caché para evitar lecturas innecesarias
 */

// Dominios permitidos (whitelist)
$allowedDomains = [
    'lauemprende.com',
    'prueba.lauemprende.com',
    'www.lauemprende.com'
];

$requestedDomain = $_SERVER['HTTP_HOST'] ?? '';
$domain = in_array($requestedDomain, $allowedDomains, true) ? $requestedDomain : 'lauemprende.com';

// Rutas
$baseDir = dirname(dirname(__DIR__));
$webstatsDir = $baseDir . '/webstats';
$cacheFile = __DIR__ . '/stats-cache-' . str_replace('.', '-', $domain) . '.json';
$cacheMaxAge = 24 * 60 * 60; // 24 horas (los AWStats se actualizan 1 vez al día)

// Headers de seguridad
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Cache-Control: max-age=86400'); // 24 horas para el navegador

// Verificar si el caché es válido
if (file_exists($cacheFile)) {
    $cacheAge = time() - filemtime($cacheFile);
    if ($cacheAge < $cacheMaxAge) {
        // Caché válido, devolver directamente
        readfile($cacheFile);
        exit;
    }
}

// Caché expirado o no existe, generar nuevos datos
$currentYear = (int) date('Y');
$currentMonth = (int) date('n');
$lastMonth = $currentMonth - 1;
$lastYear = $currentYear;
if ($lastMonth < 1) {
    $lastMonth = 12;
    $lastYear--;
}

$response = [
    'success' => false,
    'currentMonth' => ['visits' => 0, 'month' => $currentMonth, 'year' => $currentYear],
    'lastMonth' => ['visits' => 0, 'month' => $lastMonth, 'year' => $lastYear]
];

if (is_dir($webstatsDir)) {
    $response['success'] = true;

    // Mes actual
    $currentFile = sprintf('%s/awstats%02d%d.%s.txt', $webstatsDir, $currentMonth, $currentYear, $domain);
    if (file_exists($currentFile)) {
        $content = file_get_contents($currentFile);
        if (preg_match('/TotalVisits\s+(\d+)/', $content, $m)) {
            $response['currentMonth']['visits'] = (int) $m[1];
        }
    }

    // Mes anterior
    $lastFile = sprintf('%s/awstats%02d%d.%s.txt', $webstatsDir, $lastMonth, $lastYear, $domain);
    if (file_exists($lastFile)) {
        $content = file_get_contents($lastFile);
        if (preg_match('/TotalVisits\s+(\d+)/', $content, $m)) {
            $response['lastMonth']['visits'] = (int) $m[1];
        }
    }
}

$json = json_encode($response);

// Guardar en caché
file_put_contents($cacheFile, $json);

echo $json;
