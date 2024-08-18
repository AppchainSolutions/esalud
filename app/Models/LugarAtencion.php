<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\AtencionDiaria;

class LugarAtencion extends Model
{
    use HasFactory;
    public function lugar_atencion(): BelongsTo
    {
        return $this->belongsTo(AtencionDiaria::class);
    }
    protected $table = 'lugar_atencion';

    protected $fillable = [
        'descripcion',
    ];
}
