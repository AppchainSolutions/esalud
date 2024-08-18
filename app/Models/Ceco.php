<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class Ceco extends Model
{
    use HasFactory;
    public function ceco(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'ceco', 'id');
    }
    protected $table = 'ceco';

    protected $fillable = [
        'descripcion',
    ];
}
