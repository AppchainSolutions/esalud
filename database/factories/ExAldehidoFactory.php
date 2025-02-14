<?php

namespace Database\Factories;

use App\Models\ExAldehido;
use App\Models\Paciente;
use App\Models\EstadoExamen;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExAldehidoFactory extends Factory
{
    protected $model = ExAldehido::class;

    public function definition(): array
    {
        $estadoExamen = EstadoExamen::count() > 0 
            ? EstadoExamen::inRandomOrder()->first()->id 
            : EstadoExamen::create(['descripcion' => 'Pendiente'])->id;

        return [
            'paciente_id' => Paciente::factory(), 
            'fecha_prox_control'=> now()->addMonths(1),
            'fecha_ult_control'=> now()->subMonths(1),
            'fecha_ingreso'=> now()->subMonths(1),
            'fecha_control'=> now()->subMonths(1),
            'idpgp' => strtoupper(substr(md5(uniqid()), 0, 10)),
            'estado_examen' => $estadoExamen, 
            'comentario' => $this->faker->sentence()
        ];
    }

    public function realizado()
    {
        return $this->state(fn (array $attributes) => [
            'estado_examen' => EstadoExamen::where('descripcion', 'Realizado')->first()->id
        ]);
    }

    public function pendiente()
    {
        return $this->state(fn (array $attributes) => [
            'estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id
        ]);
    }

    public function proximoAVencer()
    {
        return $this->state(fn (array $attributes) => [
            'fecha_prox_control' => now()->addMonths(1)->addWeeks(2),
            'estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id
        ]);
    }
}
