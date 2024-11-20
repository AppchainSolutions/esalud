<?php

namespace Database\Factories;

use App\Models\Pueblo;
use Illuminate\Database\Eloquent\Factories\Factory;

class PueblosFactory extends Factory
{
    protected $model = Pueblo::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
