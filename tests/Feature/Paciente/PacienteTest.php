<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Mockery;


use App\Models\Afp;
use App\Models\Calle;
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
/* 
it('can create a paciente', function () {
    
    $pacienteData = Paciente::factory()->make()->toArray();
     $response = $this->post('/pacientes', $pacienteData);

    $response->assertStatus(201);
    $this->assertDatabaseHas('pacientes', $pacienteData); 
});
 */ 

it('can read a paciente', function () {
    $paciente = Paciente::factory()->create();

    $response = $this->get('/paciente/' . $paciente->id);

    $response->assertStatus(200);
    $response->assertJson($paciente->toArray());
});

it('can update a paciente', function () {
    $paciente = Paciente::factory()->create();
    $updatedData = Paciente::factory()->make()->toArray();

    $response = $this->put('/pacientes/' . $paciente->id, $updatedData);

    $response->assertStatus(200);
    $this->assertDatabaseHas('pacientes', $updatedData);
});

it('can delete a paciente', function () {
    $paciente = Paciente::factory()->create();

    $response = $this->delete('/pacientes/' . $paciente->id);

    $response->assertStatus(204);
    $this->assertDatabaseMissing('pacientes', ['id' => $paciente->id]);
});

it('Paciente with relationshions', function () {
    $afp = Afp::factory()->create();
    $calle = Calle::factory()->create();
    $establecimientoEducacional = EstablecimientoEducacional::factory()->create();
    $leySocial = LeySocial::factory()->create();
    $nacionalidad = Nacionalidad::factory()->create();
    $nivelInstruccion = NivelInstruccion::factory()->create();
    $prevision = Prevision::factory()->create();
    $puebloOriginario = PuebloOriginario::factory()->create();
    $religion = Religion::factory()->create();
    $seguro = SeguroSalud::factory()->create();

    // Crear un paciente usando el factory
    $paciente = Paciente::factory()->create([
        'afp_id' => Afp::inRandomOrder()->first()->id,
        'apellidos' => 'Perez',
        'calle_id' => Calle::inRandomOrder()->first()->id,
        'ciudad' => 'Kemmershire',
        'comunidad_lgbtq' => true,
        'credencial_discapacidad' => false,
        'direccion' => '6806 Labadie Ways Apt. 417',
        'donante' => false,
        'edad' => 18,
        'email' => 'juan.perez@example.com',
        'establecimiento_educacional_id' => EstablecimientoEducacional::factory()->create()->id,
        'estado_civil_id' => EstadoCivil::inRandomOrder()->first()->id,
        'fecha_nacimiento' => '2011-07-19',
        'genero_id' => Genero::inRandomOrder()->first()->id,
        'grupo_sanguineo' => GrupoSanguineo::inRandomOrder()->first()->id,
        'ley_social_id' => LeySocial::inRandomOrder()->first()->id,
        'lista_espera' => true,
        'nacionalidad_id' => Nacionalidad::inRandomOrder()->first()->id,
        'nivel_instruccion_id' => NivelInstruccion::inRandomOrder()->first()->id,
        'nombre' => 'Juan',
        'ocupacion' => 'Title Searcher',
        'pertenece_pie' => false,
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
    expect($paciente->calle_id)->toBe($calle->id);
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

it('has fillable attributes', function () {
    $paciente = new Paciente();
    expect($paciente->getFillable())->toEqual([
        'actividad_economica',
        'lista_espera',
        'afp_id',
        'apellidos',
        'calle_id',
        'ciudad',
        'direccion',
        'donante',
        'edad',
        'email',
        'estado_civil_id',
        'establecimiento_educacional_id',
        'fecha_nacimiento',
        'genero_id',
        'grupo_sanguineo_id',
        'ley_social_id',
        'modalidad_id',
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

    
    test('it renders paciente page successfully', function () {
        $pacienteRepositoryMock = Mockery::mock('App\Repository\PacienteRepository');
        $controller = new PacienteController($pacienteRepositoryMock);
    
        Inertia::shouldReceive('render')
            ->once()
            ->with('PacientePage')
            ->andReturn('Rendered PacientePage');
    
        $response = $controller->index();
    
        expect($response)->toBe('Rendered PacientePage');
    });
        
    test('it handles invalid patient id gracefully', function () {
        $pacienteRepositoryMock = Mockery::mock('App\Repository\PacienteRepository');
        $pacienteRepositoryMock->shouldReceive('show')
            ->once()
            ->with(Mockery::type(Request::class))
            ->andReturn(null);
    
        $controller = new PacienteController($pacienteRepositoryMock);
        $request = new Request(['id' => 'invalid-id']);
    
        $response = $controller->show($request);
    
        expect($response)->toBeNull();
    });
    