<?php

namespace Database\Factories;

use App\Models\Previsiones;
use Illuminate\Database\Eloquent\Factories\Factory;

class PrevisionesFactory extends Factory
{
    protected $model = Previsiones::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
