<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;
use App\Models\EstadoExamen;
use App\Traits\TieneNotificacionesVencimiento;

class ExHumoNegro extends Model
{
    use HasFactory, TieneNotificacionesVencimiento;

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }

    protected $table = 'examen_pvmohn';
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'comentario',
       'fecha_control',
        'fecha_ingreso',
        'fecha_prox_control',
        'fecha_ult_control',
        'fecha_notificacion',
        'estado_examen',
    ];

    protected $dates = [
        'fecha_control',
        'fecha_ingreso',
        'fecha_prox_control',
        'fecha_ult_control',
        'fecha_notificacion',
    ];

    public function scopeProximosAVencer($query)
    {
        return $query->where('fecha_prox_control', '<=', now()->addMonths(2)->addWeek())
            ->where('fecha_prox_control', '>=', now())
            ->where('estado_examen', EstadoExamen::where('descripcion', 'Pendiente')->first()->id);
    }
}
