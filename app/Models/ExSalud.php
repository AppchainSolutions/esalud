<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExSalud extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_salud';
    protected $fillable = [
        'paciente_id',
        'colesterol_hdl',
        'colesterol_ldl',
        'colesterol_total',
        'comentario',
        'creatinemia',
        'ecg',
        'espirometria',
        'estatus_id',
        'fecha_recepcion',
        'framingham',
        'glicemia',
        'hba1c',
        'hemoglobina',
        'hemograma',
        'optometria',
        'trigliceridos',
    ];
}
