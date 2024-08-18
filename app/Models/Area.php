<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Paciente;
class Area extends Model
{
    use HasFactory;
    public function area(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'area', 'id');
    }
    protected $table = 'area';

    protected $fillable = [
        'descripcion',
    ];
}
