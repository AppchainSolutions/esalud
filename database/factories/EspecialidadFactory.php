<?php

namespace Database\Factories;

use App\Models\Especialidad;
use Illuminate\Database\Eloquent\Factories\Factory;

class EspecialidadFactory extends Factory
{
    protected $model = Especialidad::class;


    public function definition()
    {
        Especialidad::truncate();
        return [
            'descripcion' => $this->faker->jobTitle,
        ];
    }
}