<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Pacientes;

/**
 * EstablecimientosEducacionales Model
 *
 * This model represents the 'establecimientos_educacionales' table.
 * It defines the relationship with the Paciente model.
 *
 * @package App\Models
 * @property string $descripcion Description of the educational establishment
 *
 * @method static \Illuminate\Database\Eloquent\Builder|EstablecimientosEducacionales newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EstablecimientosEducacionales newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EstablecimientosEducacionales query()
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
