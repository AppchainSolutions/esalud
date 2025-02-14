<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Examen;
use App\Models\Paciente;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Examen>
 */
class ExamenFactory extends Factory
{
    protected $model = Examen::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $tiposExamen = ['aldehido', 'humo_negro', 'metales'];
        $fechaRealizacion = $this->faker->dateTimeBetween('-1 year', 'now');
        $fechaProxControl = Carbon::instance($fechaRealizacion)->addMonths(rand(1, 12));

        return [
            'paciente_id' => Paciente::factory(),
            'tipo_examen' => $this->faker->randomElement($tiposExamen),
            'fecha_realizacion' => $fechaRealizacion,
            'fecha_prox_control' => $fechaProxControl,
            'estado' => $this->faker->randomElement(['pendiente', 'realizado', 'vencido']),
            'observaciones' => $this->faker->optional()->sentence
        ];
    }

    // Método para generar un examen próximo a vencer
    public function proximoAVencer()
    {
        return $this->state(function () {
            return [
                'fecha_prox_control' => now()->addMonths(1),
                'estado' => 'pendiente'
            ];
        });
    }

    // Método para generar un examen vencido
    public function vencido()
    {
        return $this->state(function () {
            return [
                'fecha_prox_control' => now()->subMonths(1),
                'estado' => 'vencido'
            ];
        });
    }
}
