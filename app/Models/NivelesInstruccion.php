<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NivelesInstruccion extends Model
{
    use HasFactory;

    public function nivelInstruccion(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }

    protected $table = 'niveles_instruccion';

    protected $fillable = [
        'descripcion',
    ];
}
