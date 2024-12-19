<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;


class ExAsma extends Model
{
    use HasFactory;

    /**
     * The paciente that owns the ExAsma
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    
    protected $table = 'examen_asma';
    
    protected $fillable = [
        'paciente_id',
        'idpgp',
        'estado_examen',
        'fecha_ingreso',
        'fecha_control',
        'fecha_prox_control',
        'fecha_ult_control',
        'comentario',
    ];
}
