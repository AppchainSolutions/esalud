<?php

namespace Database\Factories;

use App\Models\Generos;
use Illuminate\Database\Eloquent\Factories\Factory;

class GenerosFactory extends Factory
{
    protected $model = Generos::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
