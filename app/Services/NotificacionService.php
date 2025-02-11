<?php

namespace App\Services;

use App\Models\ExAldehido;
use App\Models\Notificacion;
use App\Models\EstadoExamen;
use App\Notifications\ExamenVencimientoNotification;
use Exception;
use Illuminate\Support\Facades\Log;

class NotificacionService
{
    /**
     * Modelos de exámenes a procesar
     */
    protected $modelosExamenes = [
        \App\Models\ExAldehido::class,
        \App\Models\ExHumoNegro::class,
        // Añadir otros modelos de exámenes
    ];

    /**
     * Generar notificaciones para exámenes próximos a vencer
     */
    public function generarNotificacionesVencimiento($dryRun = false)
    {
        // Registrar inicio del proceso
        Log::info('Iniciando generación de notificaciones de exámenes próximos a vencer');

        // Obtener exámenes próximos a vencer
        $examenes = $this->obtenerExamenesProximosAVencer();
        
        // Colección para almacenar notificaciones
        $notificaciones = collect();

        // Verificar si hay exámenes
        if ($examenes->isEmpty()) {
            Log::info('No se encontraron exámenes próximos a vencer');
            return $notificaciones;
        }

        // Procesar cada examen
        foreach ($examenes as $examen) {
            try {
                // Verificar si el paciente tiene usuario
                if (!$examen->paciente || !$examen->paciente->user) {
                    Log::warning("Paciente sin usuario para examen ID: {$examen->id}");
                    continue;
                }

                // Crear notificación
                $notificacion = $this->procesarNotificacionExamen($examen, $dryRun);
                
                // Agregar a la colección si se creó
                if ($notificacion) {
                    $notificaciones->push($notificacion);
                }

            } catch (\Exception $e) {
                Log::error("Error procesando notificación para examen ID {$examen->id}: " . $e->getMessage());
            }
        }

        // Registrar resumen
        Log::info('Generación de notificaciones completada', [
            'total_examenes' => $examenes->count(),
            'total_notificaciones' => $notificaciones->count(),
            'modo_prueba' => $dryRun
        ]);

        return $notificaciones;
    }

    /**
     * Procesar notificación para un examen específico
     *
     * @param mixed $examen
     * @param bool $dryRun
     * @return Notificacion|null
     */
    protected function procesarNotificacionExamen($examen, $dryRun = false)
    {
        // Verificar si ya existe una notificación reciente para este examen
        $notificacionExistente = Notificacion::where('examen_id', $examen->id)
            ->where('created_at', '>', now()->subDays(7))
            ->first();

        if ($notificacionExistente) {
            Log::info("Ya existe una notificación reciente para el examen ID: {$examen->id}");
            return null;
        }

        // Crear instancia de notificación
        $notificacion = new Notificacion([
            'examen_id' => $examen->id,
            'destinatario_id' => $examen->paciente->user->id,
            'tipo' => 'recordatorio_vencimiento',
            'estado' => $dryRun ? 'simulado' : 'pendiente',
            'intentos' => 0
        ]);

        // En modo de prueba, no enviar realmente la notificación
        if (!$dryRun) {
            try {
                // Enviar notificación
                $examen->paciente->user->notify(
                    new ExamenVencimientoNotification($examen)
                );
                
                $notificacion->estado = 'enviado';
                $notificacion->fecha_envio = now();
            } catch (\Exception $e) {
                Log::error("Error enviando notificación para examen ID {$examen->id}: " . $e->getMessage());
                $notificacion->estado = 'fallida';
                $notificacion->intentos = 1;
            }
        }

        // Guardar notificación
        $notificacion->save();

        return $notificacion;
    }

    /**
     * Obtener exámenes próximos a vencer
     */
    protected function obtenerExamenesProximosAVencer()
    {
        $examenes = collect();

        foreach ($this->modelosExamenes as $modeloExamen) {
            try {
                // Obtener estado 'Pendiente'
                $estadoPendiente = EstadoExamen::where('descripcion', 'Pendiente')->first();

                Log::debug("Estado Pendiente", [
                    'estado_id' => $estadoPendiente ? $estadoPendiente->id : 'No encontrado'
                ]);

                // Consulta detallada
                $query = $modeloExamen::query()
                    ->where('fecha_prox_control', '<=', now()->addMonths(2)->addWeek())
                    ->where('fecha_prox_control', '>=', now());

                if ($estadoPendiente) {
                    $query->where('estado_examen', $estadoPendiente->id);
                }

                $examenesPorModelo = $query->get();
                
                // Depuración
                Log::debug("Exámenes próximos a vencer para {$modeloExamen}", [
                    'total_examenes' => $examenesPorModelo->count(),
                    'parametros_consulta' => [
                        'fecha_actual' => now()->toDateString(),
                        'fecha_limite' => now()->addMonths(2)->addWeek()->toDateString(),
                        'estado_pendiente_id' => $estadoPendiente ? $estadoPendiente->id : 'N/A'
                    ],
                    'detalles_examenes' => $examenesPorModelo->map(function($examen) {
                        return [
                            'id' => $examen->id ?? 'N/A',
                            'paciente_id' => $examen->paciente_id ?? 'N/A',
                            'fecha_prox_control' => $examen->fecha_prox_control ?? 'N/A',
                            'estado_examen' => $examen->estado_examen ?? 'N/A'
                        ];
                    })->toArray()
                ]);

                $examenes = $examenes->merge($examenesPorModelo);
            } catch (\Exception $e) {
                Log::error("Error obteniendo exámenes para {$modeloExamen}: " . $e->getMessage());
            }
        }

        return $examenes;
    }

    /**
     * Reintentar notificaciones fallidas
     */
    public function reintentarNotificacionesFallidas()
    {
        $notificacionesFallidas = Notificacion::fallidas()
            ->where('intentos', '<', 3)
            ->get();

        foreach ($notificacionesFallidas as $notificacion) {
            $examen = $notificacion->examinable;
            
            try {
                $examen->paciente->user->notify(
                    new ExamenVencimientoNotification($examen)
                );

                // Actualizar estado de la notificación
                $notificacion->update([
                    'estado' => 'enviada',
                    'intentos' => $notificacion->intentos + 1,
                    'fecha_envio' => now()
                ]);
            } catch (\Exception $e) {
                Log::error("Error reintentando notificación ID {$notificacion->id}: " . $e->getMessage());
                $notificacion->update([
                    'intentos' => $notificacion->intentos + 1
                ]);
            }
        }
    }
}
