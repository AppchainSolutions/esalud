<?php

namespace Database\Factories;

use App\Models\Modalidad;
use Illuminate\Database\Eloquent\Factories\Factory;

class ModalidadFactory extends Factory
{
    protected $model = Modalidad::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}