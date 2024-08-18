<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\TipoEnfermedad;
use App\Models\Seguro;

class Diep extends Model
{
    use HasFactory;

    public function tipo_enfermedad(): BelongsTo
    {
        return $this->belongsTo(TipoEnfermedad::class);
    }
    public function seguro(): BelongsTo
    {
        return $this->belongsTo(Seguro::class, 'seguro');
    }


    protected $table = 'diep';
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'enfermedad',
        'seguro',
        'estado_diep',
        'fecha_admision',
        'folio',
        'numero_resolucion',
        'origen_denuncia',
        'sucursal',
        'tipo_enfermedad',
        'validado_por',
        'comentario',
    ];
}
