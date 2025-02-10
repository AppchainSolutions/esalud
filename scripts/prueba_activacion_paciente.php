<?php

require __DIR__ . '/../vendor/autoload.php';

// Configurar Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Paciente;
use App\Services\PacienteActivacionService;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class PruebaActivacionPaciente {
    public function ejecutarPrueba() {
        try {
            // Buscar paciente de prueba
            $paciente = Paciente::where('email', 'omar.ahumadag@gmail.com')->first();

            if (!$paciente) {
                throw new \Exception("No se encontró paciente con el email de prueba");
            }

            // Servicio de activación
            $service = app(PacienteActivacionService::class);

            // Generar URL de activación
            $activationUrl = $service->generarUrlActivacion($paciente);

            // Registro de logs
            Log::info('Prueba de activación de paciente', [
                'paciente_id' => $paciente->id,
                'email' => $paciente->email,
                'activation_url' => $activationUrl
            ]);

            // Envío de correo
            Mail::to($paciente->email)->send(
                new \App\Mail\PacienteActivacionMail(
                    $paciente, 
                    $activationUrl, 
                    24
                )
            );

            // Imprimir resultados
            echo "Prueba de activación completada:\n";
            echo "Paciente: {$paciente->nombre} {$paciente->apellidos}\n";
            echo "Email: {$paciente->email}\n";
            echo "URL de Activación: {$activationUrl}\n";

            return true;
        } catch (\Exception $e) {
            // Registro de errores
            Log::error('Error en prueba de activación', [
                'mensaje' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            echo "Error: " . $e->getMessage() . "\n";
            return false;
        }
    }
}

// Ejecutar prueba
$prueba = new PruebaActivacionPaciente();
$resultado = $prueba->ejecutarPrueba();
