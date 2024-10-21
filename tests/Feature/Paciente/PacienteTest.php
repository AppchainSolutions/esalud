<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Mockery;

use App\Models\Calles;
use App\Models\EstablecimientosEducacionales;
use App\Models\EstadosCiviles;
use App\Models\Generos;
use App\Models\GruposSanguineos;
use App\Models\Nacionalidades;
use App\Models\NivelesInstruccion;
use App\Models\Pacientes;
use App\Models\Previsiones;
use App\Models\PueblosOriginarios;
use App\Models\Religiones;

uses(RefreshDatabase::class);
 
it('can create a paciente', function () {

    $pacienteData = Pacientes::factory()->make()->toArray();
     $response = $this->post('/pacientes', $pacienteData);

    $response->assertStatus(201);
    $this->assertDatabaseHas('pacientes', $pacienteData); 
});


it('can read a paciente', function () {
    $paciente = Pacientes::factory()->create();

    $response = $this->get('/paciente/' . $paciente->id);

    $response->assertStatus(200);
    $response->assertJson($paciente->toArray());
});

it('can update a paciente', function () {
    $paciente = Pacientes::factory()->create();
    $updatedData = Pacientes::factory()->make()->toArray();

    $response = $this->put('/pacientes/' . $paciente->id, $updatedData);

    $response->assertStatus(200);
    $this->assertDatabaseHas('pacientes', $updatedData);
});

it('can delete a paciente', function () {
    $paciente = Pacientes::factory()->create();

    $response = $this->delete('/pacientes/' . $paciente->id);

    $response->assertStatus(204);
    $this->assertDatabaseMissing('pacientes', ['id' => $paciente->id]);
});

it('Pacientes with relationshions', function () {
    $calle = Calles::factory()->create();
    $establecimientoEducacional = EstablecimientosEducacionales::factory()->create();
    $estadoCivil = EstadosCiviles::factory()->create();
    $nacionalidad = Nacionalidades::factory()->create();
    $nivelInstruccion = NivelesInstruccion::factory()->create();
    $prevision = Previsiones::factory()->create();
    $puebloOriginario = PueblosOriginarios::factory()->create();
    $religion = Religiones::factory()->create();

    // Crear un paciente usando el factory
    $paciente = Pacientes::factory()->create([
        'apellidos_responsable' => 'Juanita',
        'apellidos' => 'Perez',
        'calle_id' => Calles::inRandomOrder()->first()->id,
        'calle_responsable_id' => Calles::inRandomOrder()->first()->id,
        'ciudad_responsable' => 'Linares',
        'ciudad' => 'Kemmershire',
        'comunidad_lgbtq' => true,
        'comunidad_lgtbq_responsable' => false,
        'credencial_discapacidad_responsable' => true,
        'credencial_discapacidad' => false,
        'direccion_responsable' => 'Madison Avenue',
        'direccion' => '6806 Labadie Ways Apt. 417',
        'donante' => false,
        'donante_responsable' => true,
        'edad_responsable' => 45,
        'edad' => 18,
        'email_responsable' => ' innorio@falesa.com',
        'email' => 'juan.perez@example.com',
        'establecimiento_educacional_id' => EstablecimientosEducacionales::factory()->create()->id,
        'estado_civil_id' => EstadosCiviles::inRandomOrder()->first()->id,
        'estado_civil_responsable_id' => EstadosCiviles::inRandomOrder()->first()->id,
        'fecha_nacimiento_responsable' => '1970-01-01',
        'fecha_nacimiento' => '2011-07-19',
        'genero_id' => Generos::inRandomOrder()->first()->id,
        'genero_responsable_id' => Generos::inRandomOrder()->first()->id,
        'grupo_sanguineo_id'  => GruposSanguineos::inRandomOrder()->first()->id,
        'grupo_sanguineo_responsable_id' => GruposSanguineos::inRandomOrder()->first()->id,
        'nacionalidad_id' => Nacionalidades::inRandomOrder()->first()->id,
        'nacionalidad_responsable_id' => Nacionalidades::inRandomOrder()->first()->id,
        'nivel_instruccion_id' => NivelesInstruccion::inRandomOrder()->first()->id,
        'nivel_instruccion_responsable_id' => NivelesInstruccion::inRandomOrder()->first()->id,
        'nombre_responsable' => 'Juanita',
        'nombre' => 'Juan',
        'ocupacion_responsable' => 'Cuidadora',
        'ocupacion' => 'Title Searcher',
        'parentesco_responsable' => "Abuela",
        'pertenece_pie' => false,
        'prevision_id' => Previsiones::inRandomOrder()->first()->id,
        'prevision_responsable_id' => Previsiones::inRandomOrder()->first()->id,
        'profesor' => 'Lilian Garcia',
        'pueblo_originario_id' => PueblosOriginarios::inRandomOrder()->first()->id,
        'pueblo_originario_responsable_id' => PueblosOriginarios::inRandomOrder()->first()->id,
        'religion_id' => Religiones::inRandomOrder()->first()->id,
        'religion_responsable_id' => Religiones::inRandomOrder()->first()->id,
        'rut_responsable' => '8445678-0',
        'rut' => '12345678-9',
        'telefono_responsable' => '+56 91234567',
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
    expect($paciente->estado_civil)->toBe($estadoCivil->id);
    expect($paciente->estado_civil_responsable)->toBe($estadoCivil->id);
    expect($paciente->fecha_nacimiento)->toBe('2011-07-19');
    expect($paciente->genero)->toBe('Femenino');
    expect($paciente->grupo_sanguineo)->toBe('A+');
    expect($paciente->nacionalidad_id)->toBe($nacionalidad->id);
    expect($paciente->nivel_instruccion_id)->toBe($nivelInstruccion->id);
    expect($paciente->nombre)->toBe('Juan');
    expect($paciente->ocupacion)->toBe('Title Searcher');
    expect($paciente->prevision_id)->toBe($prevision->id);
    expect($paciente->profeor)->toBe('Lilian Garcia');
    expect($paciente->pueblo_originario_id)->toBe($puebloOriginario->id);
    expect($paciente->religion_id)->toBe($religion->id);
    expect($paciente->rut)->toBe('12345678-9');
    expect($paciente->telefono1)->toBe('337-597-4667');
    expect($paciente->telefono2)->toBe('+1-505-479-9905');
    expect($paciente->nacionalidad())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->nivelInstruccion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->prevision())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->puebloOriginario())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->religion())->toBeInstanceOf(BelongsTo::class);
    expect($paciente)->toBeInstanceOf(Pacientes::class);
    expect($paciente->seguroSalud())->toBeInstanceOf(BelongsTo::class);
    expect($paciente->establecimientoEducacional())->toBeInstanceOf(BelongsTo::class); 
});


it('has fillable attributes', function () {
    $paciente = new Pacientes();
    expect($paciente->getFillable())->toEqual(['apellidos_responsable',
        'apellidos',
        'calle_id',
        'calle_responsable_id',
        'ciudad_responsable',
        'ciudad',
        'comunidad_lgbtq',
        'comunidad_lgbtq_responsable',
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
        'pertenece_pie',
        'prevision_id',
        'prevision_responsable_id',
        'profesor',
        'pueblo_originario_id',
        'pueblo_originario_responsable_id',
        'religion_id',
        'religion_responsable_id',
        'remember_token',
        'rut_responsable',
        'rut',
        'telefono_responsable',
        'telefono1',
        'telefono2'
    ]);
});
