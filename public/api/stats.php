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
$domainBase = preg_replace('/^www\./', '', $domain);
$candidateDomains = array_values(array_unique([$domain, $domainBase]));

// Rutas
$baseDir = dirname(dirname(__DIR__));
// Hosting suele tener /public_html y /webstats como carpetas hermanas.
$webstatsDir = $baseDir . '/webstats';
if (!is_dir($webstatsDir)) {
    $webstatsDir = $baseDir . '/../webstats';
}
$cacheFile = __DIR__ . '/stats-cache-' . str_replace('.', '-', $domainBase) . '.json';
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
    'currentMonth' => ['visits' => 0, 'month' => $currentMonth, 'year' => $currentYear, 'pages' => []],
    'lastMonth' => ['visits' => 0, 'month' => $lastMonth, 'year' => $lastYear, 'pages' => []]
];

/**
 * Extrae estadísticas por página del bloque BEGIN_SIDER de AWStats
 */
function parseSiderBlock($content) {
    $pages = [];
    if (preg_match('/BEGIN_SIDER \d+\n(.*?)END_SIDER/s', $content, $siderMatch)) {
        $lines = explode("\n", trim($siderMatch[1]));
        foreach ($lines as $line) {
            if (str_starts_with($line, '#') || trim($line) === '') continue;
            $parts = explode(' ', $line);
            if (count($parts) >= 2) {
                $pages[$parts[0]] = (int) $parts[1];
            }
        }
    }
    return $pages;
}

if (is_dir($webstatsDir)) {
    $response['success'] = true;

    $buildAwstatsPath = function (int $month, int $year, string $statsDomain) use ($webstatsDir) {
        return sprintf('%s/awstats%02d%d.%s.txt', $webstatsDir, $month, $year, $statsDomain);
    };

    $findAwstatsFile = function (int $month, int $year) use ($candidateDomains, $buildAwstatsPath) {
        foreach ($candidateDomains as $statsDomain) {
            $path = $buildAwstatsPath($month, $year, $statsDomain);
            if (file_exists($path)) {
                return $path;
            }
        }
        return null;
    };

    // Mes actual
    $currentFile = $findAwstatsFile($currentMonth, $currentYear);
    if ($currentFile) {
        $content = file_get_contents($currentFile);
        if (preg_match('/TotalVisits\s+(\d+)/', $content, $m)) {
            $response['currentMonth']['visits'] = (int) $m[1];
        }
        $response['currentMonth']['pages'] = parseSiderBlock($content);
    }

    // Mes anterior
    $lastFile = $findAwstatsFile($lastMonth, $lastYear);
    if ($lastFile) {
        $content = file_get_contents($lastFile);
        if (preg_match('/TotalVisits\s+(\d+)/', $content, $m)) {
            $response['lastMonth']['visits'] = (int) $m[1];
        }
        $response['lastMonth']['pages'] = parseSiderBlock($content);
    }
}

$json = json_encode($response);

// Guardar en caché
file_put_contents($cacheFile, $json);

echo $json;
