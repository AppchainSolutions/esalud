<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Calle extends Model
{
    use HasFactory;
    public function afp(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    
    protected $table = 'calle';

    protected $fillable = [
        'descripcion',
    ];
}
