<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ExEquilibrio extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'examen_equilibrio';
    protected $fillable = [
        'paciente_id',
        'estatus_id',
        'fecha_examen',
        'comentario',
    ];
}
