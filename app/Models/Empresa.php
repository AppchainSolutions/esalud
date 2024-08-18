<?php

namespace App\Models;

use App\Models\Paciente;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Empresa extends Model
{
    use HasFactory;
    public function paciente(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }
    protected $table = 'empresa';
    protected $fillable = [
        'descripcion',
        'direccion',
        'telefono1',
        'email'
    ];
}
