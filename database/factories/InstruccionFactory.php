<?php

namespace Database\Factories;

use App\Models\Instruccion;
use Illuminate\Database\Eloquent\Factories\Factory;

class InstruccionFactory extends Factory
{
    protected $model = Instruccion::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
