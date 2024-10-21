<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Pacientes;
use App\Models\Especialidades;


class Servicios extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descripcion',
    ];

    /**
     * Obtiene la especialidad asociada al servicio.
     *
     * @return BelongsTo
     */
    public function especialidad(): BelongsTo
    {
        return $this->belongsTo(Especialidades::class);
    }

    /**
     * Obtiene los pacientes asociados al servicio.
     *
     * @return BelongsToMany
     */
    public function pacientes(): BelongsToMany
    {
        return $this->belongsToMany(Pacientes::class);
    }

    /**
     * Obtiene los profesionales asociados al servicio.
     *
     * @return BelongsToMany
     */
    public function profesionales(): BelongsToMany
    {
        return $this->belongsToMany(Profesional::class);
    }
}
