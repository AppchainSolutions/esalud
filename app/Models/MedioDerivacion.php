<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\FichaCronicos;

class MedioDerivacion extends Model
{
    use HasFactory;
    public function atencion(): HasMany
    {
        return $this->hasMany(FichaCronicos::class);
    }
    protected $table = 'medio_derivacion';

    protected $fillable = [
        'descripcion',
    ];
}
