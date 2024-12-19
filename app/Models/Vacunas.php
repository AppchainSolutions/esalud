<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vacunas extends Model
{
    use HasFactory;

    public function vacunas(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }

    protected $table = 'vacunas';

    protected $fillable = [
        'paciente_id',
        'comentario',
        'vacuna',
        'fecha_vacuna',
        'tipo_vacuna',
    ];
}
