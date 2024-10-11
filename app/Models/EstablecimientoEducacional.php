<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class EstablecimientoEducacional extends Model
{
    use HasFactory;
    public function establecimientoEducacional(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'establecimiento_educacional';

    protected $fillable = [
        'descripcion',
    ];
}
