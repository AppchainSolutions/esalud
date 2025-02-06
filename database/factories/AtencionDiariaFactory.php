<?php

namespace Database\Factories;

use App\Models\AtencionDiaria;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class AtencionDiariaFactory extends Factory
{
    protected $model = AtencionDiaria::class;

    public function definition(): array
    {
        $horaInicio = $this->faker->time('H:i');
        $horaTermino = $this->faker->time('H:i');

        $data = [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'accidente_condicion' => $this->faker->optional()->numberBetween(1, 5),
            'accidente' => $this->faker->optional()->numberBetween(1, 9),
            'acompanado' => $this->faker->boolean(50) ? 1 : 0,
            'alerta_she' => $this->faker->boolean(50) ? 1 : 0,
            'at_realizada_por' => $this->faker->name(),
            'comentario' => $this->faker->optional()->paragraph(),
            'cuenta_acr' => $this->faker->optional()->word(),
            'declaracion_completa' => $this->faker->boolean(50) ? 1 : 0,
            'derivacion_inmediata' => $this->faker->boolean(50) ? 1 : 0,
            'derivacion' => $this->faker->optional()->numberBetween(1, 3),
            'descripcion_breve' => $this->faker->sentence(6),
            'dias_descanso' => $this->faker->optional()->numberBetween(0, 15),
            'error_critico' => $this->faker->optional()->numberBetween(1, 3),
            'estado_mental' => $this->faker->optional()->numberBetween(1, 3),
            'fecha_atencion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'fuente_incidente' => $this->faker->optional()->numberBetween(1, 3),
            'hora_inicio' => $horaInicio,
            'hora_termino' => $horaTermino,
            'lugar_atencion' => $this->faker->numberBetween(1, 5),
            'medicamentos' => $this->faker->optional()->sentence(3),
            'medio_derivacion' => $this->faker->optional()->numberBetween(1, 3),
            'motivo_consulta' => $this->generarMotivoConsulta(),
            'nombre_supervisor' => $this->faker->name(),
            'puede_reintegrarse' => $this->faker->boolean(50) ? 1 : 0,
            'responsable' => $this->faker->optional()->numberBetween(1, 4),
            'sistema_afectado' => $this->faker->numberBetween(1, 5),
            'tipo_atencion' => $this->faker->numberBetween(1, 5),
            'tipo_licencia' => $this->faker->optional()->numberBetween(1, 3),
            'turno' => $this->faker->numberBetween(1, 5),
        ];

        // Depuración: imprimir campos booleanos
        $camposBool = [
            'acompanado', 
            'alerta_she', 
            'declaracion_completa', 
            'derivacion_inmediata', 
            'puede_reintegrarse'
        ];

        foreach ($camposBool as $campo) {
            if (!is_bool($data[$campo]) && !is_int($data[$campo])) {
                throw new \Exception("Campo $campo no es booleano o entero: " . print_r($data[$campo], true));
            }
        }

        return $data;
    }

    // Método para generar motivos de consulta
    private function generarMotivoConsulta(): string
    {
        $motivosConsulta = [
            'Problema ergonómico',
            'Dolor muscular',
            'Lesión por esfuerzo repetitivo',
            'Accidente laboral',
            'Estrés ocupacional',
            'Fatiga física',
            'Evaluación de riesgo',
            'Control de salud ocupacional'
        ];

        return $this->faker->randomElement($motivosConsulta);
    }

    // Estado para atenciones de emergencia
    public function emergencia()
    {
        return $this->state(function (array $attributes) {
            return [
                'alerta_she' => true,
                'derivacion_inmediata' => true,
                'error_critico' => $this->faker->numberBetween(1, 3)
            ];
        });
    }

    // Estado para atenciones de seguimiento
    public function seguimiento()
    {
        return $this->state(function (array $attributes) {
            return [
                'dias_descanso' => $this->faker->numberBetween(1, 7),
                'puede_reintegrarse' => false
            ];
        });
    }
}
