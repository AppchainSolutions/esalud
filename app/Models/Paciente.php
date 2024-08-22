<?php

namespace app\Models;

use App\Models\Afp;
use App\Models\Alergia;
use App\Models\AntecedenteFamiliar;
use App\Models\Area;
use App\Models\FichaCronicos;
use App\Models\Cirugia;
use App\Models\Enfermedad;
use App\Models\EstadoCivil;
use App\Models\ExAlcohol;
use App\Models\ExEpo;
use App\Models\Exposicion;
use App\Models\FactorRiesgo;
use App\Models\GrupoSanguineo;
use App\Models\Instruccion;
use App\Models\LeySocial;
use App\Models\Medicamento;
use App\Models\Modalidad;
use App\Models\Prevision;
use App\Models\Pueblo;
use App\Models\Religion;
use App\Models\Seguro;
use App\Models\Vacuna;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Paciente extends Model
{
    use HasFactory;

    public function ficha_cronicos(): HasMany
    {
        return $this->hasMany(FichaCronicos::class, 'paciente_id', 'id');
    }
    public function alergia(): HasMany
    {
        return $this->hasMany(Alergia::class, 'paciente_id', 'id');
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
    public function seguro(): BelongsTo
    {
        return $this->belongsTo(Seguro::class, 'seguro', 'id');
    }
    public function estado_civil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class, 'estado_civil', 'id');
    }
    public function afp(): BelongsTo
    {
        return $this->belongsTo(Afp::class, 'afp', 'id');
    }
    public function grupo_sanguineo(): BelongsTo
    {
        return $this->belongsTo(GrupoSanguineo::class, 'grupo_sanguineo', 'id');
    }
    public function instruccion(): BelongsTo
    {
        return $this->belongsTo(Instruccion::class, 'instruccion', 'id');
    }
    public function ley_social(): BelongsTo
    {
        return $this->belongsTo(LeySocial::class, 'ley_social', 'id');
    }
    public function prevision(): BelongsTo
    {
        return $this->belongsTo(Prevision::class, 'prevision', 'id');
    }
    public function pueblo(): BelongsTo
    {
        return $this->belongsTo(Pueblo::class, 'pueblo', 'id');
    }
    public function religion(): BelongsTo
    {
        return $this->belongsTo(Religion::class, 'religion', 'id');
    }
    public function modalidad(): BelongsTo
    {
        return $this->belongsTo(Modalidad::class, 'modalidad', 'id');
    }


    protected $table = 'paciente';
    protected $fillable = [
        'rut',
        'nombre',
        'apellidos',
        'actividad_economica',
        'activo',
        'afp',
        'area',
        'cargo',
        'ceco',
        'ciudad',
        'direccion',
        'donante',
        'edad',
        'email',
        'empresa',
        'estado_civil',
        'exposicion',
        'fecha_nacimiento',
        'genero',
        'grupo_sanguineo',
        'instruccion',
        'ley_social',
        'modalidad',
        'nacionalidad',
        'ocupacion',
        'planta',
        'prevision',
        'profesion',
        'pueblo',
        'religion',
        'seguro',
        'telefono1',
        'telefono2',
        'unidad',
    ];

}
