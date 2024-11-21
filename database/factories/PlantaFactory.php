<?php

namespace Database\Factories;

use App\Models\Planta;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlantaFactory extends Factory
{
    protected $model = Planta::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
