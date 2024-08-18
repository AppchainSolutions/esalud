<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;
class Instruccion extends Model
{
    use HasFactory;
    public function instruccion(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'instruccion', 'id');
    }
    protected $table = 'instruccion';

    protected $fillable = [
        'descripcion',
    ];
}
