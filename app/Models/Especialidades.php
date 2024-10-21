<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/* Especialidades Model
 *
 * @property int $id
 * @property string $descripcion
 *
 * @package App\Models
 */
class Especialidades extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'especialidades';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descripcion'
    ];

    /**
     * Get the profesional that owns the especialidad.
     */
    public function especialidad(): BelongsTo
    {
        return $this->belongsTo(Profesional::class);
    }

}
