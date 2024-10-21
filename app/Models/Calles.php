<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Pacientes; // Ensure this class exists in the specified namespace

class Calles extends Model
{
    use HasFactory;

    /**
     * Get the patients that live on this street.
     *
     * @return HasMany
     */
    public function pacientes(): HasMany
    {
        return $this->hasMany(Pacientes::class);
    }

    /**
     * Get the street that the patient lives on.
     *
     * @return BelongsTo
     */

    public function calle(): BelongsTo
    {
        return $this->belongsTo(Calles::class);
    }

    protected $table = 'calles';

    protected $fillable = [
        'descripcion',
    ];
}
