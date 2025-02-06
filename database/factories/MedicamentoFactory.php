<?php

namespace Database\Factories;

use App\Models\Medicamento;
use App\Models\Paciente;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicamentoFactory extends Factory
{
    protected $model = Medicamento::class;

    public function definition(): array
    {
        return [
            'paciente_id' => Paciente::factory(),
            'medicamento' => $this->generarMedicamento(),
            'comentario' => $this->faker->optional(0.7)->sentence()
        ];
    }

    private function generarMedicamento(): string
    {
        $medicamentos = [
            // Cardiovasculares
            'Atorvastatina (Colesterol)',
            'Metoprolol (Hipertensión)',
            'Ramipril (Presión arterial)',
            'Aspirina (Anticoagulante)',

            // Diabetes
            'Metformina (Control glucosa)',
            'Insulina glargina',
            'Empagliflozina',

            // Salud Mental
            'Sertralina (Antidepresivo)',
            'Alprazolam (Ansiedad)',
            'Risperidona (Antipsicótico)',

            // Dolor y Antiinflamatorios
            'Ibuprofeno',
            'Paracetamol',
            'Diclofenaco',

            // Respiratorios
            'Salbutamol (Asma)',
            'Fluticasona (Inhalador)',
            'Montelukast',

            // Hormonales
            'Levotiroxina (Tiroides)',
            'Anticonceptivos orales',

            // Neurológicos
            'Carbidopa-Levodopa (Parkinson)',
            'Gabapentina (Epilepsia)',

            // Antibióticos
            'Amoxicilina',
            'Ciprofloxacina',
            'Azitromicina'
        ];

        return $this->faker->randomElement($medicamentos);
    }
}
