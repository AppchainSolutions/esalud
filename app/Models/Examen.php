<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Examen extends Model
{
    use HasFactory;

    protected $table = 'examenes';

    protected $fillable = [
        'paciente_id', 
        'tipo_examen', 
        'fecha_realizacion', 
        'fecha_prox_control', 
        'estado', 
        'observaciones'
    ];

    protected $dates = [
        'fecha_realizacion', 
        'fecha_prox_control'
    ];

    // Relación con Paciente
    public function paciente()
    {
        return $this->belongsTo(Paciente::class, 'paciente_id');
    }

    // Relación con Notificaciones
    public function notificaciones()
    {
        return $this->hasMany(Notificacion::class, 'examen_id');
    }

    // Scope para exámenes próximos a vencer
    public function scopeProximosAVencer($query, $mesesAdelante = 2)
    {
        return $query->where('fecha_prox_control', '<=', now()->addMonths($mesesAdelante))
                     ->where('fecha_prox_control', '>=', now());
    }

    // Método para determinar si está próximo a vencer
    public function estaProximoAVencer($mesesAdelante = 2)
    {
        $fechaProxControl = $this->fecha_prox_control;
        return $fechaProxControl 
            && $fechaProxControl->between(now(), now()->addMonths($mesesAdelante));
    }

    // Método para calcular días restantes hasta el próximo control
    public function diasHastaProximoControl()
    {
        return $this->fecha_prox_control 
            ? now()->diffInDays($this->fecha_prox_control, false) 
            : null;
    }
}
