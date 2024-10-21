<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Enfermedades extends Model
{
    use HasFactory;

    public function paciente(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }

    protected $table = 'enfermedades';

    protected $fillable = [
        'paciente_id',
        'comentario',
        'descripcion',
    ];
}
