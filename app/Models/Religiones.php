<?php

namespace App\Models;

use App\Models\Pacientes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Religiones extends Model
{
    use HasFactory;
    public function religion(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }
    protected $table = 'religiones';

    protected $fillable = [
        'descripcion',
    ];
}
