<?php

namespace Database\Factories;

use App\Models\PueblosOriginarios;
use Illuminate\Database\Eloquent\Factories\Factory;

class PueblosOriginariosFactory extends Factory
{
    protected $model = PueblosOriginarios::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
