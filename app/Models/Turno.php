<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FichaCronicos;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Turno extends Model
{
    use HasFactory;
    public function atencion(): BelongsTo
    {
        return $this->belongsTo(FichaCronicos::class);
    }
    protected $table = 'turno';

    protected $fillable = [
        'descripcion',
    ];
}
