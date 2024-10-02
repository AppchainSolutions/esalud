<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class EstadoCivil extends Model
{
    use HasFactory;

    public function estadoCivil(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'estado_civil';

    protected $fillable = [
        'descripcion',
    ];
}
