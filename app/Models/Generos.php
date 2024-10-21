<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Generos extends Model
{
    use HasFactory;

    public function genero(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }

    protected $table = 'generos';

    protected $fillable = [
        'descripcion',
    ];
}
