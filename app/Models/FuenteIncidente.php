<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\FichaCronicos;

class FuenteIncidente extends Model
{
    use HasFactory;
    public function atencion(): HasMany
    {
        return $this->hasMany(FichaCronicos::class);
    }
    protected $table = 'fuente_incidente';

    protected $fillable = [
        'descripcion',
    ];
}
