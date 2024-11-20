<?php

namespace Database\Factories;

use App\Models\Ceco;
use Illuminate\Database\Eloquent\Factories\Factory;

class CecoFactory extends Factory
{
    protected $model = Ceco::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
