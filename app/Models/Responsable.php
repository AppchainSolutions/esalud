<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Responsable extends Model
{
    use HasFactory;

    public function atencion(): BelongsTo
    {
        return $this->belongsTo(AtencionDiaria::class);
    }

    protected $table = 'responsable';

    protected $fillable = [
        'descripcion',
    ];
}
