<?php

namespace Database\Factories;

use App\Models\NivelesInstruccion;
use Illuminate\Database\Eloquent\Factories\Factory;

class NivelesInstruccionFactory extends Factory
{
    protected $model = NivelesInstruccion::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
