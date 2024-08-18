<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\AtencionDiaria;
class Cie10Model extends Model
{
    use HasFactory;
    public function cie10(): BelongsTo
    {
        return $this->belongsTo(AtencionDiaria::class, 'cie10', 'id');
    }
    protected $table = 'cie10';

    protected $fillable = [
        'descripcion',
    ];
}
