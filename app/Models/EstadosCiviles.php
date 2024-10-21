<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Pacientes;

class EstadosCiviles extends Model
{
    use HasFactory;

    public function estadoCivil(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }
    protected $table = 'estados_civiles';

    protected $fillable = [
        'descripcion',
    ];
}
