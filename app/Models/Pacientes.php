<?php

namespace App\Models;

use App\Models\Alergias;
use App\Models\AntecedentesFamiliares;
use App\Models\Calles;
use App\Models\Cirugias;
use App\Models\Enfermedades;
use App\Models\EstadosCiviles;
use App\Models\EstablecimientosEducacionales;
use App\Models\FactoresRiesgo;
use App\Models\GruposSanguineos;
use App\Models\LeyesSociales;
use App\Models\Medicamentos;
use App\Models\Nacionalidades;
use App\Models\NivelesInstruccion;
use App\Models\Previsiones;
use App\Models\PueblosOriginarios;
use App\Models\Religiones;
use App\Models\Vacunas;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
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
        return $this->belongsTo(NivelesInstruccion::class,);
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
        'apellidos_responsable',
        'apellidos',
        'calle_id',
        'calle_responsable_id',
        'ciudad_responsable',
        'ciudad',
        'comunidad_lgbtq',
        'comunidad_lgbtq_responsable',
        'credencial_discapacidad_responsable',
        'credencial_discapacidad',
        'direccion_responsable',
        'direccion',
        'donante_responsable',
        'donante',
        'edad_responsable',
        'edad',
        'email_responsable',
        'email',
        'establecimiento_educacional_id',
        'estado_civil_id',
        'estado_civil_responsable_id',
        'fecha_nacimiento_responsable',
        'fecha_nacimiento',
        'genero_id',
        'genero_responsable_id',
        'grupo_sanguineo_id',
        'grupo_sanguineo_responsable_id',
        'nacionalidad_id',
        'nacionalidad_responsable_id',
        'nivel_instruccion_id',
        'nivel_instruccion_responsable_id',
        'nombre_responsable',
        'nombre',
        'ocupacion_responsable',
        'ocupacion',
        'parentesco_responsable',
        'pertenece_pie',
        'prevision_id',
        'prevision_responsable_id',
        'profesor',
        'pueblo_originario_id',
        'pueblo_originario_responsable_id',
        'religion_id',
        'religion_responsable_id',
        'remember_token',
        'rut_responsable',
        'rut',
        'telefono_responsable',
        'telefono1',
        'telefono2'
    ];
}
