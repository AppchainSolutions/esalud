<?php

namespace App\Models\Traits;

use App\Models\Notificacion;

trait TieneNotificacionesVencimiento
{
    /**
     * Relación polimórfica con notificaciones
     * 
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function notificaciones()
    {
        return $this->morphMany(Notificacion::class, 'examinable');
    }

    /**
     * Scope para obtener exámenes próximos a vencer
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int $meses Número de meses para considerar
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeProximosAVencer($query, $meses = 2)
    {
        return $query->where('fecha_vencimiento', '<=', now()->addMonths($meses))
                     ->where('fecha_vencimiento', '>', now());
    }
}
