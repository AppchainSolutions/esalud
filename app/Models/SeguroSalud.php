<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Paciente;

class SeguroSalud extends Model
{
    use HasFactory;
    public function seguroSalud(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }

    protected $table = 'seguro_salud';

    protected $fillable = [
        'descripcion',
    ];
}
