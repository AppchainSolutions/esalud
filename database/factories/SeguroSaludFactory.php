<?php

namespace Database\Factories;

use App\Models\SeguroSalud;
use Illuminate\Database\Eloquent\Factories\Factory;

class SeguroSaludFactory extends Factory
{
    protected $model = SeguroSalud::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
