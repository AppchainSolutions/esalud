<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Unidad extends Model
{
    use HasFactory;
    public function unidad(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'unidad', 'id');
    }
    protected $table = 'unidad';

    protected $fillable = [
        'area',
        'descripcion'
    ];
}
