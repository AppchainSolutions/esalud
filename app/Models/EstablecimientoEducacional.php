<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstablecimientoEducacional extends Model
{
    use HasFactory;
    public function establecimiento_educacional_id(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'establecimiento_educacional', 'id');
    }
    protected $table = 'establecimiento_educacional';

    protected $fillable = [
        'descripcion',
    ];
}
