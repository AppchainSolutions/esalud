<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Enable Clockwork
    |--------------------------------------------------------------------------
    |
    | You can enable or disable Clockwork here. When enabled, the profiler
    | will be active and collect performance data.
    */
    'enable' => env('CLOCKWORK_ENABLE', false),

    /*
    |--------------------------------------------------------------------------
    | Storage Path
    |--------------------------------------------------------------------------
    |
    | Configure the path where Clockwork will store its data files.
    */
    'storage' => storage_path(env('CLOCKWORK_STORAGE_PATH', 'clockwork')),

    /*
    |--------------------------------------------------------------------------
    | Verbosity Level
    |--------------------------------------------------------------------------
    |
    | Configure the level of detail in the collected data.
    | Options: 'full', 'detailed', 'simple'
    */
    'verbosity' => 'full',

    /*
    |--------------------------------------------------------------------------
    | Request Data Collection
    |--------------------------------------------------------------------------
    |
    | Configure which types of request data to collect.
    */
    'collect' => [
        'requests' => true,
        'database_queries' => true,
        'routes' => true,
        'events' => true,
        'logs' => true,
        'models' => true,
        'cache' => true,
        'redis' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Performance Thresholds
    |--------------------------------------------------------------------------
    |
    | Set thresholds for performance warnings.
    */
    'performance_warnings' => [
        'slow_query' => 100, // ms
        'slow_request' => 1000, // ms
    ],
];
