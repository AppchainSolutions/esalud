<?php

namespace Database\Factories;

use App\Models\Unidad;
use Illuminate\Database\Eloquent\Factories\Factory;

class UnidadsFactory extends Factory
{
    protected $model = Unidad::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
