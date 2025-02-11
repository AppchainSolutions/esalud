<?php

require __DIR__ . '/../vendor/autoload.php';

// Configurar Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Paciente;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

class NotificacionProximosControles {
    public function ejecutarPrueba() {
        try {
            // Fecha actual
            $fechaActual = Carbon::now();
            
            // Log de diagnóstico
            Log::info('Diagnóstico de próximos controles', [
                'fecha_actual' => $fechaActual->format('Y-m-d')
            ]);

            // Tablas de exámenes a revisar
            $tablasExamenes = [
                'examen_pvmoal', 
                'examen_pvmohn', 
                'examen_pvmom',
                'examen_pvmor',
                'examen_pvmos',
                'examen_pvmosol',
                'examen_pvt'
                // Agregar más tablas de exámenes según sea necesario
            ];

            // Consulta para buscar próximos controles
            $pacientesProximos = collect();

            foreach ($tablasExamenes as $tabla) {
                // Buscar en cada tabla de exámenes
                $resultados = DB::table($tabla)
                    ->join('paciente', 'paciente.id', '=', $tabla . '.paciente_id')
                    ->whereNotNull($tabla . '.fecha_prox_control')
                    ->where($tabla . '.fecha_prox_control', '>', $fechaActual)
                    ->where($tabla . '.fecha_prox_control', '<=', $fechaActual->copy()->addMonths(2))
                    ->select(
                        'paciente.id',
                        'paciente.nombre', 
                        'paciente.apellidos',
                        $tabla . '.fecha_prox_control as fecha_proximo_control', 
                        $tabla . '.fecha_control',
                        DB::raw("'$tabla' as tipo_examen")
                    )
                    // Agregar condición para obtener el registro más reciente
                    ->orderBy($tabla . '.fecha_prox_control', 'desc')
                    ->groupBy('paciente.id')
                    ->get();

                $pacientesProximos = $pacientesProximos->merge($resultados);
            }

            // Eliminar duplicados basados en ID de paciente
            $pacientesProximos = $pacientesProximos->unique('id');

            // Mostrar detalles de los pacientes
            echo "Pacientes con próximos controles:\n";
            foreach ($pacientesProximos as $paciente) {
                echo "ID: {$paciente->id}, Nombre: {$paciente->nombre} {$paciente->apellidos}, " .
                     "Próximo Control: {$paciente->fecha_proximo_control}, " .
                     "Fecha Control: {$paciente->fecha_control}, " .
                     "Tipo Examen: {$paciente->tipo_examen}\n";
            }

            // Depuración detallada
            echo "Detalles completos de registros:\n";
            foreach ($tablasExamenes as $tabla) {
                echo "\nTabla: {$tabla}\n";
                $registros = DB::table($tabla)
                    ->select('id', 'paciente_id', 'fecha_prox_control', 'fecha_control', 'fecha_ingreso', 'estado_examen')
                    ->get();
                
                foreach ($registros as $registro) {
                    echo "ID: {$registro->id}, " .
                         "Paciente ID: {$registro->paciente_id}, " .
                         "Próximo Control: {$registro->fecha_prox_control}, " .
                         "Fecha Control: {$registro->fecha_control}, " .
                         "Fecha Ingreso: {$registro->fecha_ingreso}, " .
                         "Estado Examen: {$registro->estado_examen}\n";
                }
            }

            // Correo de prueba específico
            $correoPrueba = 'omar.ahumada@gmail.com';

            // Contador de notificaciones
            $notificacionesEnviadas = 0;

            foreach ($pacientesProximos as $paciente) {
                // Calcular días restantes para el próximo control
                $fechaControl = Carbon::parse($paciente->fecha_proximo_control);
                $diasRestantes = $fechaActual->diffInDays($fechaControl);

                // Preparar datos para el correo
                $datosCorreo = [
                    'nombre_paciente' => $paciente->nombre . ' ' . $paciente->apellidos,
                    'fecha_proximo_control' => $fechaControl->format('Y-m-d'),
                    'dias_restantes' => $diasRestantes,
                    'tipo_examen' => $paciente->tipo_examen
                ];

                // Enviar correo de notificación
                Mail::send('emails.proximo_control', $datosCorreo, function($message) use ($correoPrueba, $paciente) {
                    $message->to($correoPrueba)
                        ->subject('Próximo Control Médico - ' . $paciente->nombre . ' ' . $paciente->apellidos);
                });

                // Log de notificación
                Log::info('Notificación de próximo control generada', [
                    'paciente_id' => $paciente->id,
                    'email' => $correoPrueba,
                    'fecha_control' => $fechaControl,
                    'tipo_examen' => $paciente->tipo_examen
                ]);

                $notificacionesEnviadas++;
            }

            // Resultado final
            echo "\nVerificación de próximos controles completada:\n";
            echo "Pacientes con control próximo: {$pacientesProximos->count()}\n";
            echo "Notificaciones enviadas: {$notificacionesEnviadas}\n";

            return true;
        } catch (\Exception $e) {
            // Registro de errores
            Log::error('Error en notificación de próximos controles', [
                'mensaje' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            echo "Error: " . $e->getMessage() . "\n";
            return false;
        }
    }
}

// Ejecutar prueba
$prueba = new NotificacionProximosControles();
$resultado = $prueba->ejecutarPrueba();
