<?php

namespace Database\Factories;

use App\Models\Semaforo;
use Illuminate\Database\Eloquent\Factories\Factory;

class SemaforoFactory extends Factory
{
    protected $model = Semaforo::class;

    public function definition()
    {
        return [
            'descripcion' => $this->faker->word,
        ];
    }
}
