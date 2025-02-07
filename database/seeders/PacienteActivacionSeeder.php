<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Mail;
use App\Mail\PacienteActivacionMail;
use App\Models\Afp;
use App\Models\Area;
use App\Models\Ceco;
use App\Models\Empresa;
use App\Helpers\RutGenerator;
use App\Models\EstadoCivil;
use App\Models\Exposicion;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
use App\Models\NivelInstruccion;
use App\Models\LeySocial;
use App\Models\Nacionalidad;
use App\Models\ModalidadAtencion;
use App\Models\Paciente;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Unidad;
use Faker\Factory as Faker;

class PacienteActivacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('es_ES');

        // Asegurar que existan registros en las tablas de relaciones
        $this->ensureRelatedRecordsExist($faker);
        Paciente::truncate();
        // Crear paciente de prueba para activación
        $paciente = Paciente::firstOrCreate(
            [
                'email' => 'omar.ahumadag@gmail.com',
            ],
            [
                'rut' => '12.345.678-9',
                'nombre' => 'Juan Carlos',
                'apellidos' => 'Pérez González',
                'actividad_economica' => $faker->jobTitle(),
                'afp' => Afp::inRandomOrder()->first()->id,
                'area' => Area::inRandomOrder()->first()->id,
                'cargo' => $faker->jobTitle(),
                'ciudad' => $faker->city(),
                'direccion' => $faker->address(),
                'donante' => $faker->boolean(),
                'edad' => $faker->numberBetween(18, 80),
                'empresa' => Empresa::inRandomOrder()->first()->id,
                'estado_civil' => EstadoCivil::inRandomOrder()->first()->id,
                'exposicion' => $faker->randomElement(['Baja', 'Media', 'Alta']),
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
                'telefono1' => $faker->phoneNumber(),
                'telefono2' => $faker->optional()->phoneNumber(),
                'cuenta_activada' => false,
                'activo' => true,
                'token_activacion' => null,
                'token_activacion_expira' => null,
            ]
        );

        // Generar token de activación
        $token = $paciente->generarTokenActivacion();

        // Enviar correo con información de activación
        if (app()->environment(['local', 'testing'])) {
            $activationUrl = route('paciente.activar', ['token' => $token]);
            
            Mail::to($paciente->email)->send(new PacienteActivacionMail(
                $paciente, 
                $token, 
                $activationUrl,
                24 // Horas de expiración
            ));

            // Mensaje informativo con detalles de seguridad
            $this->command->info("Correo de activación enviado:");
            $this->command->info("Token de Activación: {$token}");
            $this->command->info("URL de Activación: {$activationUrl}");
            $this->command->info("Expira: {$paciente->token_activacion_expira}");
        }

        // Mensaje informativo
        $this->command->info("Paciente de prueba creado.");
        $this->command->info("Email: {$paciente->email}");
        $this->command->info("Activo: {$paciente->activo}");
        $this->command->info("Cuenta Activada: {$paciente->cuenta_activada}");
    }

    private function ensureRelatedRecordsExist(\Faker\Generator $faker)
    {
        // Crear registros en tablas de relaciones si no existen
        $this->createRecordIfNotExists(Afp::class, 'descripcion', 'AFP Ejemplo');
        $this->createRecordIfNotExists(Area::class, 'descripcion', 'Área de Prueba');
        $this->createRecordIfNotExists(Empresa::class, 'descripcion', 'Empresa de Prueba');
        $this->createRecordIfNotExists(EstadoCivil::class, 'descripcion', 'Soltero/a');
        $this->createRecordIfNotExists(Genero::class, 'descripcion', 'Masculino');
        $this->createRecordIfNotExists(GrupoSanguineo::class, 'descripcion', 'O+');
        $this->createRecordIfNotExists(NivelInstruccion::class, 'descripcion', 'Universitaria');
        $this->createRecordIfNotExists(SeguroSalud::class, 'descripcion', 'Fonasa');
        $this->createRecordIfNotExists(LeySocial::class, 'descripcion', 'Ley 16.744');
        $this->createRecordIfNotExists(Nacionalidad::class, 'descripcion', 'Chilena');
        $this->createRecordIfNotExists(ModalidadAtencion::class, 'descripcion', 'Presencial');
        $this->createRecordIfNotExists(PuebloOriginario::class, 'descripcion', 'Otro');
        $this->createRecordIfNotExists(Religion::class, 'descripcion', 'Sin religión');
        $this->createRecordIfNotExists(Planta::class, 'descripcion', 'Planta A');
        $this->createRecordIfNotExists(Prevision::class, 'descripcion', 'AFP');
        $this->createRecordIfNotExists(Unidad::class, 'descripcion', 'Unidad 1');
    }

    private function createRecordIfNotExists($model, $field, $value)
    {
        $record = $model::where($field, $value)->first();
        if (!$record) {
            $record = $model::create([
                $field => $value
            ]);
        }
        return $record;
    }
}
