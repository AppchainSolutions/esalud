<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Enfermedad;
use Illuminate\Database\Eloquent\Relations\HasMany;



class TrastornoCronico extends Model
{
    use HasFactory;

    public function enfermedad(): HasMany
    {
        return $this->hasMany(Enfermedad::class);
    }

    protected $table = 'trastorno_cronico';

    protected $fillable = [
        'descripcion',
    ];
}
