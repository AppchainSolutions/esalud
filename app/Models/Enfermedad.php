<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enfermedad extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->hasMany(Paciente::class);
    } 
   
    protected $table = 'enfermedad';
    protected $fillable = [
        'paciente_id',
        'comentario',
        'descripcion',
    ];
}
