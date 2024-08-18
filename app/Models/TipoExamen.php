<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\ExEpo;
class TipoExamen extends Model
{
    use HasFactory;
    public function exepo(): HasMany
    {
        return $this->hasMany(ExEpo::class);
    }
    protected $table = 'tipo_examen';

    protected $fillable = [
        'descripcion',
    ];
}
