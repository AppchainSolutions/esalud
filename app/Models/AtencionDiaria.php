<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Accidente;
use App\Models\AccidenteCondicion;
use App\Models\Calificacion;
use App\Models\Derivacion;
use App\Models\ErrorCritico;
use App\Models\EstadoMental;
use App\Models\FuenteIncidente;
use App\Models\LugarAtencion;
use App\Models\MedioDerivacion;
use App\Models\Paciente;
use App\Models\Responsable;
use App\Models\SistemaAfectado;
use App\Models\TipoAtencion;
use App\Models\TipoLicencia;
use App\Models\Turno;

class AtencionDiaria extends Model
{
    use HasFactory;

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    public function turno(): BelongsTo
    {
        return $this->belongsTo(Turno::class);
    }
    public function lugar_atencion(): BelongsTo
    {
        return $this->belongsTo(LugarAtencion::class);
    }
    public function tipo_atencion(): BelongsTo
    {
        return $this->belongsTo(TipoAtencion::class, 'tipo_atencion_id', 'id');
    }
    public function sistema_afectado(): BelongsTo
    {
        return $this->belongsTo(SistemaAfectado::class);
    }
    public function derivacion(): BelongsTo
    {
        return $this->belongsTo(Derivacion::class);
    }
    public function medio_derivacion(): BelongsTo
    {
        return $this->belongsTo(MedioDerivacion::class);
    }
    public function fuente_incidente(): BelongsTo
    {
        return $this->belongsTo(FuenteIncidente::class);
    }
    public function error_critico(): BelongsTo
    {
        return $this->belongsTo(ErrorCritico::class);
    }
    public function estado_mental(): BelongsTo
    {
        return $this->belongsTo(EstadoMental::class);
    }
    public function accidente(): BelongsTo
    {
        return $this->belongsTo(Accidente::class);
    }
    public function accidente_condicion(): BelongsTo
    {
        return $this->belongsTo(AccidenteCondicion::class);
    }
    public function responsable(): BelongsTo
    {
        return $this->belongsTo(Responsable::class);
    }
    
    public function tipo_licencia(): BelongsTo
    {
        return $this->belongsTo(TipoLicencia::class);
    }
    public function calificacion(): BelongsTo
    {
        return $this->belongsTo(Calificacion::class);
    }

    protected $table = 'atencion_diaria';
    protected $fillable = [
        'paciente_id',
        'accidente_condicion',
        'accidente',
        'acompanado',
        'alerta_she',
        'area',
        'at_realizada_por',
        'calificacion',
        'comentario',
        'cuenta_acr',
        'declaracion_completa',
        'derivacion_inmediata',
        'derivacion',
        'descripcion_breve',
        'dias_descanso',
        'error_critico',
        'estado_mental',
        'fecha_atencion',
        'fuente_incidente',
        'hora_inicio',
        'hora_termino',
        'lugar_atencion',
        'medicamentos',
        'medio_derivacion',
        'motivo_consulta',
        'nombre_supervisor',
        'puede_reintegrarse',
        'responsable',
        'sistema_afectado',
        'tipo_atencion',
        'tipo_licencia',
        'turno_id',
    ];
}
