<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class EstadoCivil extends Model
{
    use HasFactory;

    public function estado_civil(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'estado_civil', 'id');
    }
    protected $table = 'estado_civil';

    protected $fillable = [
        'descripcion',
    ];
}
