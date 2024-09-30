<?php

namespace App\Models;

use App\Models\Paciente;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Religion extends Model
{
    use HasFactory;
    public function religion(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }
    protected $table = 'religion';

    protected $fillable = [
        'descripcion',
    ];
}
