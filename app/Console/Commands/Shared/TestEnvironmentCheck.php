<?php

namespace App\Console\Commands\Shared;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class TestEnvironmentCheck extends Command
{
    protected $signature = 'test:env-check';
    protected $description = 'Verificar configuración del entorno de pruebas';

    public function handle()
    {
        // Verificar configuración de base de datos
        $this->info('Verificando configuración de base de datos:');
        $this->info('Conexión: ' . Config::get('database.default'));
        $this->info('Base de datos de pruebas: ' . env('DB_DATABASE', 'esalud_test'));

        try {
            // Intentar conectar a la base de datos
            $connection = DB::connection('testing');
            $pdo = $connection->getPdo();
            
            $this->info('Conexión exitosa a la base de datos de pruebas');
            
            // Probar una consulta simple
            $result = $connection->select('SELECT 1');
            $this->info('Consulta de prueba exitosa');
        } catch (\Exception $e) {
            $this->error('Error de conexión: ' . $e->getMessage());
            return 1;
        }

        return 0;
    }
}
