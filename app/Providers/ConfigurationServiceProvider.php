<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Config;

class ConfigurationServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Cargar configuraciones personalizadas
        $this->loadCustomConfigurations();
    }

    /**
     * Cargar configuraciones personalizadas
     */
    protected function loadCustomConfigurations()
    {
        // Configuraciones de exámenes
        $examenesConfig = require config_path('examenes.php');
        Config::set('examenes', $examenesConfig);

        // Configuraciones de notificaciones
        $notificacionesConfig = require config_path('notifications.php');
        Config::set('notifications', $notificacionesConfig);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
