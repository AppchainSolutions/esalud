<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Nacionalidad extends Model
{
    use HasFactory;
    public function nacionalidad(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'nacionalidad', 'id');
    }
    protected $table = 'nacionalidad';

    protected $fillable = [
        'descripcion',
    ];
}
