<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vacuna extends Model
{
    use HasFactory;

    public function diep(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }

    protected $table = 'vacuna';
    protected $fillable = [
        'paciente_id',
        'comentario',
        'vacuna',
        'fecha_vacuna',
        'tipo_vacuna'
    ];
}
