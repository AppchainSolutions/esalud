<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use App\Models\Paciente;

class RegistroActividad extends Model
{
    use HasFactory;

    /**
     * Nombre de la tabla
     *
     * @var string
     */
    protected $table = 'registro_actividades';

    /**
     * Campos que se pueden asignar masivamente
     *
     * @var array
     */
    protected $fillable = [
        'usuario_id',
        'paciente_id',
        'tipo_evento',
        'descripcion',
        'ip_address',
        'user_agent'
    ];

    /**
     * Relación con el usuario
     *
     * @return BelongsTo
     */
    public function usuario(): BelongsTo
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    /**
     * Relación con el paciente
     *
     * @return BelongsTo
     */
    public function paciente(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'paciente_id');
    }

    /**
     * Scope para filtrar por tipo de evento
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $tipoEvento
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePorTipoEvento($query, string $tipoEvento)
    {
        return $query->where('tipo_evento', $tipoEvento);
    }
}
