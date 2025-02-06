<?php

namespace Database\Factories;

use App\Models\Enfermedad;
use Illuminate\Database\Eloquent\Factories\Factory;

class EnfermedadFactory extends Factory
{
    protected $model = Enfermedad::class;

    public function definition(): array
    {
        return [
            'paciente_id' => $this->faker->numberBetween(1, 100),
            'trastorno_cronico' => $this->faker->numberBetween(1, 10),
            'comentario' => $this->generarComentarioEnfermedad()
        ];
    }

    // Método para generar comentarios de enfermedades realistas
    private function generarComentarioEnfermedad(): string
    {
        $tiposComentarios = [
            // Comentarios generales
            'Diagnóstico reciente',
            'Seguimiento médico en curso',
            'Requiere monitoreo periódico',
            'Tratamiento en evaluación',
            
            // Severidad
            'Condición estable',
            'Progresión lenta de la enfermedad',
            'Requiere atención especializada',
            'Manejo sintomático',
            
            // Impacto en calidad de vida
            'Afecta actividades diarias',
            'Requiere adaptaciones ergonómicas',
            'Impacto moderado en movilidad',
            'Control farmacológico necesario',
            
            // Estado actual
            'En periodo de remisión',
            'Tratamiento con buenos resultados',
            'Necesidad de revisiones frecuentes',
            'Respuesta positiva al tratamiento'
        ];

        $detallesAdicionales = [
            'Última consulta: ' . $this->faker->dateTimeBetween('-1 year', 'now')->format('d/m/Y'),
            'Medicación actual: ' . $this->generarMedicacion(),
            'Recomendaciones: ' . $this->generarRecomendaciones()
        ];

        $comentario = $this->faker->randomElement($tiposComentarios);
        
        // Añadir detalles adicionales con 50% de probabilidad
        if ($this->faker->boolean(50)) {
            $comentario .= '. ' . $this->faker->randomElement($detallesAdicionales);
        }

        return $comentario;
    }

    // Método para generar medicaciones
    private function generarMedicacion(): string
    {
        $medicamentos = [
            'Ibuprofeno',
            'Paracetamol',
            'Aspirina',
            'Metformina',
            'Atorvastatina',
            'Losartán',
            'Omeprazol',
            'Levotiroxina',
            'Insulina',
            'Antidepresivos'
        ];

        return $this->faker->randomElement($medicamentos);
    }

    // Método para generar recomendaciones
    private function generarRecomendaciones(): string
    {
        $recomendaciones = [
            'Dieta balanceada',
            'Ejercicio moderado',
            'Descanso adecuado',
            'Control de estrés',
            'Monitoreo de signos vitales',
            'Evitar esfuerzos físicos intensos',
            'Seguimiento nutricional',
            'Terapia de rehabilitación',
            'Adaptaciones ergonómicas',
            'Control de peso'
        ];

        return $this->faker->randomElement($recomendaciones);
    }

    // Estado para enfermedades crónicas
    public function cronico()
    {
        return $this->state(function (array $attributes) {
            $enfermedadesCronicas = [
                'Diabetes tipo 2',
                'Hipertensión arterial',
                'Artritis reumatoide',
                'Enfermedad pulmonar obstructiva',
                'Insuficiencia cardíaca',
                'Epilepsia',
                'Esclerosis múltiple'
            ];

            return [
                'trastorno_cronico' => $this->faker->numberBetween(1, 10),
                'comentario' => 'Enfermedad crónica: ' . $this->faker->randomElement($enfermedadesCronicas) . 
                                '. Requiere seguimiento médico continuo.'
            ];
        });
    }

    // Estado para enfermedades en seguimiento
    public function seguimiento()
    {
        return $this->state(function (array $attributes) {
            return [
                'comentario' => 'Enfermedad en seguimiento. Última consulta: ' . 
                                $this->faker->dateTimeBetween('-6 months', 'now')->format('d/m/Y') . 
                                '. Evolución favorable.'
            ];
        });
    }

    // Estado para enfermedades graves
    public function grave()
    {
        return $this->state(function (array $attributes) {
            $enfermedadesGraves = [
                'Cáncer en etapa temprana',
                'Insuficiencia renal',
                'Enfermedad neurológica degenerativa',
                'Cardiopatía severa',
                'Cirrosis hepática'
            ];

            return [
                'comentario' => 'Enfermedad grave: ' . $this->faker->randomElement($enfermedadesGraves) . 
                                '. Requiere tratamiento especializado e intensivo.'
            ];
        });
    }
}
