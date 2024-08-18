<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class EstadoCertificacion extends Model
{
    use HasFactory;
    public function estado_certificacion(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'estado_certificacion', 'id');
    }
    protected $table = 'estado_certificacion';
    protected $fillable = [
        'descripcion',
    ];
}
