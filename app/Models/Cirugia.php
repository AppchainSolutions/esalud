<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cirugia extends Model
{
    use HasFactory;
    
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }

    protected $table = 'cirugia';
    protected $fillable = [
        'paciente_id',
        'comentario',
        'cirugia',
        'fecha_cirugia'
    ];
}
