<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExPsico extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_psm';
    protected $fillable = [
        'paciente_id',
        'estado_examen',
        'tipo_vehiculo',
        'contraindicacion',
        'fecha_solicitud',
        'fecha_realizacion',
        'fecha_recepcion',
        'fecha_vencimiento',
        'dias_restantes',
        'comentario',
    ];
}
