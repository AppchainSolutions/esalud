<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Exposicion extends Model
{
    use HasFactory;
            
    public function exposicion(): BelongsTo
    {
        return $this->belongsTo(Paciente::class, 'exposicion', 'id');
    }
    protected $table = 'exposicion';
    protected $fillable = [
        'descripcion',
    ];
}
