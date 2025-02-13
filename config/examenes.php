<?php

return [
    // Modelos de exámenes para notificaciones
    'modelos' => [
        // Modelos principales de exámenes
        'principales' => [
            App\Models\Examen::class,
            App\Models\ExamenLaboratorio::class,
        ],

        // Modelos específicos de exámenes
        'especificos' => [
            // Agregar modelos de exámenes específicos
            App\Models\ExamenEpo::class,
            App\Models\ExamenPvmos::class,
            App\Models\ExamenPvt::class,
            App\Models\ExamenPvmohn::class,
            App\Models\ExamenPvmosol::class,
            App\Models\ExamenAsma::class,
            App\Models\ExamenAyd::class,
            App\Models\ExamenEquilibrio::class,
            App\Models\ExamenPsm::class,
            App\Models\ExamenRespirador::class,
        ],

        // Modelos auxiliares
        'auxiliares' => [
            App\Models\TipoExamen::class,
            App\Models\EstadoExamen::class,
        ],
    ],

    // Tipos de exámenes a incluir en notificaciones
    'tipos_incluidos' => [
        'ocupacional',
        'preocupacional',
        'periodico',
        'ingreso',
    ],

    // Tipos de exámenes a excluir de notificaciones
    'tipos_excluidos' => [
        'especial',
        'extraordinario',
    ],
];
