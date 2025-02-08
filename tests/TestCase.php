<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Configuraciones adicionales para pruebas
     */
    protected function setUp(): void
    {
        parent::setUp();
        // Configuraciones específicas de pruebas
    }

    /**
     * Limpiezas o verificaciones después de cada prueba
     */
    protected function tearDown(): void
    {
        parent::tearDown();
        // Limpiezas específicas
    }
}
