<?php

namespace Database\Factories;

use App\Models\PuebloOriginario;
use Illuminate\Database\Eloquent\Factories\Factory;

class PuebloOriginarioFactory extends Factory
{
    protected $model = PuebloOriginario::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
