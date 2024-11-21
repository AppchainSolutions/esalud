<?php

namespace Database\Factories;

use App\Models\Afp;
use Illuminate\Database\Eloquent\Factories\Factory;

class AfpFactory extends Factory
{
    protected $model = Afp::class;
    
    public function definition()
    {
        Afp::truncate();
        return [
            'descripcion' => $this->faker->company,
        ];
    }
}
