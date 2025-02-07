<?php

namespace Tests\Feature;

use App\Models\Calles;
use App\Models\EstablecimientosEducacionales;
use App\Models\EstadosCiviles;
use App\Models\Generos;
use App\Models\GruposSanguineos;
use App\Models\LeyesSociales;
use App\Models\Nacionalidades;
use App\Models\NivelesInstruccion;
use App\Models\Paciente;
use App\Models\Previsiones;
use App\Models\PueblosOriginarios;
use App\Models\Religiones;
use App\Models\SegurosSalud;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('can create a paciente', function () {
    $calle = Calles::factory()->create();
    $establecimientoEducacional = EstablecimientosEducacionales::factory()->create();
    $grupoSanguineo = GruposSanguineos::factory()->create();
    $leySocial = LeyesSociales::factory()->create();
    $nacionalidad = Nacionalidades::factory()->create();
    $nivelInstruccion = NivelesInstruccion::factory()->create();
    $prevision = Previsiones::factory()->create();
    $puebloOriginario = PueblosOriginarios::factory()->create();
    $religion = Religiones::factory()->create();
    $seguro = SegurosSalud::factory()->create();
    $estadoCivil = EstadosCiviles::factory()->create();

    //$paciente = Paciente::factory()->count(1)->create();

    // Crear un paciente usando el factory
    $paciente = Paciente::factory()->create([
        'apellidos_responsable' => 'Aguilar',
        'apellidos' => 'Perez',
        'calles_id' => calles::inRandomOrder()->first()->id,
        'calles_responsable_id' => calles::inRandomOrder()->first()->id,
        'ciudad_responsable' => 'Kemmershire',
        'ciudad' => 'Kemmershire',
        'comunidad_lgbtq' => true,
        'comunidad_lgtbq_responsable' => false,
        'credencial_discapacidad_responsable' => false,
        'credencial_discapacidad' => false,
        'direccion_responsable' => 'South Park Avenue',
        'direccion' => '6806 Labadie Ways Apt. 417',
        'donante_responsable' => true,
        'donante' => false,
        'edad_responsable' => 45,
        'edad' => 18,
        'email_responsable' => 'cclaro@vtr.cl',
        'email' => 'juan.perez@example.com',
        'establecimiento_educacional_id' => EstablecimientosEducacionales::factory()->create()->id,
        'estado_civil_id' => EstadosCiviles::inRandomOrder()->first()->id,
        'estado_civil_responsable_id' => EstadosCiviles::inRandomOrder()->first()->id,
        'fecha_nacimiento_responsable' => '1960-10-10',
        'fecha_nacimiento' => '2011-07-19',
        'genero_id' => Generos::inRandomOrder()->first()->id,
        'genero_responsable_id' => Generos::inRandomOrder()->first()->id,
        'grupo_sanguineo_id' => GruposSanguineos::inRandomOrder()->first()->id,
        'grupo_sanguineo_responsable_id' => GruposSanguineos::inRandomOrder()->first()->id,
        'ley_social_id' => LeyesSociales::inRandomOrder()->first()->id,
        'nacionalidad_id' => Nacionalidades::inRandomOrder()->first()->id,
        'nacionalidad_responsable_id' => Nacionalidades::inRandomOrder()->first()->id,
        'nivel_instruccion_id' => NivelesInstruccion::inRandomOrder()->first()->id,
        'nivel_instruccion_responsable_id' => NivelesInstruccion::inRandomOrder()->first()->id,
        'nombre_responsable' => 'Ernesto',
        'nombre' => 'Juan',
        'ocupacion_responsable' => 'Tutor',
        'ocupacion' => 'Title Searcher',
        'parentesco_responsable' => 'Abuelo',
        'pertenece_pie' => false,
        'prevision_id' => Previsiones::inRandomOrder()->first()->id,
        'prevision_responsable_id' => Previsiones::inRandomOrder()->first()->id,
        'profesion' => 'Substation Maintenance',
        'pueblo_originario_id' => PueblosOriginarios::inRandomOrder()->first()->id,
        'pueblo_originario_responsable_id' => PueblosOriginarios::inRandomOrder()->first()->id,
        'religion_id' => Religiones::inRandomOrder()->first()->id,
        'religion_responsable_id' => Religiones::inRandomOrder()->first()->id,
        'rut_responsable' => '22334455-9',
        'rut' => '12345678-9',
        'seguro_salud_id' => SegurosSalud::inRandomOrder()->first()->id,
        'telefono_responsable' => '554-222-3453',
        'telefono1' => '337-597-4667',
        'telefono2' => '+1-505-479-9905',
    ]);

    expect($paciente->apellidos)->toBe('Perez');
    expect($paciente->apellidos_responsable)->toBe('Aguilar');
    expect($paciente->calle_id)->toBe($calle->id);
    expect($paciente->calle_responsable_id)->toBe($calle->id);
    expect($paciente->ciudad)->toBe('Kemmershire');
    expect($paciente->ciudad_responsable)->toBe('Kemmershire');
    expect($paciente->comunidad_lgbtq)->toBe(true);
    expect($paciente->comunidad_lgtbq_responsable)->toBe(false);
    expect($paciente->credencial_discapacidad_responsable)->toBe(false);
    expect($paciente->credencial_discapacidad)->toBe(false);
    expect($paciente->direccion_responsable)->toBe('South Park Avenue');
    expect($paciente->direccion)->toBe('6806 Labadie Ways Apt. 417');
    expect($paciente->donante)->toBe(false);
    expect($paciente->donante_responsable)->toBe(false);
    expect($paciente->edad)->toBe(18);
    expect($paciente->edad_responsable)->toBe(45);
    expect($paciente->email)->toBe('juan.perez@example.com');
    expect($paciente->email_responsable)->toBe('cclaro@vtr.cl');
    expect($paciente->establecimiento_educacional_id)->toBe($establecimientoEducacional->id);
    expect($paciente->establecimientoEducacional())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->estado_civil)->toBe($estadoCivil->id);
    expect($paciente->estado_civil_responsable)->toBe($estadoCivil->id);
    expect($paciente->fecha_nacimiento)->toBe('2011-07-19');
    expect($paciente->genero)->toBe('Femenino');
    expect($paciente->grupo_sanguineo)->toBe('A+');
    expect($paciente->ley_social_id)->toBe($leySocial->id);
    expect($paciente->leySocial())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->lista_espera)->toBe(true);
    expect($paciente->modalidadAtencion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->modalidadAtencion)->toBe('Modalidad1');
    expect($paciente->nacionalidad_id)->toBe($nacionalidad->id);
    expect($paciente->nacionalidad())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->nivel_instruccion_id)->toBe($nivelInstruccion->id);
    expect($paciente->nivelInstruccion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->nombre)->toBe('Juan');
    expect($paciente->ocupacion)->toBe('Title Searcher');
    expect($paciente->prevision_id)->toBe($prevision->id);
    expect($paciente->prevision())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->profesion)->toBe('Substation Maintenance');
    expect($paciente->pueblo_originario_id)->toBe($puebloOriginario->id);
    expect($paciente->puebloOriginario())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->religion_id)->toBe($religion->id);
    expect($paciente->religion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->rut)->toBe('12345678-9');
    expect($paciente->seguro_salud_id)->toBe($seguro->id);
    expect($paciente->seguroSalud())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->telefono1)->toBe('337-597-4667');
    expect($paciente->telefono2)->toBe('+1-505-479-9905');
    expect($paciente)->toBeInstanceOf(Paciente::class);
});

