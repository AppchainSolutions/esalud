<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Generos extends Model
{
    use HasFactory;
    public function genero(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'generos';

    protected $fillable = [
        'descripcion',
    ];
}