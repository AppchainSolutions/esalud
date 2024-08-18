<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\ExAlcohol;

class TestDroga extends Model
{
    use HasFactory;
    public function test_drogas(): HasMany
    {
        return $this->hasMany(ExAlcohol::class);
    }

    protected $table = 'test_drogas';

    protected $fillable = [
        'descripcion',
    ];
}
