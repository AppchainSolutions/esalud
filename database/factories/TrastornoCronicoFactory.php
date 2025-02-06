<?php

namespace Database\Factories;

use App\Models\TrastornoCronico;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrastornoCronicoFactory extends Factory
{
    protected $model = TrastornoCronico::class;

    public function definition(): array
    {
        return [
            'paciente_id' => Paciente::factory(),
            'descripcion' => $this->generarDescripcionTrastornoCronico(),
            'cie10' => $this->generarCodigoCIE10()
        ];
    }

    // Método para generar descripciones de trastornos crónicos
    private function generarDescripcionTrastornoCronico(): string
    {
        $tiposTrastornos = [
            // Enfermedades cardiovasculares
            'Hipertensión arterial crónica',
            'Insuficiencia cardíaca',
            'Cardiopatía isquémica',
            
            // Enfermedades metabólicas
            'Diabetes mellitus tipo 2',
            'Síndrome metabólico',
            'Obesidad mórbida',
            
            // Enfermedades respiratorias
            'Enfermedad pulmonar obstructiva crónica (EPOC)',
            'Asma bronquial crónica',
            'Fibrosis pulmonar',
            
            // Enfermedades neurológicas
            'Epilepsia refractaria',
            'Esclerosis múltiple',
            'Enfermedad de Parkinson',
            
            // Enfermedades autoinmunes
            'Artritis reumatoide',
            'Lupus eritematoso sistémico',
            'Esclerodermia',
            
            // Enfermedades renales
            'Insuficiencia renal crónica',
            'Síndrome nefrótico',
            
            // Enfermedades endocrinas
            'Hipotiroidismo',
            'Síndrome de ovario poliquístico',
            
            // Enfermedades gastrointestinales
            'Enfermedad de Crohn',
            'Colitis ulcerosa',
            
            // Enfermedades psiquiátricas
            'Trastorno bipolar',
            'Esquizofrenia crónica',
            'Depresión mayor recurrente'
        ];

        $severidades = [
            'Leve',
            'Moderado',
            'Severo',
            'Controlado',
            'En progresión'
        ];

        $descripcion = $this->faker->randomElement($tiposTrastornos);
        
        // Añadir severidad con 70% de probabilidad
        if ($this->faker->boolean(70)) {
            $descripcion .= ' - ' . $this->faker->randomElement($severidades);
        }

        return $descripcion;
    }

    // Método para generar códigos CIE-10
    private function generarCodigoCIE10(): string
    {
        $codigosCIE10 = [
            // Cardiovasculares
            'I10', 'I11', 'I50', 'I25',
            
            // Metabólicas
            'E11', 'E66', 'E78',
            
            // Respiratorias
            'J44', 'J45', 'J84',
            
            // Neurológicas
            'G40', 'G35', 'G20',
            
            // Autoinmunes
            'M06', 'M32', 'M34',
            
            // Renales
            'N18', 'N04'
        ];

        return $this->faker->randomElement($codigosCIE10);
    }

    // Estado para trastornos crónicos leves
    public function leve()
    {
        return $this->state(function (array $attributes) {
            $trastornosLeves = [
                'Hipertensión controlada',
                'Diabetes tipo 2 en etapa inicial',
                'Asma leve intermitente',
                'Artritis reumatoide temprana'
            ];

            return [
                'descripcion' => $this->faker->randomElement($trastornosLeves)
            ];
        });
    }

    // Estado para trastornos crónicos severos
    public function severo()
    {
        return $this->state(function (array $attributes) {
            $trastornosSeveros = [
                'Insuficiencia cardíaca avanzada',
                'Diabetes tipo 2 con complicaciones',
                'EPOC en estadio terminal',
                'Esclerosis múltiple progresiva',
                'Enfermedad renal crónica en diálisis'
            ];

            return [
                'descripcion' => $this->faker->randomElement($trastornosSeveros)
            ];
        });
    }

    // Estado para trastornos crónicos en tratamiento
    public function enTratamiento()
    {
        return $this->state(function (array $attributes) {
            $trastornosEnTratamiento = [
                'Hipertensión en tratamiento farmacológico',
                'Diabetes con manejo nutricional',
                'Artritis con terapia biológica',
                'Epilepsia con control farmacológico'
            ];

            return [
                'descripcion' => $this->faker->randomElement($trastornosEnTratamiento)
            ];
        });
    }

    // Estado para trastornos crónicos con alto impacto en calidad de vida
    public function altoImpacto()
    {
        return $this->state(function (array $attributes) {
            $trastornosAltoImpacto = [
                'Esclerosis múltiple con limitación severa',
                'Enfermedad de Parkinson con deterioro motor',
                'Depresión mayor con discapacidad funcional',
                'Cardiopatía isquémica con restricciones importantes'
            ];

            return [
                'descripcion' => $this->faker->randomElement($trastornosAltoImpacto)
            ];
        });
    }
}
