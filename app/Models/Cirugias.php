<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cirugias extends Model
{
    use HasFactory;

    public function cirugias(): HasMany
    {
        return $this->hasMany(Pacientes::class, 'paciente_id', 'id');
    }

    protected $table = 'cirugias';

    protected $fillable = [
        'paciente_id',
        'comentario',
        'cirugia',
        'fecha_cirugia',
    ];
}
