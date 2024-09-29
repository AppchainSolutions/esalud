<?php

namespace Database\Factories;

use App\Models\Religion;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReligionFactory extends Factory
{
    protected $model = Religion::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}