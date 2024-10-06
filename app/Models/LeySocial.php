<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;

class LeySocial extends Model
{
    use HasFactory;
    public function leySocial(): BelongsTo
    {
        return $this->belongsTo(Paciente::class);
    }
    protected $table = 'ley_social';

    protected $fillable = [
        'descripcion',
    ];
}
