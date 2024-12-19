<?php

namespace Database\Factories;

use App\Models\EstadoEpo;
use Illuminate\Database\Eloquent\Factories\Factory;

class EstadoEpoFactory extends Factory
{
    protected $model = EstadoEpo::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
