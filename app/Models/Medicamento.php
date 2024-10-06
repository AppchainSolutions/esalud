<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Medicamento extends Model
{
    use HasFactory;

    public function paciente(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }
    protected $table = 'medicamento';
    protected $fillable = [
        'paciente_id',
        'comentario',
        'medicamento',
    ];
}
