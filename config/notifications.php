<?php

return [
    // Configuraciones generales de notificaciones
    'global' => [
        'debug' => env('NOTIFICATIONS_DEBUG', false),
        'log_channel' => env('NOTIFICATIONS_LOG_CHANNEL', 'daily'),
    ],

    // Configuraciones específicas de notificaciones de exámenes
    'examenes' => [
        // Rango de días para notificaciones
        'dias_min' => env('NOTIFICACIONES_EXAMENES_DIAS_MIN', 30),
        'dias_max' => env('NOTIFICACIONES_EXAMENES_DIAS_MAX', 37),

        // Modelos de exámenes a notificar
        'modelos' => config('examenes.modelos.principales', [
            App\Models\Examen::class,
            App\Models\ExamenLaboratorio::class,
        ]),

        // Tipos de exámenes a incluir
        'tipos_incluidos' => config('examenes.tipos_incluidos', [
            'ocupacional',
            'preocupacional',
            'periodico',
            'ingreso',
        ]),

        // Tipos de exámenes a excluir
        'tipos_excluidos' => config('examenes.tipos_excluidos', [
            'especial',
            'extraordinario',
        ]),

        // Configuraciones de envío
        'envio' => [
            'intentos_maximos' => env('NOTIFICACIONES_EXAMENES_INTENTOS', 3),
            'cola' => env('NOTIFICACIONES_EXAMENES_COLA', 'notifications'),
            'retraso_minutos' => env('NOTIFICACIONES_EXAMENES_RETRASO', 5),
        ],

        // Canales de notificación
        'canales' => [
            'email' => env('NOTIFICACIONES_EXAMENES_EMAIL', true),
            'sms' => env('NOTIFICACIONES_EXAMENES_SMS', false),
            'telegram' => env('NOTIFICACIONES_EXAMENES_TELEGRAM', false),
        ],

        // Configuraciones de filtrado
        'filtros' => [
            'estado_examen' => ['pendiente', 'programado'],
        ],
    ],

    // Configuraciones de notificaciones específicas
    'tipos' => [
        'epo' => [
            'dias_anticipacion' => env('NOTIFICACIONES_EPO_DIAS', 30),
            'usuarios_habilitados' => env('NOTIFICACIONES_EPO_USUARIOS', true),
        ],
        // Agregar más tipos de notificaciones según sea necesario
    ],

    // Configuraciones de integración
    'integraciones' => [
        'telegram' => [
            'habilitado' => env('NOTIFICATIONS_TELEGRAM_ENABLED', false),
            'token' => env('NOTIFICATIONS_TELEGRAM_TOKEN', ''),
            'chat_id' => env('NOTIFICATIONS_TELEGRAM_CHAT_ID', ''),
        ],
        'slack' => [
            'habilitado' => env('NOTIFICATIONS_SLACK_ENABLED', false),
            'webhook' => env('NOTIFICATIONS_SLACK_WEBHOOK', ''),
        ],
    ],
];
