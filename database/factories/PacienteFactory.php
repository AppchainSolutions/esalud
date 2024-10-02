<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Helpers\RutGenerator;
use App\Models\Afp;
use App\Models\Alergia;
use App\Models\AntecedenteFamiliar;
use App\Models\Calle;
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
        Afp::factory()->create();
        Calle::factory()->create();
        EstablecimientoEducacional::factory()->create();
        EstadoCivil::factory()->create();
        LeySocial::factory()->create();
        Modalidad::factory()->create();
        Nacionalidad::factory()->create();
        NivelInstruccion::factory()->create();
        Prevision::factory()->create();
        PuebloOriginario::factory()->create();
        Religion::factory()->create();
        SeguroSalud::factory()->create();
        
        return [
            'actividad_economica' => $this->faker->jobTitle,
            'activo' => $this->faker->boolean,
            'afp_id' => Afp::inRandomOrder()->first()->id, // Selecciona un AFP al azar
            'apellidos' => $this->faker->lastName,
            'calle_id' => Calle::inRandomOrder()->first()->id,
            'ciudad' => $this->faker->city,
            'direccion' => $this->faker->streetAddress,
            'donante' => $this->faker->boolean,
            'edad' => $this->faker->numberBetween(18, 65), // Edad entre 18 y 65 años
            'email' => $this->faker->unique()->safeEmail,
            'establecimiento_educacional_id' => EstablecimientoEducacional::inRandomOrder()->first()->id,
            'estado_civil_id' => EstadoCivil::inRandomOrder()->first()->id, // Selecciona un estado civil al azar
            'fecha_nacimiento' => $this->faker->date, // Fecha de nacimiento aleatoria
            'genero' => $this->faker->randomElement(['Masculino', 'Femenino']), // Selecciona un género al azar
            'grupo_sanguineo' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']), // Selecciona un grupo sanguíneo al azar
            'ley_social_id' => LeySocial::inRandomOrder()->first()->id,
            'modalidad_id' => Modalidad::inRandomOrder()->first()->id, // Selecciona una modalidad al azar
            'nacionalidad_id' => Nacionalidad::inRandomOrder()->first()->id,
            'nivel_instruccion_id' => NivelInstruccion::inRandomOrder()->first()->id,
            'nombre' => $this->faker->firstName,
            'ocupacion' => $this->faker->jobTitle,
            'prevision_id' => Prevision::inRandomOrder()->first()->id,
            'profesion' => $this->faker->jobTitle,
            'pueblo_originario_id' => PuebloOriginario::inRandomOrder()->first()->id,
            'religion_id' => Religion::inRandomOrder()->first()->id,
            'rut' => RutGenerator::generarRut(), // Genera un RUT chileno válido
            'seguro_salud_id' => SeguroSalud::inRandomOrder()->first()->id,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->phoneNumber,
        ];
    }
}
