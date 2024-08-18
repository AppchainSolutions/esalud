<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pueblo extends Model
{
    use HasFactory;
    public function pueblo(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'pueblo', 'id');
    }
    protected $table = 'pueblo';

    protected $fillable = [
        'descripcion',
    ];
}
