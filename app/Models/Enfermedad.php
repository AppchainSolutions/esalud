<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TrastornoCronico;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enfermedad extends Model
{
    use HasFactory;
    public function trastorno_cronico(): BelongsTo
    {
        return $this->belongsTo(TrastornoCronico::class);
    }
   
    protected $table = 'enfermedad';
    protected $fillable = [
        'paciente_id',
        'trastorno_cronico',
        'comentario',
    ];
}
