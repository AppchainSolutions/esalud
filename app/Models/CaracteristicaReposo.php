<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\LicenciaMedica;
class CaracteristicaReposo extends Model
{
    use HasFactory;
    public function caract_reposo(): HasMany
    {
        return $this->hasMany(LicenciaMedica::class);
    }
    protected $table = 'caract_reposo';

    protected $fillable = [
        'descripcion',
    ];
}
