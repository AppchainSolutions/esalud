<?php

namespace Database\Factories;

use App\Models\Exposicion;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExposicionFactory extends Factory
{
    protected $model = Exposicion::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
