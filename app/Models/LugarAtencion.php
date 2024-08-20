<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\FichaCronicos;

class LugarAtencion extends Model
{
    use HasFactory;
    public function lugar_atencion(): BelongsTo
    {
        return $this->belongsTo(FichaCronicos::class);
    }
    protected $table = 'lugar_atencion';

    protected $fillable = [
        'descripcion',
    ];
}
