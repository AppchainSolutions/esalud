<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * EstablecimientosEducacionales Model
 *
 * This model represents the 'establecimientos_educacionales' table.
 * It defines the relationship with the Paciente model.
 *
 * @property string $descripcion Description of the educational establishment
 *
 *
 * @mixin \Eloquent
 */
class EstablecimientosEducacionales extends Model
{
    use HasFactory;

    public function establecimientoEducacional(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }

    protected $table = 'establecimientos_educacionales';

    protected $fillable = [
        'descripcion',
    ];
}
