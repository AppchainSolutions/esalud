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

class FichaCronicos extends Model
{
    use HasFactory;

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    
    protected $table = 'ficha_cronicos';
    protected $fillable = [
        'fecha',
        'paciente_id',
        'pa',
        'fc',
        'fr',
        'temp',
        'peso',
        'altura',
        'imc',
        'recomendacion_medica',
        'cambios_tratamiento',
        'derivacion_especialista',
        'fecha_examenes',
        'creatinina',
        'vfg',
        'glicemia',
        'colesterol_total',
        'trigliceridos',
        'ldl',
        'otro',
        'recomendacion_medica',
        'derivacion_especialista',
        'cambio_tratamiento',
        'comentario',
        'adherencia',
        'bienestar_fisico',
        'control_seguimiento',
        'estado_animo',
        'calidad_sueño',
        'dolor_malestar',
        'cumple_medicacion',
        'cumple_recomendacion',
        'cumple_dieta',
        'capacidad_tareas_diarias',
        'nivel_actividad_fisica',
        'capacidad_respiratoria',
        'fuerza_flexibilidad',
        'apoyo_familiares',
        'participacion_social',
        'acceso_recursos_salud',
    ];
}
