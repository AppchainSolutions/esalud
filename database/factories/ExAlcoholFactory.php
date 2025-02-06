<?php

namespace Database\Factories;

use App\Models\ExAlcohol;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExAlcoholFactory extends Factory
{
    protected $model = ExAlcohol::class;

    public function definition(): array
    {
        $fechaControl = $this->faker->dateTimeBetween('-2 years', 'now');

        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'estado_examen' => $this->generarEstadoExamen(),
            'idpgp' => $this->generarIdPgp(),
            'fecha_control' => $fechaControl,
            'test_drogas' => $this->generarResultadoTestDrogas(),
            'item' => $this->generarItem(),
            'comentario' => $this->generarComentario()
        ];
    }

    // Método para generar ID PGP único
    private function generarIdPgp(): string
    {
        return strtoupper(substr(md5(uniqid()), 0, 10));
    }

    // Método para generar estados de examen
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

    // Método para generar resultados de test de drogas
    private function generarResultadoTestDrogas(): string
    {
        $resultados = [
            'Negativo',
            'Positivo',
            'Positivo Traza',
            'No Concluyente'
        ];

        return $this->faker->randomElement($resultados);
    }

    // Método para generar ítems de evaluación
    private function generarItem(): string
    {
        $items = [
            'Consumo Actual',
            'Historial de Consumo',
            'Riesgo de Recaída',
            'Rehabilitación',
            'Seguimiento',
            'Evaluación Inicial'
        ];

        return $this->faker->randomElement($items);
    }

    // Método para generar comentarios contextualizados
    private function generarComentario(): ?string
    {
        $tiposComentarios = [
            // Consumo
            'Consumo ocasional detectado',
            'Sin evidencia de consumo reciente',
            'Patrón de consumo en evaluación',
            
            // Riesgo
            'Riesgo moderado de recaída',
            'Bajo riesgo de consumo',
            'Requiere seguimiento cercano',
            
            // Tratamiento
            'En proceso de rehabilitación',
            'Seguimiento ambulatorio',
            'Terapia de grupo recomendada',
            
            // Estado general
            'Evolución positiva',
            'Necesidad de intervención temprana',
            'Compromiso con tratamiento'
        ];

        $detallesAdicionales = [
            'Última evaluación: ' . $this->faker->dateTimeBetween('-1 year', 'now')->format('d/m/Y'),
            'Recomendación: ' . $this->generarRecomendacion()
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);
        
        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Método para generar recomendaciones
    private function generarRecomendacion(): string
    {
        $recomendaciones = [
            'Continuar terapia',
            'Control mensual',
            'Grupo de apoyo',
            'Evaluación psicológica',
            'Seguimiento ambulatorio',
            'Reducción gradual',
            'Terapia familiar',
            'Manejo de estrés'
        ];

        return $this->faker->randomElement($recomendaciones);
    }

    // Estado para exámenes negativos
    public function negativo()
    {
        return $this->state(function (array $attributes) {
            return [
                'test_drogas' => 'Negativo',
                'estado_examen' => 'Realizado',
                'comentario' => 'Sin evidencia de consumo. Examen completado satisfactoriamente.'
            ];
        });
    }

    // Estado para exámenes positivos
    public function positivo()
    {
        return $this->state(function (array $attributes) {
            return [
                'test_drogas' => 'Positivo',
                'estado_examen' => 'Realizado',
                'comentario' => 'Consumo detectado. Requiere intervención inmediata y plan de tratamiento.'
            ];
        });
    }

    // Estado para exámenes en seguimiento
    public function seguimiento()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado_examen' => 'Programado',
                'item' => 'Seguimiento',
                'comentario' => 'Examen de seguimiento programado. Control de progreso en rehabilitación.'
            ];
        });
    }
}
