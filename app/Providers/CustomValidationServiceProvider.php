<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;
use App\Helpers\RutGenerator;

class CustomValidationServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Validación de RUT chileno
        Validator::extend('cl_rut', function ($attribute, $value, $parameters, $validator) {
            // Validar RUT usando el método del helper
            $resultado = RutGenerator::validarRut($value);
            
            // Depuración
            \Log::info('Validación de RUT', [
                'rut_original' => $value,
                'resultado' => $resultado
            ]);
            
            return $resultado;
        });

        // Validación de edad máxima
        Validator::extend('max_age', function ($attribute, $value, $parameters, $validator) {
            $maxAge = $parameters[0] ?? 120;
            $birthDate = \Carbon\Carbon::parse($value);
            return $birthDate->diffInYears() <= $maxAge;
        });

        // Validación de email más estricta
        Validator::extend('strict_email', function ($attribute, $value, $parameters, $validator) {
            // Regex más estricta para email
            return preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $value) === 1;
        });
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
