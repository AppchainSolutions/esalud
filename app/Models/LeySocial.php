<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;
class LeySocial extends Model
{
    use HasFactory;
    public function ley_social(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'ley_social', 'id');
    }
    protected $table = 'ley_social';

    protected $fillable = [
        'descripcion',
    ];
}
