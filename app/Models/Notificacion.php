<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Notificacion extends Model
{
    protected $table = 'notificaciones';

    protected $fillable = [
        'examinable_type', 
        'examinable_id', 
        'paciente_id', 
        'tipo_examen', 
        'estado', 
        'fecha_control', 
        'fecha_prox_control', 
        'fecha_notificacion', 
        'intentos',
        'canal_notificacion'  
    ];

    protected $dates = [
        'fecha_control', 
        'fecha_prox_control', 
        'fecha_notificacion'
    ];

    /**
     * Relación polimórfica con exámenes
     * 
     * @return MorphTo
     */
    public function examinable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Relación con el paciente
     * 
     * @return BelongsTo
     */
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }

    /**
     * Scope para notificaciones pendientes
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePendientes($query)
    {
        return $query->where('estado', 'pendiente');
    }

    /**
     * Scope para notificaciones fallidas
     */
    public function scopeFallidas($query)
    {
        return $query->where('estado', 'fallida');
    }

    /**
     * Scope para notificaciones por canal
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $canal
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePorCanal($query, $canal)
    {
        return $query->where('canal_notificacion', $canal);
    }

    /**
     * Incrementar intentos de notificación
     */
    public function incrementarIntentos()
    {
        $this->intentos++;
        $this->save();
    }
}
