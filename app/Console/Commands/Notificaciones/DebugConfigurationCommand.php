<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;

class DebugConfigurationCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'config:debug {key?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Depurar configuraciones personalizadas';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $key = $this->argument('key');

        if ($key) {
            $this->debugConfigKey($key);
        } else {
            $this->debugAllConfigs();
        }

        // Verificar variables de entorno
        $this->debugEnvironmentVariables();
    }

    /**
     * Depurar una clave de configuración específica
     */
    protected function debugConfigKey($key)
    {
        $this->info("Depurando configuración: $key");
        try {
            $config = Config::get($key);
            $this->line(print_r($config, true));
        } catch (\Exception $e) {
            $this->error("Error al obtener configuración: " . $e->getMessage());
        }
    }

    /**
     * Depurar todas las configuraciones personalizadas
     */
    protected function debugAllConfigs()
    {
        $configKeys = [
            'examenes',
            'notifications',
            'examenes.modelos.principales',
            'notifications.examenes.modelos'
        ];

        foreach ($configKeys as $key) {
            $this->debugConfigKey($key);
        }
    }

    /**
     * Depurar variables de entorno
     */
    protected function debugEnvironmentVariables()
    {
        $this->info("\nVariables de Entorno:");
        $envVars = [
            'NOTIFICACIONES_EXAMENES_DIAS_MIN',
            'NOTIFICACIONES_EXAMENES_DIAS_MAX',
            'NOTIFICACIONES_EXAMENES_INTENTOS',
            'NOTIFICACIONES_EXAMENES_COLA',
            'NOTIFICACIONES_EXAMENES_RETRASO'
        ];

        foreach ($envVars as $var) {
            $this->line("$var: " . env($var, 'No definida'));
        }
    }
}
