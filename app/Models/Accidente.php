<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\AtencionDiaria;

class Accidente extends Model
{
    use HasFactory;
    public function atencion(): HasMany
    {
        return $this->hasMany(AtencionDiaria::class);
    }
    public function diat(): HasMany
    {
        return $this->hasMany(Diat::class);
    }
  
    protected $table = 'accidente';

    protected $fillable = [
        'descripcion',
    ];
}
