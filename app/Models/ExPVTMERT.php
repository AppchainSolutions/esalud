<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExPVTMERT extends Model
{
    use HasFactory;

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_pvt';
    protected $fillable = [
        'paciente_id',
        'nordico',
        'quickdash',
        'derivacion',
        'comentario',
        'fecha_examen',
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
}
