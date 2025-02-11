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
        'intentos'
    ];

    protected $dates = [
        'fecha_control', 
        'fecha_prox_control', 
        'fecha_notificacion'
    ];

    /**
     * Relación polimórfica con exámenes
     */
    public function examinable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Relación con paciente
     */
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }

    /**
     * Scope para notificaciones pendientes
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
     * Incrementar intentos de notificación
     */
    public function incrementarIntentos()
    {
        $this->intentos++;
        $this->save();
    }
}
