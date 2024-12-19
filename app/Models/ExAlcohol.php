<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExAlcohol extends Model
{
    use HasFactory;

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'examen_ayd';
    protected $fillable = [
        'paciente_id',
        'estado_examen',
        'idpgp',
        'fecha_control',
        'test_drogas',
        'item',
        'comentario'
    ];
}
