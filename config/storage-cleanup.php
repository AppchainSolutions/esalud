<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Configuración de Limpieza de Storage
    |--------------------------------------------------------------------------
    |
    | Personaliza el comportamiento del comando de limpieza de storage
    |
    */

    // Directorios a limpiar
    'directories' => [
        'logs' => [
            'path' => 'logs',
            'max_age_days' => 30,
            'max_size_mb' => 50
        ],
        'framework_cache' => [
            'path' => 'framework/cache/data',
            'max_age_days' => 7,
            'max_size_mb' => 100
        ],
        'framework_sessions' => [
            'path' => 'framework/sessions',
            'max_age_days' => 14,
            'max_size_mb' => 200
        ],
        'framework_views' => [
            'path' => 'framework/views',
            'max_age_days' => 7,
            'max_size_mb' => 100
        ],
        'clockwork' => [
            'path' => 'clockwork',
            'max_age_days' => 30,
            'max_size_mb' => 50
        ]
    ],

    // Archivos a excluir de la eliminación
    'exclude_files' => [
        '.gitignore',
        '.env',
        '.lock',
        'index.php',
        '.htaccess'
    ],

    // Opciones de logging
    'logging' => [
        'channel' => 'daily',
        'level' => 'info'
    ],

    // Notificaciones
    'notifications' => [
        'telegram' => [
            'enabled' => true,
            'threshold_files_deleted' => 100,
            'threshold_size_mb' => 500
        ]
    ]
];
