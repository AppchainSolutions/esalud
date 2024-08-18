<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Certificacion extends Model
{
    use HasFactory;
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    protected $table = 'certificaciones';
    protected $fillable = [
        'paciente_id',
        'certificacion',
        'tipo_certificacion',
        'fecha_certificacion',
        'fecha_caducidad',
    ];
}
