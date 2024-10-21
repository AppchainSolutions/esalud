<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Derivacion extends Model
{
    use HasFactory;

    public function atencion(): HasMany
    {
        return $this->hasMany(AtencionDiaria::class);
    }

    protected $table = 'derivacion';

    protected $fillable = [
        'descripcion',
    ];
}
