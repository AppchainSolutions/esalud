<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Nacionalidades extends Model
{
    use HasFactory;

    public function nacionalidad(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }

    protected $table = 'nacionalidades';

    protected $fillable = [
        'descripcion',
    ];
}
