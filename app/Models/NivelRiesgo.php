<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\ExSomnolencia;

class NivelRiesgo extends Model
{
    use HasFactory;
    public function nivel_riesgo(): HasMany
    {
        return $this->hasMany(ExSomnolencia::class);
    }
    protected $table = 'nivel_riesgo';

    protected $fillable = [
        'descripcion',
    ];
}
