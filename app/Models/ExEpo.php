<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\EstadoEpo;
use App\Models\Bateria;
use App\Models\Paciente;
use App\Models\Semaforo;
use App\Models\TipoExamen;

class ExEpo extends Model
{
    use HasFactory;
    public function estado_epo(): BelongsTo
    {
        return $this->belongsTo(EstadoEpo::class);
    }
    public function bateria(): BelongsTo
    {
        return $this->belongsTo(Bateria::class);
    }

    public function semaforo(): BelongsTo
    {
        return $this->belongsTo(Semaforo::class);
    }
    public function tipo_examen(): BelongsTo
    {
        return $this->belongsTo(TipoExamen::class);
    }

    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }

    protected $table = 'examen_epo';
    protected $fillable = [
        'paciente_id',
        'codigo_verificacion',
        'comentario',
        'estado_epo',
        'fecha_realizacion',
        'fecha_recepcion',
        'fecha_solicitud',
        'fecha_vencimiento',
        'bateria_id',
        'numero_solicitud',
        'resultado',
        'semaforo',
        'tipo_examen',
    ];
}
