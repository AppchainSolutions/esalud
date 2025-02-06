<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Accidente;
use App\Models\TipoAccidente;
use App\Models\SeguroSalud;


class Diat extends Model
{
    use HasFactory;

    public function accidente(): BelongsTo
    {
        return $this->belongsTo(Accidente::class);
    }
    public function tipo_accidente(): BelongsTo
    {
        return $this->belongsTo(TipoAccidente::class);
    }
    public function seguroSalud(): BelongsTo
    {
        return $this->belongsTo(SeguroSalud::class);
    }


    protected $table = 'diat';
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'accidente',
        'seguro_salud',
        'estado_diat',
        'fecha_admision',
        'folio',
        'numero_resolucion',
        'origen_denuncia',
        'sucursal',
        'tipo_accidente',
        'validado_por',
        'comentario',
    ];
}
