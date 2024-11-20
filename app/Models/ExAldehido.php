<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class ExAldehido extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_pvmoal';
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'estado_id',
        'fecha_control',
        'fecha_ingreso',
        'fecha_prox_control',
        'fecha_ult_control',
        'comentario'
    ];
}
