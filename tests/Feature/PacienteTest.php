<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Afp;
use App\Models\Calle;
use App\Models\EstablecimientoEducacional;
use App\Models\Nacionalidad;
use App\Models\NivelInstruccion;
use App\Models\Modalidad;
use App\Models\LeySocial;
use App\Models\Paciente;
use App\Models\Prevision;
use App\Models\PuebloOriginario;
use App\Models\Religion;
use App\Models\SeguroSalud;



uses(RefreshDatabase::class);

it('can create a paciente', function () {
    $afp = Afp::factory()->create();
    $calle = Calle::factory()->create();
    $educacional = EstablecimientoEducacional::factory()->create();
    $leySocial = LeySocial::factory()->create();
    //$modalidad = Modalidad::factory()->create();
    $nacionalidad = Nacionalidad::factory()->create();
    $nivelInstruccion = NivelInstruccion::factory()->create();
    $prevision = Prevision::factory()->create();
    $puebloOriginario = PuebloOriginario::factory()->create();
    $religion = Religion::factory()->create();
    $seguro = SeguroSalud::factory()->create();

    //$paciente = Paciente::factory()->count(1)->create();

    // Crear un paciente usando el factory
    $paciente = Paciente::factory()->create([
        'actividad_economica' => 'Fast Food Cook',
        'activo' => 0,
        'afp_id' => Afp::inRandomOrder()->first()->id,
        'apellidos' => 'Perez',
        'calle_id' => Calle::inRandomOrder()->first()->id,
        'ciudad' => 'Kemmershire',
        'direccion' => '6806 Labadie Ways Apt. 417',
        'donante' => 0,
        'edad' => 18,
        'email' => 'juan.perez@example.com',
        'establecimiento_educacional_id' => EstablecimientoEducacional::factory()->create()->id,
        'estado_civil' => 'Viudo',
        'fecha_nacimiento' => '2011-07-19',
        'genero' => 'Femenino',
        'grupo_sanguineo' => 'A+',
        'ley_social_id' => LeySocial::inRandomOrder()->first()->id,
        'modalidad' => 'Modalidad1',
        'nacionalidad_id' => Nacionalidad::inRandomOrder()->first()->id,
        'nivel_instruccion_id' => NivelInstruccion::inRandomOrder()->first()->id,
        'nombre' => 'Juan',
        'ocupacion' => 'Title Searcher',
        'prevision_id' => Prevision::inRandomOrder()->first()->id,
        'profesion' => 'Substation Maintenance',
        'pueblo_originario_id' => PuebloOriginario::inRandomOrder()->first()->id,
        'religion_id' => Religion::inRandomOrder()->first()->id,
        'rut' => '12345678-9',
        'seguro_salud_id' => SeguroSalud::inRandomOrder()->first()->id,
        'telefono1' => '337-597-4667',
        'telefono2' => '+1-505-479-9905',
    ]);


    expect($paciente->afp_id)->toBe($afp->id);
    expect($paciente->actividad_economica)->toBe('Fast Food Cook');
    expect($paciente->activo)->toBe(0);
    expect($paciente->apellidos)->toBe('Perez');
    expect($paciente->calle_id)->toBe($calle->id);
    expect($paciente->ciudad)->toBe('Kemmershire');
    expect($paciente->direccion)->toBe('6806 Labadie Ways Apt. 417');
    expect($paciente->donante)->toBe(0);
    expect($paciente->edad)->toBe(18);
    expect($paciente->email)->toBe('juan.perez@example.com');
    //expect($paciente->establecimiento_educacional_id)->toBe($educacional->id);
    expect($paciente->estado_civil)->toBe('Viudo');
    expect($paciente->fecha_nacimiento)->toBe('2011-07-19');
    expect($paciente->genero)->toBe('Femenino');
    expect($paciente->grupo_sanguineo)->toBe('A+');
    expect($paciente->ley_social_id)->toBe($leySocial->id);
    expect($paciente->modalidad)->toBe('Modalidad1');
    expect($paciente->nacionalidad_id)->toBe($nacionalidad->id);
    expect($paciente->nivel_instruccion_id)->toBe($nivelInstruccion->id);
    expect($paciente->nombre)->toBe('Juan');
    expect($paciente->ocupacion)->toBe('Title Searcher');
    expect($paciente->prevision_id)->toBe($prevision->id);
    expect($paciente->profesion)->toBe('Substation Maintenance');
    expect($paciente->pueblo_originario_id)->toBe($puebloOriginario->id);
    expect($paciente->religion_id)->toBe($religion->id);
    expect($paciente->rut)->toBe('12345678-9');
    expect($paciente->seguro_salud_id)->toBe($seguro->id);
    expect($paciente->telefono1)->toBe('337-597-4667');
    expect($paciente->telefono2)->toBe('+1-505-479-9905');
    expect($paciente)->toBeInstanceOf(Paciente::class);
});

/*


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

it('belongs to instruccion', function () {
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

it('belongs to modalidad', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->modalidad())->toBeInstanceOf(BelongsTo::class);
});
 */
it('has fillable attributes', function () {
    $paciente = new Paciente();
    expect($paciente->getFillable())->toEqual([
        'actividad_economica',
        'activo',
        'afp_id',
        'apellidos',
        'calle_id',
        'ciudad',
        'direccion',
        'donante',
        'edad',
        'email',
        'estado_civil',
        'establecimiento_educacional_id',
        'fecha_nacimiento',
        'genero',
        'grupo_sanguineo',
        'ley_social_id',
        'modalidad',
        'nacionalidad_id',
        'nivel_instruccion_id',
        'nombre',
        'ocupacion',
        'prevision_id',
        'pueblo_originario_id',
        'religion_id',
        'rut',
        'seguro_salud_id',
        'telefono1',
        'telefono2',
    ]);
});
