<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class NivelInstruccion extends Model
{
    use HasFactory;
    public function nivelInstruccion(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'nivel_instruccion';

    protected $fillable = [
        'descripcion',
    ];
}
