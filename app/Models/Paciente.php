<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Paciente extends Model
{
    use HasFactory;

    public function atenciones(): HasMany
    {
        return $this->hasMany(AtencionDiaria::class);
    }
    public function licencia(): HasMany
    {
        return $this->hasMany(LicenciaMedica::class);
    }
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
    public function factorRiesgo(): HasMany
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
    public function familiar(): HasMany
    {
        return $this->hasMany(AntecedenteFamiliar::class);
    }
    public function diat(): HasMany
    {
        return $this->hasMany(Diat::class);
    }
    public function diep(): HasMany
    {
        return $this->hasMany(Diep::class);
    }
    public function certificacion(): HasMany
    {
        return $this->hasMany(Certificacion::class);
    }
    public function estadoCertificacion(): HasMany
    {
        return $this->hasMany(EstadoCertificacion::class);
    }
    public function exAsma(): HasMany
    {
        return $this->hasMany(ExAsma::class);
    }
    public function exAlcohol(): HasMany
    {
        return $this->hasMany(ExAlcohol::class);
    }
    public function exEpo(): HasMany
    {
        return $this->hasMany(ExEpo::class);
    }

    public function exEquilibrio(): HasMany
    {
        return $this->hasMany(ExEquilibrio::class);
    }
    public function exPsico(): HasMany
    {
        return $this->hasMany(ExPsico::class);
    }
    public function exPVTMERT(): HasMany
    {
        return $this->hasMany(ExPVTMERT::class);
    }
    public function exRespirador(): HasMany
    {
        return $this->hasMany(ExRespirador::class);
    }
    public function exRuido(): HasMany
    {
        return $this->hasMany(ExRuido::class);
    }
    public function exSalud(): HasMany
    {
        return $this->hasMany(ExSalud::class);
    }
    public function exSilice(): HasMany
    {
        return $this->hasMany(ExSilice::class);
    }
    public function exSolvente(): HasMany
    {
        return $this->hasMany(ExSolvente::class);
    }
    public function exSomnolencia(): HasMany
    {
        return $this->hasMany(ExSomnolencia::class);
    }

    public function empresa(): BelongsTo
    {
        return $this->belongsTo(Empresa::class, 'empresa', 'id');
    }
    public function unidad(): BelongsTo
    {
        return $this->belongsTo(Unidad::class, 'unidad', 'id');
    }
    public function area(): BelongsTo
    {
        return $this->belongsTo(Area::class, 'area', 'id');
    }
    public function ceco(): BelongsTo
    {
        return $this->belongsTo(Ceco::class, 'ceco', 'id');
    }

    public function estado_civil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class, 'estado_civil', 'id');
    }
    public function afp(): BelongsTo
    {
        return $this->belongsTo(Afp::class, 'afp', 'id');
    }
  
    public function nacionalidad(): BelongsTo
    {
        return $this->belongsTo(Nacionalidad::class, 'nacionalidad', 'id');
    }
    public function genero(): BelongsTo
    {
        return $this->belongsTo(Genero::class, 'genero', 'id');
    }
    public function estadoCivil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class, 'estado_civil', 'id');
    }
    public function grupoSanguineo(): BelongsTo
    {
        return $this->belongsTo(GrupoSanguineo::class, 'grupo_sanguineo', 'id');
    }
    // public function nivelInstruccion(): BelongsTo
    // {
    //     return $this->belongsTo(NivelInstruccion::class, 'nivel_instruccion', 'id');
    // }
    public function ley_social(): BelongsTo
    {
        return $this->belongsTo(LeySocial::class, 'ley_social', 'id');
    }
    public function planta(): BelongsTo
    {
        return $this->belongsTo(Planta::class, 'planta', 'id');
    }

    public function seguroSalud(): BelongsTo
    {
        return $this->belongsTo(SeguroSalud::class);
    }

    public function nivelInstruccion(): BelongsTo
    {
        return $this->belongsTo(NivelInstruccion::class, 'nivel_instruccion', 'id');
    }

    public function prevision(): BelongsTo
    {
        return $this->belongsTo(Prevision::class, 'prevision', 'id');
    }
    public function puebloOriginario(): BelongsTo
    {
        return $this->belongsTo(PuebloOriginario::class, 'pueblo', 'id');
    }
    public function religion(): BelongsTo
    {
        return $this->belongsTo(Religion::class, 'religion', 'id');
    }
    public function modalidad(): BelongsTo
    {
        return $this->belongsTo(Modalidad::class, 'modalidad', 'id');
    }
    public function exposicion(): BelongsTo
    {
        return $this->belongsTo(Exposicion::class, 'exposicion', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function tieneAcceso()
    {
        return !is_null($this->user_id);
    }

    public function getNombreCompletoAttribute()
    {
        return "{$this->nombres} {$this->apellidos}";
    }

    public function generarTokenActivacion()
    {
        $this->token_activacion = Str::random(64);
        $this->save();
        return $this->token_activacion;
    }

    public function estaActivado()
    {
        return !is_null($this->user_id);
    }

    protected $table = 'paciente';
    protected $fillable = [
        'user_id',
        'actividad_economica',
        'activo',
        'afp',
        'apellidos',
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
        'certificacion',
        'estado_certificacion',
        'exposicion',
        'fecha_nacimiento',
        'factor_riesgo',
        'genero',
        'grupo_sanguineo',
        'ley_social',
        'modalidad',
        'nacionalidad',
        'nivel_instruccion',
        'nombre',
        'ocupacion',
        'planta',
        'prevision',
        'profesion',
        'protocolo_minsal',
        'pueblo_originario',
        'religion',
        'seguro',
        'telefono',
        'telefono1',
        'telefono2',
        'token_activacion',
        'unidad',
        'user_id',
        'rut',
    ];

    protected $casts = [
        'fecha_nacimiento' => 'date',
    ];
}
