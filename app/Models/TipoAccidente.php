<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Diat;

class TipoAccidente extends Model
{
    use HasFactory;
    public function diat(): HasMany
    {
        return $this->hasMany(Diat::class);
    }
    
    protected $table = 'tipo_accidente';
    protected $fillable = [
        'descripcion',
    ];
}
