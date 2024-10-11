<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Genero extends Model
{
    use HasFactory;
    public function genero(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'genero';

    protected $fillable = [
        'descripcion',
    ];
}
