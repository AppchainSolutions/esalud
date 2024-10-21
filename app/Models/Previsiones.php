<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Pacientes;

class Previsiones extends Model
{
    use HasFactory;
    public function prevision(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }
    protected $table = 'previsiones';

    protected $fillable = [
        'descripcion',
    ];
}
