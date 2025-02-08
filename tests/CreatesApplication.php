<?php

namespace Tests;

use Illuminate\Contracts\Console\Kernel;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Config;

trait CreatesApplication
{
    public function createApplication()
    {
        $app = require __DIR__.'/../bootstrap/app.php';
        $app->make(Kernel::class)->bootstrap();

        // Configurar ambiente de testing
        $app->make('config')->set('app.env', 'testing');
        $app->make('config')->set('database.default', 'testing');
        $app->make('config')->set('database.connections.testing', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
            'foreign_key_constraints' => true,
        ]);

        // Configurar facades
        Facade::clearResolvedInstances();
        Facade::setFacadeApplication($app);

        return $app;
    }
}
