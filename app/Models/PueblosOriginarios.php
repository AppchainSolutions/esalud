<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Pacientes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PueblosOriginarios extends Model
{
    use HasFactory;
    public function puebloOriginario(): BelongsTo
    {
        return $this->belongsTo(Pacientes::class);
    }
    protected $table = 'pueblos_originarios';

    protected $fillable = [
        'descripcion',
    ];
}
