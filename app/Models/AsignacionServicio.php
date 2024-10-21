<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Servicios;
use App\Models\Pacientes;


/**
 * AsignacionServicio model.
 *
 * Represents a service assignment for a patient.
 */
class AsignacionServicio extends Model
{
    use HasFactory;

    /**
     * Get the patient that owns the service assignment.
     *
     * @return BelongsTo
     */
    public function pacientes(): BelongsTo
    {
        return $this->belongsTo(Servicios::class);
    }

    public function servicios(): HasMany
    {
        return $this->hasMany(Servicios::class, 'asignacion_servicio', 'paciente_id', 'servicio_id');
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'asignacion_servicio';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'paciente_id',
        'servicio_id',
        'fecha_asignacion',
    ];
}
