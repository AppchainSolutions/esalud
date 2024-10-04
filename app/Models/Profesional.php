<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Profesional extends Model
{
    use HasFactory;

    public function especialidad(): BelongsTo
    {
        return $this->belongsTo(Profesional::class);
    }
    protected $table = 'profesional';

    protected $fillable = [
        'nombre',
        'apellidos',
        'email',
        'telefono',
        'direccion',
        'especialidad_id',
        'foto',
    ];
}
