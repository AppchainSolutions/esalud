<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use App\Models\Afp;
use App\Models\Calles;
use App\Models\EstablecimientoEducacional;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\GrupoSanguineo;
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
    $Calles = Calles::factory()->create();
    $establecimientoEducacional = EstablecimientoEducacional::factory()->create();
    $leySocial = LeySocial::factory()->create();
    $nacionalidad = Nacionalidad::factory()->create();
    $nivelInstruccion = NivelInstruccion::factory()->create();
    $prevision = Prevision::factory()->create();
    $puebloOriginario = PuebloOriginario::factory()->create();
    $religion = Religion::factory()->create();
    $seguro = SeguroSalud::factory()->create();

    //$paciente = Paciente::factory()->count(1)->create();

    // Crear un paciente usando el factory
    $paciente = Paciente::factory()->create([
        //      'actividad_economica' => 'Fast Food Cook',
        'lista_espera' => true,
        'comunidad_lgbtq' => true,
        'credencial_discapacidad' => false,
        'donante' => false,
        'pertenece_pie' => false,
        'fecha_nacimiento' => '2011-07-19',
        'afp_id' => Afp::inRandomOrder()->first()->id,
        'Calles_id' => Calles::inRandomOrder()->first()->id,
        'establecimiento_educacional_id' => EstablecimientoEducacional::factory()->create()->id,
        'estado_civil_id' => EstadoCivil::inRandomOrder()->first()->id,
        'genero_id' => Genero::inRandomOrder()->first()->id,
        'grupo_sanguineo' => GrupoSanguineo::inRandomOrder()->first()->id,
        'ley_social_id' => LeySocial::inRandomOrder()->first()->id,
        'nacionalidad_id' => Nacionalidad::inRandomOrder()->first()->id,
        'nivel_instruccion_id' => NivelInstruccion::inRandomOrder()->first()->id,
        'prevision_id' => Prevision::inRandomOrder()->first()->id,
        'pueblo_originario_id' => PuebloOriginario::inRandomOrder()->first()->id,
        'religion_id' => Religion::inRandomOrder()->first()->id,
        'seguro_salud_id' => SeguroSalud::inRandomOrder()->first()->id,
        'edad' => 18,
        'apellidos' => 'Perez',
        'ciudad' => 'Kemmershire',
        'direccion' => '6806 Labadie Ways Apt. 417',
        'email' => 'juan.perez@example.com',
    //    'modalidad' => Modalidad::inRandomOrder()->first()->id,
        'nombre' => 'Juan',
        'ocupacion' => 'Title Searcher',
        'profesion' => 'Substation Maintenance',
        'rut' => '12345678-9',
        'telefono1' => '337-597-4667',
        'telefono2' => '+1-505-479-9905',
    ]);


    expect($paciente->afp_id)->toBe($afp->id);
    expect($paciente->establecimiento_educacional_id)->toBe($establecimientoEducacional->id);
    expect($paciente->ley_social_id)->toBe($leySocial->id);
    expect($paciente->nacionalidad_id)->toBe($nacionalidad->id);
    expect($paciente->nivel_instruccion_id)->toBe($nivelInstruccion->id);
    expect($paciente->pueblo_originario_id)->toBe($puebloOriginario->id);
    expect($paciente->seguro_salud_id)->toBe($seguro->id);
    expect($paciente->prevision_id)->toBe($prevision->id);
    expect($paciente->religion_id)->toBe($religion->id);
    expect($paciente->afp())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->establecimientoEducacional())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->leySocial())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->nacionalidad())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->modalidad())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->nivelInstruccion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->puebloOriginario())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->seguroSalud())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->prevision())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->religion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->lista_espera)->toBe(true);
    expect($paciente->apellidos)->toBe('Perez');
    expect($paciente->Calles_id)->toBe($Calles->id);
    expect($paciente->ciudad)->toBe('Kemmershire');
    expect($paciente->direccion)->toBe('6806 Labadie Ways Apt. 417');
    expect($paciente->donante)->toBe(false);
    expect($paciente->edad)->toBe(18);
    expect($paciente->email)->toBe('juan.perez@example.com');
    expect($paciente->estado_civil)->toBe('Viudo');
    expect($paciente->fecha_nacimiento)->toBe('2011-07-19');
    expect($paciente->genero)->toBe('Femenino');
    expect($paciente->grupo_sanguineo)->toBe('A+');
    expect($paciente->modalidad)->toBe('Modalidad1');
    expect($paciente->nombre)->toBe('Juan');
    expect($paciente->ocupacion)->toBe('Title Searcher');
    expect($paciente->profesion)->toBe('Substation Maintenance');
    expect($paciente->rut)->toBe('12345678-9');
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
 
it('has fillable attributes', function () {
    $paciente = new Paciente();
    expect($paciente->getFillable())->toEqual([
        'actividad_economica',
        'actilista_espera',
        'afp_id',
        'apellidos',
        'Calles_id',
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
