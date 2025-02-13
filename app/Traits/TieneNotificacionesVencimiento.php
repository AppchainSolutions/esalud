<?php

namespace App\Traits;

use App\Models\Notificacion;
use App\Services\ExamenNotificationService;
use Illuminate\Support\Facades\App;

trait TieneNotificacionesVencimiento
{
    /**
     * Relación polimórfica con notificaciones
     */
    public function notificaciones()
    {
        return $this->morphMany(Notificacion::class, 'examinable');
    }

    /**
     * Scope para encontrar exámenes próximos a vencer
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeProximosAVencer($query)
    {
        /** @var ExamenNotificationService $notificationService */
        $notificationService = App::make(ExamenNotificationService::class);
        return $notificationService->scopeProximosAVencer($query);
    }

    /**
     * Generar notificación de vencimiento
     * 
     * @param string $estado Estado de la notificación
     * @return Notificacion
     */
    public function generarNotificacionVencimiento($estado = 'pendiente')
    {
        return Notificacion::create([
            'examinable_type' => get_class($this),
            'examinable_id' => $this->id,
            'paciente_id' => $this->paciente_id ?? null,
            'tipo_examen' => class_basename(get_class($this)),
            'fecha_control' => $this->fecha_control ?? now(),
            'fecha_proximo_control' => $this->fecha_prox_control,
            'estado' => $estado
        ]);
    }

    /**
     * Verificar si el examen está próximo a vencer
     * 
     * @return bool
     */
    public function estaProximoAVencer()
    {
        /** @var ExamenNotificationService $notificationService */
        $notificationService = App::make(ExamenNotificationService::class);
        return $notificationService->esExamenProximoAVencer($this);
    }
}
