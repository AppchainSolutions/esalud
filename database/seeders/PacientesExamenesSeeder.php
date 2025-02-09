<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as FakerFactory;
use App\Models\Paciente;
use App\Models\ExAlcohol;
use App\Models\ExAldehido;
use App\Models\NivelInstruccion;
use App\Models\LeySocial;
use App\Models\ModalidadAtencion;
use App\Models\Prevision;
use App\Models\Nacionalidad;
use App\Models\Planta;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Genero;
use App\Models\EstadoCivil;
use App\Models\Unidad;
use App\Models\EstadoExamen;

class PacientesExamenesSeeder extends Seeder
{
    /**
     * The current Faker instance.
     *
     * @var \Faker\Generator
     */
    protected $faker;

    public function run(): void
    {
        $this->faker = FakerFactory::create('es_ES');
        // Asegurarnos que existan los registros necesarios en las tablas de apoyo
        if (NivelInstruccion::count() === 0) {
            NivelInstruccion::create(['descripcion' => 'Básica']);
            NivelInstruccion::create(['descripcion' => 'Media']);
            NivelInstruccion::create(['descripcion' => 'Técnica']);
            NivelInstruccion::create(['descripcion' => 'Universitaria']);
        }

        if (LeySocial::count() === 0) {
            LeySocial::create(['descripcion' => 'Ley 16.744']);
            LeySocial::create(['descripcion' => 'ISAPRE']);
            LeySocial::create(['descripcion' => 'FONASA']);
        }

        if (ModalidadAtencion::count() === 0) {
            ModalidadAtencion::create(['descripcion' => 'Presencial']);
            ModalidadAtencion::create(['descripcion' => 'Telemedicina']);
            ModalidadAtencion::create(['descripcion' => 'Domicilio']);
        }

        if (Prevision::count() === 0) {
            Prevision::create(['descripcion' => 'FONASA']);
            Prevision::create(['descripcion' => 'ISAPRE']);
            Prevision::create(['descripcion' => 'Particular']);
        }

        if (Nacionalidad::count() === 0) {
            Nacionalidad::create(['descripcion' => 'Chilena']);
            Nacionalidad::create(['descripcion' => 'Extranjera']);
        }

        if (Planta::count() === 0) {
            Planta::create(['descripcion' => 'Planta 1']);
            Planta::create(['descripcion' => 'Planta 2']);
            Planta::create(['descripcion' => 'Planta 3']);
        }

        if (PuebloOriginario::count() === 0) {
            PuebloOriginario::create(['descripcion' => 'Mapuche']);
            PuebloOriginario::create(['descripcion' => 'Aymara']);
            PuebloOriginario::create(['descripcion' => 'No Aplica']);
        }

        if (Religion::count() === 0) {
            Religion::create(['descripcion' => 'Católica']);
            Religion::create(['descripcion' => 'Evangélica']);
            Religion::create(['descripcion' => 'Otra']);
            Religion::create(['descripcion' => 'Ninguna']);
        }

        if (SeguroSalud::count() === 0) {
            SeguroSalud::create(['descripcion' => 'Seguro A']);
            SeguroSalud::create(['descripcion' => 'Seguro B']);
            SeguroSalud::create(['descripcion' => 'Sin Seguro']);
        }

        if (Genero::count() === 0) {
            Genero::create(['descripcion' => 'Masculino']);
            Genero::create(['descripcion' => 'Femenino']);
            Genero::create(['descripcion' => 'No Binario']);
        }

        if (EstadoCivil::count() === 0) {
            EstadoCivil::create(['descripcion' => 'Soltero/a']);
            EstadoCivil::create(['descripcion' => 'Casado/a']);
            EstadoCivil::create(['descripcion' => 'Divorciado/a']);
            EstadoCivil::create(['descripcion' => 'Viudo/a']);
        }

        if (Unidad::count() === 0) {
            Unidad::create(['descripcion' => 'Unidad A']);
            Unidad::create(['descripcion' => 'Unidad B']);
            Unidad::create(['descripcion' => 'Unidad C']);
        }

        if (EstadoExamen::count() === 0) {
            EstadoExamen::create(['descripcion' => 'Realizado']);
            EstadoExamen::create(['descripcion' => 'Pendiente']);
            EstadoExamen::create(['descripcion' => 'En Proceso']);
        }

        // Crear 10 pacientes con sus exámenes
        Paciente::factory()
            ->count(10)
            ->has(
                ExAlcohol::factory()
                    ->count(4)
                    ->sequence(
                        ['estado_examen' => EstadoExamen::where('descripcion', 'Realizado')->first()->id],
                        ['estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id],
                        ['estado_examen' => EstadoExamen::where('descripcion', 'En Proceso')->first()->id],
                        ['estado_examen' => fn() => EstadoExamen::inRandomOrder()->first()->id]
                    )
            )
            ->has(
                ExAldehido::factory()
                    ->count(4)
                    ->sequence(
                        ['estado_examen' => EstadoExamen::where('descripcion', 'Realizado')->first()->id],
                        ['estado_examen' => EstadoExamen::where('descripcion', 'Pendiente')->first()->id],
                        ['estado_examen' => EstadoExamen::where('descripcion', 'En Proceso')->first()->id],
                        ['estado_examen' => fn() => EstadoExamen::inRandomOrder()->first()->id]
                    )
            )
            
            ->create([
                'nivel_instruccion' => NivelInstruccion::inRandomOrder()->first()->id,
                'ley_social' => LeySocial::inRandomOrder()->first()->id,
                'modalidad_atencion' => ModalidadAtencion::inRandomOrder()->first()->id,
                'prevision' => Prevision::inRandomOrder()->first()->id,
                'profesion' => $this->faker->jobTitle,
                'cargo' => $this->faker->jobTitle,
                'ciudad' => $this->faker->city,
                'ocupacion' => $this->faker->jobTitle,
            ]);
    }
}
