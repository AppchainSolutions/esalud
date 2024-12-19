<?php

namespace Database\Factories;

use App\Models\Bateria;
use Illuminate\Database\Eloquent\Factories\Factory;

class BateriaFactory extends Factory
{
    protected $model = Bateria::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