it('belongs to seguro', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->seguro_salud_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to establecimiento educacional', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->establecimiento_educacional_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to estado civil', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->estado_civil())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to grupo sanguineo', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->grupo_sanguineo())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to nivelInstruccion', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->nivel_instruccion_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to ley social', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->ley_social_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to prevision', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->prevision_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to pueblo', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->pueblo_indigena_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to religion', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->religion_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to modalidadAtencion', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->modalidadAtencion())->toBeInstanceOf(BelongsTo::class);
});

it('has fillable attributes', function () {
    $paciente = new Paciente;
    expect($paciente->getFillable())->toEqual([
        'apellidos_responsable',
        'apellidos',
        'calles_id',
        'calles_responsable_id',
        'ciudad_responsable',
        'ciudad',
        'comunidad_lgbtq',
        'comunidad_lgtbq_responsable',
        'credencial_discapacidad_responsable',
        'credencial_discapacidad',
        'direccion_responsable',
        'direccion',
        'donante_responsable',
        'donante',
        'edad_responsable',
        'edad',
        'email_responsable',
        'email',
        'establecimiento_educacional_id',
        'estado_civil_id',
        'estado_civil_responsable_id',
        'fecha_nacimiento_responsable',
        'fecha_nacimiento',
        'genero_id',
        'genero_responsable_id',
        'grupo_sanguineo_id',
        'grupo_sanguineo_responsable_id',
        'nacionalidad_id',
        'nacionalidad_responsable_id',
        'nivel_instruccion_id',
        'nivel_instruccion_responsable_id',
        'nombre_responsable',
        'nombre',
        'ocupacion_responsable',
        'ocupacion',
        'parentesco_responsable',
        'password',
        'pertenece_pie',
        'prevision_id',
        'prevision_responsable_id',
        'profesion',
        'pueblo_originario_id',
        'pueblo_originario_responsable_id',
        'religion_id',
        'religion_responsable_id',
        'remember_token',
        'rut_responsable',
        'rut',
        'telefono_responsable',
        'telefono1',
        'telefono2',
    ]);
});
