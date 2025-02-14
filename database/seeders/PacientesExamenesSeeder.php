<?php

namespace Database\Seeders;

use App\Models\EstadoCivil;
use App\Models\EstadoExamen;
use App\Models\ExAldehido;
use App\Models\ExHumoNegro;
use App\Models\ExMetal;
use App\Models\ExPVTMERT;
use App\Models\ExRuido;
use App\Models\ExSilice;
use App\Models\ExSolvente;
use App\Models\Genero;
use App\Models\LeySocial;
use App\Models\ModalidadAtencion;
use App\Models\Nacionalidad;
use App\Models\NivelInstruccion;
use App\Models\Paciente;
use App\Models\Planta;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;
use App\Models\Unidad;
use Faker\Factory as FakerFactory;
use Illuminate\Database\Seeder;

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
        $this->call(DatabaseMasterSeeder::class);
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

        // Limpiar datos existentes
//        Paciente::query()->delete();
//        ExAldehido::query()->delete();

        // Crear 10 paciente
        $paciente = Paciente::factory()->count(10)->create();
        
        // Crear exámenes para cada paciente
        foreach ($paciente as $paciente) {
            $fechaProxControl = now()
            ->addMonth()
            ->addDays(rand(0, 60)); // Genera fecha entre 1 y 3 meses

            $fechaUltControl = $this->faker->dateTimeBetween('-1 year', 'now');

            $examen = ExAldehido::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            $examen = ExPVTMERT::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            $examen = ExHumoNegro::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            $examen = ExMetal::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            $examen = ExSilice::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            $examen = ExRuido::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            $examen = ExSolvente::factory()->create([
                'paciente_id' => $paciente->id,
                'estado_examen' => EstadoExamen::inRandomOrder()->first()->id,
                'fecha_prox_control' => $fechaProxControl,
                'fecha_ult_control' => $fechaUltControl,
            ]);

            // Depuración
            \Log::info('Paciente ID: ' . $paciente->id);
            \Log::info('Examen ID: ' . $examen->id);
            \Log::info('Estado: ' . $examen->estado_examen);
            \Log::info('Próximo Control: ' . date('Y-m-d', strtotime($fechaProxControl->format('Y-m-d'))));
            \Log::info('Último Control: ' . date('Y-m-d', strtotime($fechaUltControl->format('Y-m-d'))));
        }
    }
}
