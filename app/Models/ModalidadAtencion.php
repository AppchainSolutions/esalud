<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class ModalidadAtencion extends Model
{
    use HasFactory;
    public function modalidadAtencion(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'modalidadAtencion', 'id');
    }
    protected $table = 'modalidad_atencion';

    protected $fillable = [
        'descripcion',
    ];
}
