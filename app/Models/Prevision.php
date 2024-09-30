<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Prevision extends Model
{
    use HasFactory;
    public function prevision(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'prevision';

    protected $fillable = [
        'descripcion',
    ];
}
