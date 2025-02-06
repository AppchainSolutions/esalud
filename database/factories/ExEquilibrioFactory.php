<?php

namespace Database\Factories;

use App\Models\ExEquilibrio;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExEquilibrioFactory extends Factory
{
    protected $model = ExEquilibrio::class;

    public function definition(): array
    {
        $fechaExamen = $this->faker->dateTimeBetween('-2 years', 'now');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'estado_examen' => $this->generarEstadoExamen(),
            'fecha_examen' => $fechaExamen,
            'comentario' => $this->generarComentario($fechaExamen)
        ];
    }

    // Método para generar estados de examen de equilibrio
    private function generarEstadoExamen(): string
    {
        $estados = [
            'Pendiente',
            'Realizado',
            'En Proceso',
            'Cancelado',
            'Programado'
        ];

        return $this->faker->randomElement($estados);
    }

    // Método para generar comentarios contextualizados
    private function generarComentario(\DateTime $fechaExamen): ?string
    {
        $tiposComentarios = [
            // Resultados generales
            'Evaluación de equilibrio estático y dinámico',
            'Pruebas de marcha y estabilidad',
            'Control postural y coordinación',
            
            // Observaciones
            'Sin alteraciones significativas',
            'Leve inestabilidad detectada',
            'Requiere seguimiento neurológico',
            
            // Recomendaciones
            'Ejercicios de rehabilitación recomendados',
            'Valoración de riesgo de caídas',
            'Necesidad de intervención temprana'
        ];

        $detallesAdicionales = [
            'Última actualización: ' . $this->faker->dateTimeBetween('-6 months', 'now')->format('d/m/Y'),
            'Profesional a cargo: Dr(a). ' . $this->faker->name(),
            'Pruebas realizadas: ' . $this->generarPruebasRealizadas()
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);
        
        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Método para generar pruebas de equilibrio realizadas
    private function generarPruebasRealizadas(): string
    {
        $pruebas = [
            'Test de Romberg',
            'Prueba de marcha en línea recta',
            'Evaluación de equilibrio unipodal',
            'Test de Tinetti',
            'Prueba de balance de Berg',
            'Marcha tandem',
            'Test de giro',
            'Prueba de estabilidad dinámica'
        ];

        return $this->faker->randomElement($pruebas);
    }

    // Estado para exámenes pendientes
    public function pendiente()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Pendiente',
                'comentario' => 'Examen de equilibrio pendiente de realización'
            ];
        });
    }

    // Estado para exámenes completados
    public function completado()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Realizado',
                'comentario' => 'Examen de equilibrio completado satisfactoriamente'
            ];
        });
    }

    // Estado para exámenes con observaciones
    public function conObservaciones()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Realizado',
                'comentario' => 'Se detectaron alteraciones leves en el equilibrio. Requiere seguimiento.'
            ];
        });
    }

    // Estado para exámenes con riesgo de caídas
    public function riesgoCaidas()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Realizado',
                'comentario' => 'Alto riesgo de caídas detectado. Requiere intervención inmediata y plan de rehabilitación.'
            ];
        });
    }

    // Estado para exámenes de pacientes de edad avanzada
    public function adultoMayor()
    {
        return $this->state(function (array $attributes) {
            return [
                'paciente_id' => $this->faker->numberBetween(70, 100), // Rango de IDs para adultos mayores
                'comentario' => 'Evaluación de equilibrio en paciente de edad avanzada. Valoración integral de movilidad.'
            ];
        });
    }
}
