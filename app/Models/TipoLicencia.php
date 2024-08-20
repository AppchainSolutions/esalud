<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\FichaCronicos;

class TipoLicencia extends Model
{
    use HasFactory;
    public function atencion(): BelongsTo
    {
        return $this->belongsTo(FichaCronicos::class);
    }
    protected $table = 'tipo_licencia';

    protected $fillable = [
        'descripcion',
    ];
}
