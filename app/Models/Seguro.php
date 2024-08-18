<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Paciente;
use App\Models\Diat;
use App\Models\Diep;

class Seguro extends Model
{
    use HasFactory;
    public function seguro(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }
    public function seguro_diat(): HasMany
    {
        return $this->hasMany(Diat::class, 'seguro_diat', 'id');
    }
    public function seguro_diep(): HasMany
    {
        return $this->hasMany(Diep::class, 'seguro_diep', 'id');
    }
    protected $table = 'seguro';

    protected $fillable = [
        'descripcion',
    ];
}
