<?php

namespace Database\Factories;

use App\Models\Prevision;
use Illuminate\Database\Eloquent\Factories\Factory;

class PrevisionFactory extends Factory
{
    protected $model = Prevision::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
