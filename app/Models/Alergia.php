<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Paciente;


class Alergia extends Model
{
    use HasFactory;
    public function paciente(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }

    protected $table = 'alergia';
    protected $fillable = [
        'paciente_id',
        'comentario',
        'alergia',
    ];
}
