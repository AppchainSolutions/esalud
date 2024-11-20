<?php

namespace Database\Factories;

use App\Models\Seguro;
use Illuminate\Database\Eloquent\Factories\Factory;

class SegurosFactory extends Factory
{
    protected $model = Seguro::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
