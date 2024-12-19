<?php

namespace Database\Factories;

use App\Models\EstadoExamen;
use Illuminate\Database\Eloquent\Factories\Factory;

class EstadoExamenFactory extends Factory
{
    protected $model = EstadoExamen::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
