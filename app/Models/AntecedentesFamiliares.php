<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Pacientes;

class AntecedentesFamiliares extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'paciente_id',
        'parentesco',
        'patologia',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'antecedentes_familiares';

    /**
     * Get the paciente that owns the antecedente familiar.
     */
    public function antecedentesFamiliares(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }
}
