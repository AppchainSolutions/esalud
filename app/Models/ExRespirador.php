<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;


class ExRespirador extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_respirador';
    protected $fillable = [
        'paciente_id',
        'fecha_examen',
        'prueba_ajuste',
        'talla_respirador',
        'modelo_marca',
        'comentario',
    ];
}