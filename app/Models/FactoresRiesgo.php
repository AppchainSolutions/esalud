<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pacientes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FactoresRiesgo extends Model
{
    use HasFactory;

    public function factoresRiesgo(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }
    protected $table = 'factores_riesgo';
    protected $fillable = [
        'paciente_id',
        'factor_riesgo',
        'comentario',
    ];
}
