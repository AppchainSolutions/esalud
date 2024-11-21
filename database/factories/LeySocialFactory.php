<?php

namespace Database\Factories;

use App\Models\LeySocial;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeySocialFactory extends Factory
{
    protected $model = LeySocial::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
