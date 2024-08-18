<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExSomnolencia extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_somnolencia';
    protected $fillable = [
        'paciente_id',
        'fecha_examen',
        'fecha_primer',
        'fecha_segundo',
        'nivel_riesgo',
        'resultado',
        'comentario'
    ];
}
