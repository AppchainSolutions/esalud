<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->boot();

// Función para imprimir información de configuración
function printConfig($key, $config) {
    echo "Configuración: $key\n";
    print_r($config);
    echo "\n---\n";
}

try {
    // Verificar configuración de exámenes
    $examenesConfig = config('examenes');
    printConfig('examenes', $examenesConfig);

    // Verificar configuración de notificaciones
    $notificacionesConfig = config('notifications');
    printConfig('notifications', $notificacionesConfig);

    // Verificar variables de entorno
    $envVars = [
        'NOTIFICACIONES_EXAMENES_DIAS_MIN',
        'NOTIFICACIONES_EXAMENES_DIAS_MAX',
        'NOTIFICACIONES_EXAMENES_INTENTOS',
        'NOTIFICACIONES_EXAMENES_COLA',
        'NOTIFICACIONES_EXAMENES_RETRASO'
    ];

    echo "Variables de Entorno:\n";
    foreach ($envVars as $var) {
        echo "$var: " . env($var, 'No definida') . "\n";
    }

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo $e->getTraceAsString();
}
