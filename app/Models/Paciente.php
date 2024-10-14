<?php

namespace App\Models;

use App\Models\Afp;
use App\Models\Alergia;
use App\Models\AntecedenteFamiliar;
use App\Models\Calle;
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
    public function calle(): BelongsTo
    {
        return $this->belongsTo(Calle::class);
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
        'actividad_economica',
        'lista_espera',
        'afp_id',
        'apellidos',
        'calle_id',
        'ciudad',
        'direccion',
        'donante',
        'edad',
        'email',
        'estado_civil_id',
        'establecimiento_educacional_id',
        'fecha_nacimiento',
        'genero_id',
        'grupo_sanguineo_id',
        'ley_social_id',
        'modalidad_id',
        'nacionalidad_id',
        'nivel_instruccion_id',
        'nombre',
        'ocupacion',
        'prevision_id',
        'pueblo_originario_id',
        'religion_id',
        'rut',
        'seguro_salud_id',
        'telefono1',
        'telefono2',
        'nombre_responsable',
        'apellido_responsable',
        'telefono_responsable',
        'rut_responsable',
        'direccion_responsable',
        'email_responsable',
        'parentesco_responsable',
        'ocupacion_responsable',
        'pueblo_originario_responsable_id',
        'nivel_instruccion_responsable_id',
        'religion_responsable_id',
        'fecha_nacimiento_responsable',
        'edad',
        'genero_responsable_id',
        'nacionalidad_responsable_id',
        'comunidad_lgtbq_responsable_id',
        'credencial_discapacidad_responsable_id',
        'estado_civil_responsable_id',
        'prevision_responsable_id',
    ];
}
