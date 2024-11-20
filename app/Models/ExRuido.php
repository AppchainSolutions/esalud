<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;


class ExRuido extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_pvmor';
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'estatus_id',
        'fecha_control',
        'fecha_ingreso',
        'fecha_prox_control',
        'fecha_ult_control',
        'comentario',
    ];
}
