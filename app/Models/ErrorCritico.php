<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\AtencionDiaria;


class ErrorCritico extends Model
{
    use HasFactory;

    public function atencion(): BelongsTo
    {
        return $this->belongsTo(AtencionDiaria::class);
    }

    protected $table = 'error_critico';

    protected $fillable = [
        'descripcion',
    ];
}