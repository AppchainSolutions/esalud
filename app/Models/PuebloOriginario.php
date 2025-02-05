<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PuebloOriginario extends Model
{
    use HasFactory;
    public function puebloOriginario(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'pueblo', 'id');
    }
    protected $table = 'pueblo_originario';

    protected $fillable = [
        'descripcion',
    ];
}
