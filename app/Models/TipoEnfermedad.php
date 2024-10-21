<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TipoEnfermedad extends Model
{
    use HasFactory;

    public function diep(): HasMany
    {
        return $this->hasMany(Diep::class);
    }

    protected $table = 'tipo_enfermedad';

    protected $fillable = [
        'paciente_id',
        'descripcion',
    ];
}
