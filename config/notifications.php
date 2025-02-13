<?php

return [
    'examenes' => [
        // Rango de días para notificaciones de exámenes
        'dias_min' => env('NOTIFICACIONES_EXAMENES_DIAS_MIN', 30),
        'dias_max' => env('NOTIFICACIONES_EXAMENES_DIAS_MAX', 37),

        // Configuraciones adicionales de notificaciones
        'modelos' => [
            App\Models\Examen::class,
            App\Models\ExamenLaboratorio::class,
            // Agregar otros modelos de exámenes
        ],

        // Configuraciones de envío
        'intentos_maximos' => 3,
        'cola' => 'notifications',
        'retraso_minutos' => 5,
    ],
];
