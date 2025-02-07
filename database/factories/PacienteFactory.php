<?php

namespace Database\Factories;

use App\Models\Afp;
use App\Models\Area;
use App\Models\Empresa;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
use App\Models\NivelInstruccion;
use App\Models\LeySocial;
use App\Models\Nacionalidad;
use App\Models\ModalidadAtencion;
use App\Models\Paciente;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\Unidad;
use Faker\Factory as Faker;
use App\Helpers\RutGenerator;

use Database\Factories\AfpFactory;
use Database\Factories\AreaFactory;
use Database\Factories\EmpresaFactory;
use Database\Factories\EstadoCivilFactory;
use Database\Factories\GeneroFactory;
use Database\Factories\GrupoSanguineoFactory;
use Database\Factories\NivelInstruccionFactory;
use Database\Factories\SeguroSaludFactory;
use Database\Factories\LeySocialFactory;
use Database\Factories\NacionalidadFactory;
use Database\Factories\ModalidadAtencionFactory;
use Database\Factories\PuebloOriginarioFactory;
use Database\Factories\ReligionFactory;
use Database\Factories\PlantaFactory;
use Database\Factories\PrevisionFactory;
use Database\Factories\UnidadFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paciente>
 */
class PacienteFactory extends Factory
{
    protected $model = Paciente::class;

    public function definition(): array
    {
        // Asegurar que existan registros en las tablas de relaciones
        $this->ensureRelatedRecordsExist();

        return [
            'rut' => RutGenerator::generate(),
            'nombre' => $this->faker->firstName(),
            'apellidos' => $this->faker->lastName() . " " . $this->faker->lastName(),
            'actividad_economica' => $this->faker->jobTitle(),
            'afp' => Afp::inRandomOrder()->first()->id,
            'area' => Area::inRandomOrder()->first()->id,
            'cargo' => $this->faker->jobTitle(),
            'ciudad' => $this->faker->city,
            'direccion' => $this->faker->address,
            'donante' => $this->faker->boolean,
            'edad' => $this->faker->numberBetween(18, 80),
            'email' => $this->faker->unique()->safeEmail(),
            'empresa' => Empresa::inRandomOrder()->first()->id,
            'estado_civil' => EstadoCivil::inRandomOrder()->first()->id,
            'exposicion' => $this->faker->randomElement(['Baja', 'Media', 'Alta']),
            'fecha_nacimiento' => $this->faker->date(),
            'genero' => Genero::inRandomOrder()->first()->id,
            'grupo_sanguineo' => GrupoSanguineo::inRandomOrder()->first()->id,
            'nivel_instruccion' => NivelInstruccion::inRandomOrder()->first()->id,
            'seguro_salud' => SeguroSalud::inRandomOrder()->first()->id,
            'ley_social' => LeySocial::inRandomOrder()->first()->id,
            'nacionalidad' => Nacionalidad::inRandomOrder()->first()->id,
            'modalidad_atencion' => ModalidadAtencion::inRandomOrder()->first()->id,
            'pueblo_originario' => PuebloOriginario::inRandomOrder()->first()->id,
            'religion' => Religion::inRandomOrder()->first()->id,
            'planta' => Planta::inRandomOrder()->first()->id,
            'prevision' => Prevision::inRandomOrder()->first()->id,
            'unidad' => Unidad::inRandomOrder()->first()->id,
            'telefono1' => $this->faker->phoneNumber,
            'telefono2' => $this->faker->optional()->phoneNumber,
            'activo' => false,
            'token_activacion' => null,
            'token_activacion_expira' => null,
        ];
    }

    private function ensureRelatedRecordsExist()
    {
        // Crear registros usando factories si no existen
        $this->createRecordIfNotExists(Afp::class, 'descripcion', 'AFP Ejemplo', AfpFactory::class);
        $this->createRecordIfNotExists(Area::class, 'descripcion', 'Área de Prueba', AreaFactory::class);
        $this->createRecordIfNotExists(Empresa::class, 'descripcion', 'Empresa de Prueba', EmpresaFactory::class);
        $this->createRecordIfNotExists(EstadoCivil::class, 'descripcion', 'Soltero/a', EstadoCivilFactory::class);
        $this->createRecordIfNotExists(Genero::class, 'descripcion', 'Masculino', GeneroFactory::class);
        $this->createRecordIfNotExists(GrupoSanguineo::class, 'descripcion', 'O+', GrupoSanguineoFactory::class);
        $this->createRecordIfNotExists(NivelInstruccion::class, 'descripcion', 'Universitaria', NivelInstruccionFactory::class);
        $this->createRecordIfNotExists(SeguroSalud::class, 'descripcion', 'Fonasa', SeguroSaludFactory::class);
        $this->createRecordIfNotExists(LeySocial::class, 'descripcion', 'Ley 16.744', LeySocialFactory::class);
        $this->createRecordIfNotExists(Nacionalidad::class, 'descripcion', 'Chilena', NacionalidadFactory::class);
        $this->createRecordIfNotExists(ModalidadAtencion::class, 'descripcion', 'Presencial', ModalidadAtencionFactory::class);
        $this->createRecordIfNotExists(PuebloOriginario::class, 'descripcion', 'Otro', PuebloOriginarioFactory::class);
        $this->createRecordIfNotExists(Religion::class, 'descripcion', 'Sin religión', ReligionFactory::class);
        $this->createRecordIfNotExists(Planta::class, 'descripcion', 'Planta A', PlantaFactory::class);
        $this->createRecordIfNotExists(Prevision::class, 'descripcion', 'AFP', PrevisionFactory::class);
        $this->createRecordIfNotExists(Unidad::class, 'descripcion', 'Unidad 1', UnidadFactory::class);
    }

    private function createRecordIfNotExists($model, $field, $value, $factory = null)
    {
        $record = $model::where($field, $value)->first();
        if (!$record) {
            if ($factory && class_exists($factory)) {
                // Usar factory para crear el registro
                $record = $factory::new()->create([
                    $field => $value
                ]);
            } else {
                // Crear directamente si no hay factory
                $record = $model::create([
                    $field => $value
                ]);
            }
        }
        return $record;
    }

    /**
     * Indica que el paciente está pendiente de activación
     */
    public function pendienteActivacion(): Factory
    {
        return $this->state(function () {
            return [
                'token_activacion' => \Illuminate\Support\Str::random(64),
                'token_activacion_expira' => now()->addHours(24)
            ];
        });
    }

    /**
     * Indica que el paciente ya está activado
     */
    public function activado(): Factory
    {
        return $this->state(function () {
            return [
                'activo' => true,
                'token_activacion' => null,
                'token_activacion_expira' => null
            ];
        });
    }
}
