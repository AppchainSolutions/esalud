<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Helpers\RutGenerator;
use App\Models\Afp;
use App\Models\Alergia;
use App\Models\AntecedenteFamiliar;
use App\Models\Cirugia;
use App\Models\Enfermedad;
use App\Models\EstadoCivil;
use App\Models\EstablecimientoEducacional;
use App\Models\FactorRiesgo;
use App\Models\GrupoSanguineo;
use App\Models\LeySocial;
use App\Models\Medicamento;
use App\Models\Modalidad;
use App\Models\Nacionalidad;
use App\Models\NivelInstruccion;
use App\Models\Paciente;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
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
            'afp_id' => Afp::inRandomOrder()->first()->id, // Selecciona un AFP al azar
            'ciudad' => $this->faker->city,
            'direccion' => $this->faker->streetAddress,
            'donante' => $this->faker->boolean,
            'edad' => $this->faker->numberBetween(18, 65), // Edad entre 18 y 65 años
            'email' => $this->faker->unique()->safeEmail,
            'estado_civil' => $this->faker->randomElement(['Soltero', 'Casado', 'Divorciado', 'Viudo']), // Selecciona un estado civil al azar
            'establecimiento_educacional_id' => EstablecimientoEducacional::factory(),
            'fecha_nacimiento' => $this->faker->date, // Fecha de nacimiento aleatoria
            'genero' => $this->faker->randomElement(['Masculino', 'Femenino']), // Selecciona un género al azar
            'grupo_sanguineo' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']), // Selecciona un grupo sanguíneo al azar
            'nivel_instruccion_id' => NivelInstruccion::inRandomOrder()->first()->id,
            'ley_social_id' => LeySocial::inRandomOrder()->first()->id,
            'modalidad' => $this->faker->randomElement(['Modalidad1', 'Modalidad2', 'Modalidad3']), // Selecciona una modalidad al azar
            'nacionalidad_id' => Nacionalidad::inRandomOrder()->first()->id,
            'ocupacion' => $this->faker->jobTitle,
            'prevision_id' => Prevision::inRandomOrder()->first()->id,
            'profesion' => $this->faker->jobTitle,
            'pueblo_originario_id' => PuebloOriginario::inRandomOrder()->first()->id,
            'religion_id' => Religion::inRandomOrder()->first()->id,
            'seguro_salud_id' => SeguroSalud::inRandomOrder()->first()->id,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
        ];
    }

}