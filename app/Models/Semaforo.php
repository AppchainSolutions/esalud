<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Semaforo extends Model
{
    use HasFactory;

    public function exepo(): HasMany
    {
        return $this->hasMany(ExEpo::class);
    }

    protected $table = 'semaforo';

    protected $fillable = [
        'descripcion',
    ];
}
