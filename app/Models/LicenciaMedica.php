<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class LicenciaMedica extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'licencia_medica';
    protected $fillable = [
        'paciente_id',
        'folio',
        'fecha_emision',
        'fecha_recepcion',
        'fecha_inicio',
        'fecha_termino',
        'comentario'
    ];
}
