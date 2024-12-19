<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pacientes extends Model
{
    use HasFactory;

    public function alergia(): HasMany
    {
        return $this->hasMany(Alergias::class);
    }

    public function enfermedades(): HasMany
    {
        return $this->hasMany(Enfermedades::class);
    }

    public function cirugias(): HasMany
    {
        return $this->hasMany(Cirugias::class);
    }

    public function factoresRiesgo(): HasMany
    {
        return $this->hasMany(FactoresRiesgo::class);
    }

    public function medicamentos(): HasMany
    {
        return $this->hasMany(Medicamentos::class);
    }

    public function vacunas(): HasMany
    {
        return $this->hasMany(Vacunas::class);
    }

    public function antecedentesFamiliares(): HasMany
    {
        return $this->hasMany(AntecedentesFamiliares::class);
    }

    public function calles(): BelongsTo
    {
        return $this->belongsTo(Calles::class);
    }

    public function nacionalidades(): BelongsTo
    {
        return $this->belongsTo(Nacionalidades::class);
    }

    public function estadosCivil(): BelongsTo
    {
        return $this->belongsTo(EstadosCiviles::class);
    }

    public function gruposSanguineos(): BelongsTo
    {
        return $this->belongsTo(GruposSanguineos::class);
    }

    public function nivelesInstruccion(): BelongsTo
    {
        return $this->belongsTo(NivelesInstruccion::class);
    }

    public function previsiones(): BelongsTo
    {
        return $this->belongsTo(Previsiones::class);
    }

    public function pueblosOriginarios(): BelongsTo
    {
        return $this->belongsTo(PueblosOriginarios::class);
    }

    public function religiones(): BelongsTo
    {
        return $this->belongsTo(Religiones::class);
    }

    public function establecimientosEducacionales(): BelongsTo
    {
        return $this->belongsTo(EstablecimientosEducacionales::class);
    }

    protected $table = 'pacientes';

    protected $fillable = [
        'apellidos',
        'calle_id',
        'ciudad',
        'comunidad_lgbtq',
        'credencial_discapacidad',
        'direccion',
        'donante',
        'edad',
        'email',
        'establecimiento_educacional_id',
        'estado_civil_id',
        'fecha_nacimiento',
        'genero_id',
        'grupo_sanguineo_id',
        'nacionalidad_id',
        'nivel_instruccion_id',
        'nombre',
        'ocupacion',
        'pertenece_pie',
        'prevision_id',
        'profesor',
        'pueblo_originario_id',
        'religion_id',
        'remember_token',
        'rut',
        'telefono1',
        'telefono2',
        'apellidos_responsable',
        'calle_responsable_id',
        'ciudad_responsable',
        'comunidad_lgbtq_responsable',
        'credencial_discapacidad_responsable',
        'direccion_responsable',
        'donante_responsable',
        'edad_responsable',
        'email_responsable',
        'estado_civil_responsable_id',
        'fecha_nacimiento_responsable',
        'genero_responsable_id',
        'grupo_sanguineo_responsable_id',
        'nacionalidad_responsable_id',
        'nivel_instruccion_responsable_id',
        'nombre_responsable',
        'ocupacion_responsable',
        'parentesco_responsable',
        'prevision_responsable_id',
        'pueblo_originario_responsable_id',
        'religion_responsable_id',
        'rut_responsable',
        'telefono_responsable',
    ];
}
