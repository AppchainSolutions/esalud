<?php

namespace Database\Factories;

use App\Models\NivelInstruccion;
use Illuminate\Database\Eloquent\Factories\Factory;

class InstruccionFactory extends Factory
{
    protected $model = NivelInstruccion::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
