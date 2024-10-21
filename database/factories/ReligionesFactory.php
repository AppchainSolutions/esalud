<?php

namespace Database\Factories;

use App\Models\Religiones;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReligionesFactory extends Factory
{
    protected $model = Religiones::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
