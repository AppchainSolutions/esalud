<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Pacientes;

/**
 * Class Alergias
 *
 * @property int $id
 * @property int $paciente_id
 * @property string $comentario
 * @property string $alergia
 * @property Pacientes $paciente
 */
class Alergias extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'paciente_id',
        'comentario',
        'alergia',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'alergias';

    /**
     * Get the paciente that owns the alergia.
     */
    public function alergias(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }
}
