<?php

namespace Database\Factories;

use App\Models\ModalidadAtencion;
use Illuminate\Database\Eloquent\Factories\Factory;

class ModalidadAtencionFactory extends Factory
{
    protected $model = ModalidadAtencion::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
