<?php

namespace App\Models;

use App\Models\Afp;
use App\Models\Alergias;
use App\Models\AntecedenteFamiliar;
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

    public function alergias(): HasMany
    {
        return $this->hasMany(Alergias::class, 'paciente_id', 'id');
    }
    public function enfermedad(): HasMany
    {
        return $this->hasMany(Enfermedad::class, 'paciente_id', 'id');
    }
    public function cirugia(): HasMany
    {
        return $this->hasMany(Cirugia::class, 'paciente_id', 'id');
    }
    public function factor(): HasMany
    {
        return $this->hasMany(FactorRiesgo::class, 'paciente_id', 'id');
    }
    public function medicamento(): HasMany
    {
        return $this->hasMany(Medicamento::class, 'paciente_id', 'id');
    }
    public function vacuna(): HasMany
    {
        return $this->hasMany(Vacuna::class, 'paciente_id', 'id');
    }
    public function familiar(): HasMany
    {
        return $this->hasMany(AntecedenteFamiliar::class, 'paciente_id', 'id');
    }
    public function seguro_salud_id(): BelongsTo
    {
        return $this->belongsTo(SeguroSalud::class, 'seguro', 'id');
    }
    public function estado_civil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class, 'estado_civil', 'id');
    }
    public function afp_id(): BelongsTo
    {
        return $this->belongsTo(Afp::class, 'afp', 'id');
    }
    public function grupo_sanguineo(): BelongsTo
    {
        return $this->belongsTo(GrupoSanguineo::class, 'grupo_sanguineo', 'id');
    }
    public function nivel_instruccion_id(): BelongsTo
    {
        return $this->belongsTo(Instruccion::class, 'instruccion', 'id');
    }
    public function ley_social_id(): BelongsTo
    {
        return $this->belongsTo(LeySocial::class, 'ley_social', 'id');
    }
    public function prevision_id(): BelongsTo
    {
        return $this->belongsTo(Prevision::class, 'prevision', 'id');
    }
    public function pueblo_indigena_id(): BelongsTo
    {
        return $this->belongsTo(Pueblo::class, 'pueblo', 'id');
    }
    public function religion_id(): BelongsTo
    {
        return $this->belongsTo(Religion::class, 'religion', 'id');
    }
    public function modalidad(): BelongsTo
    {
        return $this->belongsTo(Modalidad::class, 'modalidad', 'id');
    }
    public function establecimiento_educacional_id(): BelongsTo
    {
        return $this->belongsTo(EstablecimientoEducacional::class, 'establecimiento_educacional', 'id');
    }

    protected $table = 'paciente';
       protected $fillable = [
        'actividad_economica',
        'activo',
        'afp_id',
        'apellidos',
        'calle_id',
        'ciudad',
        'direccion',
        'donante',
        'edad',
        'email',
        'estado_civil',
        'establecimiento_educacional_id',
        'fecha_nacimiento',
        'genero',
        'grupo_sanguineo',
        'ley_social_id',
        'modalidad',
        'nacionalidad_id',
        'nivel_instruccion_id',
        'nombre',
        'ocupacion',
        'prevision_id',
        'pueblo_indigena_id',
        'religion_id',
        'rut',
        'seguro_salud_id',
        'telefono1',
        'telefono2',
    ];
}
