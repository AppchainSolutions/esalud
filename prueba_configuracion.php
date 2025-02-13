<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->boot();

// Usar Config facade para obtener configuraciones
use Illuminate\Support\Facades\Config;

// Función para depurar configuración
function debugConfig($configKey) {
    echo "Depurando configuración: $configKey\n";
    try {
        $config = Config::get($configKey);
        echo "Tipo: " . gettype($config) . "\n";
        echo "Contenido:\n";
        print_r($config);
    } catch (Exception $e) {
        echo "Error al obtener configuración: " . $e->getMessage() . "\n";
    }
    echo "\n---\n";
}

// Depurar configuraciones
$configKeys = [
    'examenes',
    'notifications',
    'examenes.modelos.principales',
    'notifications.examenes.modelos'
];

foreach ($configKeys as $key) {
    debugConfig($key);
}

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
