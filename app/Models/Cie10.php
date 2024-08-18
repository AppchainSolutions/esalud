<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Paciente;
use App\Models\Diep;

class Cie10 extends Model
{
    use HasFactory;
    public function cie10(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }
    public function enfermedad(): HasMany
    {
        return $this->hasMany(Diep::class);
    }
    protected $table = 'cie10';

    protected $fillable = [
        'descripcion',
    ];
}
