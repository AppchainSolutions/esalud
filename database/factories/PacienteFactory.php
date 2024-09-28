<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Helpers\RutGenerator;
use App\Models\Afp;
use App\Models\Alergias;
use App\Models\AntecedenteFamiliar;
use App\Models\Cirugia;
use App\Models\Enfermedad;
use App\Models\EstadoCivil;
use App\Models\FactorRiesgo;
use App\Models\GrupoSanguineo;
use App\Models\Instruccion;
use App\Models\LeySocial;
use App\Models\Medicamento;
use App\Models\Modalidad;
use App\Models\Paciente;
use App\Models\Prevision;
use App\Models\Pueblo;
use App\Models\Religion;
use App\Models\Seguro;
use App\Models\Vacuna;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition()
    {
        return [
            'rut' => RutGenerator::generarRut(), // Genera un RUT chileno válido
            'nombre' => $this->faker->firstName,
            'apellidos' => $this->faker->lastName,
            'actividad_economica' => $this->faker->jobTitle,
            'activo' => $this->faker->boolean,
            'afp' => $this->faker->randomElement(['1', '2', '3']), // Selecciona un AFP al azar
            'ciudad' => $this->faker->city,
            'direccion' => $this->faker->streetAddress,
            'donante' => $this->faker->boolean,
            'edad' => $this->faker->numberBetween(18, 65), // Edad entre 18 y 65 años
            'email' => $this->faker->email,
            'estado_civil' => $this->faker->randomElement(['Soltero', 'Casado', 'Divorciado', 'Viudo']), // Selecciona un estado civil al azar
            'fecha_nacimiento' => $this->faker->dateOfBirth, // Fecha de nacimiento aleatoria
            'genero' => $this->faker->randomElement(['Masculino', 'Femenino']), // Selecciona un género al azar
            'grupo_sanguineo' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']), // Selecciona un grupo sanguíneo al azar
            'instruccion' => $this->faker->randomElement(['Primaria', 'Secundaria', 'Universitaria']), // Selecciona un nivel de instrucción al azar
            'ley_social' => $this->faker->randomElement(['Ley Social1', 'Ley Social2', 'Ley Social3']), // Selecciona una ley social al azar
            'modalidad' => $this->faker->randomElement(['Modalidad1', 'Modalidad2', 'Modalidad3']), // Selecciona una modalidad al azar
            'nacionalidad' => $this->faker->country,
            'ocupacion' => $this->faker->jobTitle,
            'prevision' => $this->faker->randomElement(['Previsión1', 'Previsión2', 'Previsión3']), // Selecciona una previsión al azar
            'profesion' => $this->faker->jobTitle,
            'pueblo' => $this->faker->city,
            'religion' => $this->faker->randomElement(['Religión1', 'Religión2', 'Religión3']), // Selecciona una religión al azar
            'seguro' => $this->faker->randomElement(['Seguro1', 'Seguro2', 'Seguro3']), // Selecciona un seguro al azar
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
        ];
    }

    public function withAlergia()
    {
        return $this->has(Alergias::factory()->count(3));
    }

    public function withAfp()
    {
        return $this->has(Afp::factory()->count(3));
    }

    public function withEnfermedad()
    {
        return $this->has(Enfermedad::factory()->count(3));
    }

    public function withCirugia()
    {
        return $this->has(Cirugia::factory()->count(3));
    }

    public function withFactor()
    {
        return $this->has(FactorRiesgo::factory()->count(3));
    }

    public function withMedicamento()
    {
        return $this->has(Medicamento::factory()->count(3));
    }

    public function withVacuna()
    {
        return $this->has(Vacuna::factory()->count(3));
    }

    public function withFamiliar()
    {
        return $this->has(AntecedenteFamiliar::factory()->count(3));
    }

    public function withSeguro()
    {
        return $this->for(Seguro::factory());
    }


}