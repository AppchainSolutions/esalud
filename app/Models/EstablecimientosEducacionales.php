<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class EstablecimientosEducacionales extends Model
{
    use HasFactory;
    public function establecimientoEducacional(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'establecimientos_educacionales';

    protected $fillable = [
        'descripcion',
    ];
}
