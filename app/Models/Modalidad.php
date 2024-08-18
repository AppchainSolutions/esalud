<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Modalidad extends Model
{
    use HasFactory;
    public function modalidadd(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'modalidad', 'id');
    }
    protected $table = 'modalidad';

    protected $fillable = [
        'descripcion',
    ];
}
