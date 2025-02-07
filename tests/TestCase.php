<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        // Configuraciones adicionales si son necesarias
    }

    protected function getPackageProviders($app)
    {
        return [
            // Agrega proveedores de servicios adicionales si es necesario
        ];
    }
}
