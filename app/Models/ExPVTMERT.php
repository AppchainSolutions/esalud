<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExPVTMERT extends Model
{
    use HasFactory;

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_pvt';
    protected $fillable = [
        'paciente_id',
        'estado_examen',
        'fecha_examen',
        'fecha_control',
        'nordico',
        'quickdash',
        'derivacion',
        'comentario',
    ];
}
