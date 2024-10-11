<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Paciente;


class AsignacionServicio extends Model
{
    use HasFactory;

    public function paciente(): HasMany
    {
        return $this->hasMany(Paciente::class);
    }
    protected $table = 'antecedente_familiar';
    protected $fillable = [
        'paciente_id',
        'parentesco',
        'patologia',
    ];
}
