<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class GrupoSanguineo extends Model
{
    use HasFactory;
    public function grupo_sanguineo(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'grupo_sanguineo', 'id');
    }
    protected $table = 'grupo_sanguineo';

    protected $fillable = [
        'descripcion',
    ];
}
