<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Examen;
use App\Models\Notificacion;
use App\Notifications\ExamenVencimientoNotification;
use Illuminate\Support\Facades\Log;

class ExamenNotificationService 
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
     * Establecer modelos de exámenes a procesar
     *
     * @param array $modelosExamenes
     * @return self
     */
    public function setModelosExamenes(array $modelosExamenes)
    {
        $this->modelosExamenes = $modelosExamenes;
        return $this;
    }

    /**
     * Generar notificaciones para exámenes próximos a vencer
     * 
     * @param bool $dryRun Modo de prueba sin envío real
     * @param int $diasAntelacion Días de anticipación para notificación
     * @return \Illuminate\Support\Collection
     */
    public function generarNotificacionesVencimiento($dryRun = false, $diasAntelacion = 60)
    {
        // Registrar inicio del proceso
        Log::info('Iniciando generación de notificaciones de exámenes próximos a vencer', [
            'dias_anticipacion' => $diasAntelacion,
            'modo_prueba' => $dryRun
        ]);

        // Obtener exámenes próximos a vencer
        $examenes = $this->obtenerExamenesProximosAVencer($diasAntelacion);

        $notificaciones = collect();

        foreach ($examenes as $examen) {
            try {
                $notificacion = $this->procesarNotificacionExamen($examen, $dryRun);
                
                if ($notificacion) {
                    $notificaciones->push($notificacion);
                }
            } catch (\Exception $e) {
                Log::error("Error al generar notificación para examen", [
                    'examen_id' => $examen->id,
                    'tipo_examen' => class_basename(get_class($examen)),
                    'mensaje' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
            }
        }

        // Registrar resumen
        Log::info('Generación de notificaciones completada', [
            'total_examenes' => $examenes->count(),
            'total_notificaciones' => $notificaciones->count(),
            'dias_anticipacion' => $diasAntelacion,
            'modo_prueba' => $dryRun
        ]);

        return $notificaciones;
    }

    /**
     * Procesar notificación para un examen específico
     *
     * @param Examen $examen
     * @param bool $dryRun
     * @return Notificacion|null
     */
    public function procesarNotificacionExamen($examen, $dryRun = false)
    {
        Log::info("Procesando notificación para examen", [
            'examen_id' => $examen->id,
            'tipo_examen' => class_basename(get_class($examen)),
            'fecha_prox_control' => $examen->fecha_prox_control
        ]);

        // Verificar si el paciente existe
        if (!$examen->paciente) {
            Log::warning("Examen sin paciente asociado: {$examen->id}", [
                'examen' => [
                    'id' => $examen->id,
                    'tipo' => class_basename(get_class($examen)),
                    'fecha_prox_control' => $examen->fecha_prox_control
                ]
            ]);
            return null;
        }

        Log::info("Paciente encontrado", [
            'paciente_id' => $examen->paciente->id,
            'paciente_nombre' => $examen->paciente->nombre,
            'paciente_email' => $examen->paciente->email,
            'paciente_activo' => $examen->paciente->activo
        ]);

        // Verificar si el paciente tiene email
        if (!$examen->paciente->email) {
            Log::warning("Paciente sin email: {$examen->paciente->id}", [
                'paciente' => [
                    'id' => $examen->paciente->id,
                    'nombre' => $examen->paciente->nombre,
                    'activo' => $examen->paciente->activo
                ]
            ]);
            return null;
        }

        // Verificar si ya tiene notificación
        $notificacionExistente = Notificacion::where('paciente_id', $examen->paciente->id)
            ->where('tipo_examen', class_basename(get_class($examen)))
            ->where('fecha_prox_control', $examen->fecha_prox_control)
            ->first();

        if ($notificacionExistente) {
            Log::info("Ya existe notificación para este examen", [
                'examen_id' => $examen->id,
                'notificacion_id' => $notificacionExistente->id
            ]);
            return null;
        }

        // Crear notificación
        $notificacion = Notificacion::create([
            'paciente_id' => $examen->paciente->id,
            'tipo_examen' => class_basename(get_class($examen)),
            'examinable_type' => get_class($examen),
            'examinable_id' => $examen->id,
            'estado' => $dryRun ? 'simulado' : 'pendiente',
            'canal_notificacion' => 'base_datos',
            'fecha_control' => $examen->fecha_ultimo_control ?? null,
            'fecha_prox_control' => $examen->fecha_prox_control,
            'intentos' => 0
        ]);

        Log::info("Notificación creada", [
            'notificacion_id' => $notificacion->id,
            'examen_id' => $examen->id,
            'paciente_id' => $examen->paciente->id,
            'dry_run' => $dryRun
        ]);

        // Marcar examen como notificado si no es dry run
        if (!$dryRun) {
            $examen->fecha_notificacion = now();
            $examen->save();
        }

        return $notificacion;
    }

    /**
     * Obtener exámenes próximos a vencer
     * 
     * @param int $diasAntelacion Días de anticipación para notificación
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function obtenerExamenesProximosAVencer($diasAntelacion = 60)
    {
        $now = now();
        $examenesPorNotificar = collect();

        // Rango de fechas para búsqueda
        $fechaObjetivoIni = $now->copy()->subMonths(1);
        $fechaObjetivoTer = $now->copy()->addMonths(12);

        Log::info("Buscando exámenes próximos a vencer", [
            'fecha_inicio' => $fechaObjetivoIni->format('Y-m-d'),
            'fecha_fin' => $fechaObjetivoTer->format('Y-m-d'),
            'dias_anticipacion' => $diasAntelacion,
            'modelos_examenes' => array_map('class_basename', $this->modelosExamenes)
        ]);

        foreach ($this->modelosExamenes as $modeloExamen) {
            try {
                $examenes = $modeloExamen::whereBetween('fecha_prox_control', [$fechaObjetivoIni, $fechaObjetivoTer])
                    ->whereHas('paciente', function ($query) {
                        $query->where('activo', 1 || 'true')
                              ->whereNotNull('email');  // Solo pacientes con email
                    })
                    ->with(['paciente' => function ($query) {
                        $query->select('id', 'nombre', 'email', 'rut', 'apellidos');
                    }])
                    ->get();

                Log::info("Exámenes encontrados en {$modeloExamen}", [
                    'total' => $examenes->count(),
                    'detalles' => $examenes->map(function($examen) {
                        return [
                            'id' => $examen->id,
                            'fecha_prox_control' => $examen->fecha_prox_control,
                            'paciente_id' => $examen->paciente_id,
                            'paciente_email' => $examen->paciente->email
                        ];
                    })->toArray()
                ]);

                // Agregar tipo de examen a cada registro
                $examenes = $examenes->map(function ($examen) use ($modeloExamen) {
                    $examen->tipo_examen = class_basename($modeloExamen);
                    return $examen;
                });

                $examenesPorNotificar = $examenesPorNotificar->merge($examenes);
            } catch (\Exception $e) {
                Log::error("Error al buscar exámenes en {$modeloExamen}", [
                    'mensaje' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
            }
        }

        // Ordenar por fecha de próximo control
        $examenesPorNotificar = $examenesPorNotificar->sortBy('fecha_prox_control');

        Log::info("Resumen de exámenes por notificar", [
            'total_examenes' => $examenesPorNotificar->count()
        ]);

        return $examenesPorNotificar;
    }

    /**
     * Reintentar notificaciones fallidas
     * 
     * @return int Número de notificaciones reintentadas
     */
    public function reintentarNotificacionesFallidas()
    {
        $notificacionesFallidas = Notificacion::where('estado', 'fallida')
            ->where('intentos', '<', 3)
            ->where('tipo_examen', 'like', 'Ex%')
            ->get();

        $reintentosExitosos = 0;

        foreach ($notificacionesFallidas as $notificacion) {
            try {
                $examen = $notificacion->examinable;
                
                if ($examen && $examen->paciente) {
                    $examen->paciente->notify(
                        new ExamenVencimientoNotification($examen)
                    );

                    $notificacion->update([
                        'estado' => 'enviada',
                        'intentos' => $notificacion->intentos + 1,
                        'fecha_envio' => now()
                    ]);

                    $reintentosExitosos++;
                }
            } catch (\Exception $e) {
                Log::error("Error reintentando notificación ID {$notificacion->id}: " . $e->getMessage());
            }
        }

        Log::info('Reintento de notificaciones de exámenes', [
            'total_reintentadas' => $notificacionesFallidas->count(),
            'reintentadas_exitosamente' => $reintentosExitosos
        ]);

        return $reintentosExitosos;
    }

    /**
     * Depurar registros de exámenes
     * 
     * @param string $modeloExamen
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function depurarRegistrosExamenes($modeloExamen)
    {
        $now = now();
        $fechaObjetivoIni = $now->copy()->subDays(1);
        $fechaObjetivoTer = $now->copy()->addDays(60);

        Log::info("Depuración de registros de exámenes", [
            'modelo' => class_basename($modeloExamen),
            'tabla' => (new $modeloExamen)->getTable(),
            'fecha_inicio' => $fechaObjetivoIni->format('Y-m-d'),
            'fecha_fin' => $fechaObjetivoTer->format('Y-m-d')
        ]);

        // Obtener todos los registros en el rango de fechas
        $registros = $modeloExamen::whereBetween('fecha_prox_control', [$fechaObjetivoIni, $fechaObjetivoTer])
            ->with(['paciente' => function($query) {
                $query->select('id', 'nombre', 'email', 'activo');
            }])
            ->get();

        Log::info("Registros encontrados", [
            'total' => $registros->count(),
            'detalles' => $registros->map(function($registro) {
                return [
                    'id' => $registro->id,
                    'fecha_prox_control' => $registro->fecha_prox_control,
                    'paciente' => [
                        'id' => $registro->paciente->id ?? 'N/A',
                        'nombre' => $registro->paciente->nombre ?? 'N/A',
                        'email' => $registro->paciente->email ?? 'N/A',
                        'activo' => $registro->paciente->activo ?? 'N/A'
                    ]
                ];
            })->toArray()
        ]);

        return $registros;
    }
}
