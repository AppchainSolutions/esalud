<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FichaPsicologia extends Model
{
    use HasFactory;

    protected $table = 'ficha_psicologia';

    protected $fillable = [
        'nombre',
        'apellidos',
        'email',
        'telefono',
        'direccion',
        'especialidad_id',
        'foto',
    ];
}
