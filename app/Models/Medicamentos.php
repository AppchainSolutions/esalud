<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pacientes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Medicamentos extends Model
{
    use HasFactory;

    public function paciente(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }
    protected $table = 'medicamentos';
    protected $fillable = [
        'paciente_id',
        'comentario',
        'medicamento',
    ];
}
