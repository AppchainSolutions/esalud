<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExMetales extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_pvmom';
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'estatus',
        'fecha_control',
        'fecha_ingreso',
        'fecha_prox_control',
        'fecha_ult_control',
        'comentario'
    ];
}
