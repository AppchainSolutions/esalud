<?php

namespace App\Models;

use App\Models\Afp;
use App\Models\Alergia;
use App\Models\AntecedenteFamiliar;
use App\Models\Calles;
use App\Models\Cirugia;
use App\Models\Enfermedad;
use App\Models\EstadoCivil;
use App\Models\EstablecimientoEducacional;
use App\Models\FactorRiesgo;
use App\Models\GrupoSanguineo;
use App\Models\Instruccion;
use App\Models\LeySocial;
use App\Models\Medicamento;
use App\Models\Modalidad;
use App\Models\Nacionalidad;
use App\Models\NivelInstruccion;
use App\Models\Prevision;
use App\Models\Pueblo;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Vacuna;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Paciente extends Model
{
    use HasFactory;

    public function alergia(): HasMany
    {
        return $this->hasMany(Alergia::class);
    }
    public function enfermedad(): HasMany
    {
        return $this->hasMany(Enfermedad::class);
    }
    public function cirugia(): HasMany
    {
        return $this->hasMany(Cirugia::class);
    }
    public function factor(): HasMany
    {
        return $this->hasMany(FactorRiesgo::class);
    }
    public function medicamento(): HasMany
    {
        return $this->hasMany(Medicamento::class);
    }
    public function vacuna(): HasMany
    {
        return $this->hasMany(Vacuna::class);
    }
    public function antecedenteFamiliar(): HasMany
    {
        return $this->hasMany(AntecedenteFamiliar::class);
    }
    public function Calles(): BelongsTo
    {
        return $this->belongsTo(Calles::class);
    }
    public function seguroSalud(): BelongsTo
    {
        return $this->belongsTo(SeguroSalud::class);
    }
    public function nacionalidad(): BelongsTo
    {
        return $this->belongsTo(Nacionalidad::class);
    }
    public function estadoCivil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class);
    }
    public function afp(): BelongsTo
    {
        return $this->belongsTo(Afp::class);
    }
    public function grupoSanguineo(): BelongsTo
    {
        return $this->belongsTo(GrupoSanguineo::class);
    }
    public function nivelInstruccion(): BelongsTo
    {
        return $this->belongsTo(NivelInstruccion::class,);
    }
    public function leySocial(): BelongsTo
    {
        return $this->belongsTo(LeySocial::class);
    }
    public function prevision(): BelongsTo
    {
        return $this->belongsTo(Prevision::class);
    }
    public function puebloOriginario(): BelongsTo
    {
        return $this->belongsTo(PuebloOriginario::class);
    }
    public function religion(): BelongsTo
    {
        return $this->belongsTo(Religion::class);
    }
    public function modalidad(): BelongsTo
    {
        return $this->belongsTo(Modalidad::class);
    }
    public function establecimientoEducacional(): BelongsTo
    {
        return $this->belongsTo(EstablecimientoEducacional::class);
    }

    protected $table = 'paciente';
       protected $fillable = [
        'apellido_responsable',
        'apellidos',
        'Calles_id',
        'Calles_responsable_id',
        'ciudad_responsable',
        'ciudad',
        'comunidad_lgbtq',
        'comunidad_lgtbq_responsable',
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
        'password',
        'pertenece_pie',
        'prevision_id',
        'prevision_responsable_id',
        'profesion',
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
