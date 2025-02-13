<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
     */
    public function especialidad(): BelongsTo
    {
        return $this->belongsTo(Especialidades::class);
    }

    /**
     * Obtiene los paciente asociados al servicio.
     */
    public function paciente(): BelongsToMany
    {
        return $this->belongsToMany(Paciente::class);
    }

    /**
     * Obtiene los profesionales asociados al servicio.
     */
    public function profesionales(): BelongsToMany
    {
        return $this->belongsToMany(Profesional::class);
    }
}
