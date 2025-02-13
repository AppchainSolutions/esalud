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
     * Configuración de notificaciones
     *
     * @var array
     */
    protected $config = [
        'dias_anticipacion' => 60,
        'canales_notificacion' => ['base_datos', 'email', 'sms'],
        'max_intentos' => 3,
        'rango_meses_busqueda' => [
            'atras' => 1,
            'adelante' => 12
        ]
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
     * Establecer configuración de notificaciones
     *
     * @param array $config
     * @return self
     */
    public function setConfig(array $config)
    {
        $this->config = array_merge($this->config, $config);
        return $this;
    }

    /**
     * Obtener configuración actual
     *
     * @param string|null $key
     * @return mixed
     */
    public function getConfig(?string $key = null)
    {
        return $key ? ($this->config[$key] ?? null) : $this->config;
    }

    /**
     * Obtener los modelos de exámenes registrados
     *
     * @return array
     */
    public function getModelosExamenes(): array
    {
        return $this->modelosExamenes ?? [];
    }

    /**
     * Genera notificaciones de vencimiento de exámenes
     * 
     * @param bool $dryRun Modo de prueba sin generar notificaciones reales
     * @param int|null $diasAntelacion Días de anticipación para notificación
     * @return \Illuminate\Support\Collection
     */
    public function generarNotificacionesVencimiento($dryRun = false, ?int $diasAntelacion = null)
    {
        // Usar días de anticipación de la configuración si no se proporciona
        $diasAntelacion = $diasAntelacion ?? $this->config['dias_anticipacion'];

        // Obtener exámenes próximos a vencer
        $examenes = $this->obtenerExamenesProximosAVencer($diasAntelacion);

        Log::info('Generando notificaciones de vencimiento', [
            'total_examenes' => $examenes->count(),
            'dias_anticipacion' => $diasAntelacion,
            'modo_prueba' => $dryRun
        ]);

        // Colección para almacenar notificaciones generadas
        $notificacionesGeneradas = collect();

        // Iterar sobre los exámenes
        foreach ($examenes as $examen) {
            try {
                // Eliminar notificaciones pendientes existentes
                $examen->notificaciones()->where('estado', 'pendiente')->delete();

                // Generar nueva notificación
                $notificacion = $this->crearNotificacion($examen, $dryRun);
                
                if ($notificacion) {
                    $notificacionesGeneradas->push($notificacion);
                }
            } catch (\Exception $e) {
                Log::error('Error al generar notificación', [
                    'examen_id' => $examen->id,
                    'modelo_examen' => get_class($examen),
                    'mensaje_error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
            }
        }

        Log::info('Resumen de notificaciones generadas', [
            'total_notificaciones' => $notificacionesGeneradas->count()
        ]);

        return $notificacionesGeneradas;
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
        // Registro detallado de inicio de procesamiento
        Log::info("Procesando notificación para examen", [
            'examen_id' => $examen->id,
            'tipo_examen' => class_basename(get_class($examen)),
            'fecha_prox_control' => $examen->fecha_prox_control,
            'canales_disponibles' => $this->config['canales_notificacion']
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

        // Crear notificación con canales configurados
        $notificacion = Notificacion::create([
            'paciente_id' => $examen->paciente->id,
            'tipo_examen' => class_basename(get_class($examen)),
            'examinable_type' => get_class($examen),
            'examinable_id' => $examen->id,
            'estado' => $dryRun ? 'simulado' : 'pendiente',
            'canales_notificacion' => json_encode($this->config['canales_notificacion']),
            'fecha_control' => $examen->fecha_ultimo_control ?? null,
            'fecha_prox_control' => $examen->fecha_prox_control,
            'intentos' => 0
        ]);

        // Registro de notificación creada
        Log::info("Notificación creada", [
            'notificacion_id' => $notificacion->id,
            'examen_id' => $examen->id,
            'paciente_id' => $examen->paciente->id,
            'canales' => $this->config['canales_notificacion'],
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

        // Rango de fechas para búsqueda configurable
        $fechaObjetivoIni = $now->copy()->subMonths($this->config['rango_meses_busqueda']['atras']);
        $fechaObjetivoTer = $now->copy()->addMonths($this->config['rango_meses_busqueda']['adelante']);

        Log::info("Buscando exámenes próximos a vencer", [
            'fecha_inicio' => $fechaObjetivoIni->format('Y-m-d'),
            'fecha_fin' => $fechaObjetivoTer->format('Y-m-d'),
            'dias_anticipacion' => $diasAntelacion,
            'modelos_examenes' => array_map('class_basename', $this->modelosExamenes)
        ]);

        // Depuración de parámetros
        Log::debug("Parámetros de búsqueda", [
            'now' => $now->format('Y-m-d H:i:s'),
            'dias_anticipacion' => $diasAntelacion,
            'fecha_objetivo_ini' => $fechaObjetivoIni->format('Y-m-d H:i:s'),
            'fecha_objetivo_ter' => $fechaObjetivoTer->format('Y-m-d H:i:s')
        ]);

        // Iterar sobre los modelos de exámenes
        foreach ($this->modelosExamenes as $modeloExamen) {
            try {
                // Consulta de exámenes próximos a vencer
                $examenesModelo = $modeloExamen::where(function($query) use ($now, $diasAntelacion, $fechaObjetivoIni, $fechaObjetivoTer) {
                    $query
                        // Exámenes con fecha de próximo control dentro del rango
                        ->whereBetween('fecha_prox_control', [$fechaObjetivoIni, $fechaObjetivoTer])
                        // Exámenes con paciente asociado
                        ->whereHas('paciente', function($subQuery) {
                            $subQuery->whereNotNull('email');
                        });
                })
                ->with(['paciente', 'notificaciones']) // Cargar relaciones
                ->get();

                Log::debug("Exámenes encontrados para $modeloExamen", [
                    'total_examenes' => $examenesModelo->count(),
                    'ids_examenes' => $examenesModelo->pluck('id')->toArray()
                ]);

                // Filtrar exámenes para notificación
                $examenesParaNotificar = $examenesModelo->filter(function($examen) {
                    // Depuración detallada
                    Log::debug("Evaluando examen", [
                        'examen_id' => $examen->id,
                        'fecha_prox_control' => $examen->fecha_prox_control,
                        'notificaciones_count' => $examen->notificaciones->count(),
                        'notificaciones_estados' => $examen->notificaciones->pluck('estado')->toArray()
                    ]);

                    // Siempre devolver true para forzar regeneración
                    return true;
                });

                Log::debug("Exámenes para notificar en $modeloExamen", [
                    'total_examenes' => $examenesParaNotificar->count(),
                    'ids_examenes' => $examenesParaNotificar->pluck('id')->toArray()
                ]);

                $examenesPorNotificar = $examenesPorNotificar->merge($examenesParaNotificar);
            } catch (\Exception $e) {
                Log::error("Error al buscar exámenes en $modeloExamen", [
                    'mensaje' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
            }
        }

        Log::info("Resumen de exámenes por notificar", [
            'total_examenes' => $examenesPorNotificar->count(),
            'ids_examenes' => $examenesPorNotificar->pluck('id')->toArray()
        ]);

        return $examenesPorNotificar;
    }

    /**
     * Reintentar notificaciones fallidas con límite de intentos configurable
     * 
     * @return int Número de notificaciones reintentadas
     */
    public function reintentarNotificacionesFallidas()
    {
        $notificacionesFallidas = Notificacion::where('estado', 'fallida')
            ->where('intentos', '<', $this->config['max_intentos'])
            ->where('tipo_examen', 'like', 'Ex%')
            ->get();

        $reintentosExitosos = 0;

        foreach ($notificacionesFallidas as $notificacion) {
            try {
                $examen = $notificacion->examinable;
                
                if ($examen && $examen->paciente) {
                    // Intentar notificación por diferentes canales
                    $canalesNotificacion = json_decode($notificacion->canales_notificacion, true) 
                        ?? $this->config['canales_notificacion'];

                    foreach ($canalesNotificacion as $canal) {
                        // Lógica de envío por canal
                        switch ($canal) {
                            case 'email':
                                $examen->paciente->notify(
                                    new ExamenVencimientoNotification($examen)
                                );
                                break;
                            case 'sms':
                                // Implementar lógica de envío por SMS
                                break;
                            // Otros canales...
                        }
                    }

                    $notificacion->update([
                        'estado' => 'enviada',
                        'intentos' => $notificacion->intentos + 1,
                        'fecha_envio' => now()
                    ]);

                    $reintentosExitosos++;
                    break; // Salir después del primer canal exitoso
                }
            } catch (\Exception $e) {
                Log::error("Error reintentando notificación ID {$notificacion->id}: " . $e->getMessage());
            }
        }

        Log::info('Reintento de notificaciones de exámenes', [
            'total_reintentadas' => $notificacionesFallidas->count(),
            'reintentadas_exitosamente' => $reintentosExitosos,
            'max_intentos' => $this->config['max_intentos']
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

    /**
     * Crear notificación para un examen específico
     *
     * @param Examen $examen
     * @param bool $dryRun
     * @return Notificacion|null
     */
    public function crearNotificacion($examen, $dryRun = false)
    {
        // Registro detallado de inicio de procesamiento
        Log::info("Creando notificación para examen", [
            'examen_id' => $examen->id,
            'tipo_examen' => class_basename(get_class($examen)),
            'fecha_prox_control' => $examen->fecha_prox_control,
            'canales_disponibles' => $this->config['canales_notificacion']
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

        // Crear notificación con canales configurados
        $notificacion = Notificacion::create([
            'paciente_id' => $examen->paciente->id,
            'tipo_examen' => class_basename(get_class($examen)),
            'examinable_type' => get_class($examen),
            'examinable_id' => $examen->id,
            'estado' => $dryRun ? 'simulado' : 'pendiente',
            'canales_notificacion' => json_encode($this->config['canales_notificacion']),
            'fecha_control' => $examen->fecha_ultimo_control ?? null,
            'fecha_prox_control' => $examen->fecha_prox_control,
            'intentos' => 0
        ]);

        // Registro de notificación creada
        Log::info("Notificación creada", [
            'notificacion_id' => $notificacion->id,
            'examen_id' => $examen->id,
            'paciente_id' => $examen->paciente->id,
            'canales' => $this->config['canales_notificacion'],
            'dry_run' => $dryRun
        ]);

        // Marcar examen como notificado si no es dry run
        if (!$dryRun) {
            $examen->fecha_notificacion = now();
            $examen->save();
        }

        return $notificacion;
    }
}
