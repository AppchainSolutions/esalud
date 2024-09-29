<?php

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Paciente;
use App\Models\Religion;
use App\Models\Modalidad;
use App\Models\Afp;
use App\Models\Alergias;
use App\Models\SeguroSalud;
use App\Models\EstablecimientoEducacional;



uses(RefreshDatabase::class);

it('can create a paciente', function () {
    $religion = Religion::factory()->create();
    $modalidad = Modalidad::factory()->create();
    $afp = Afp::factory()->create();
    $seguro = SeguroSalud::factory()->create();
    $educacional = EstablecimientoEducacional::factory()->create();


    $paciente = Paciente::factory()->create([
        'rut' => '12345678-9',
        'nombre' => 'Juan',
        'apellidos' => 'Perez',
        'email' => 'juan.perez@example.com',
        'religion_id' => $religion->id,
        'modalidad' => $modalidad->id,
        'afp_id' => $afp->id,
        'seguro_salud_id' => $seguro->id,
        'establecimiento_educacional_id' => $educacional->id
    ]);

    expect($paciente)->toBeInstanceOf(Paciente::class);
    expect($paciente->rut)->toBe('12345678-9');
    expect($paciente->nombre)->toBe('Juan');
    expect($paciente->apellidos)->toBe('Perez');
    expect($paciente->email)->toBe('juan.perez@example.com');
    expect($paciente->religion_id)->toBe($religion->id);
    expect($paciente->modalidad)->toBe($modalidad->id);
    expect($paciente->afp_id)->toBe($afp->id);
    expect($paciente->seguro_salud_id)->toBe($seguro->id);
    expect($paciente->establecimiento_educacional_id)->toBe($educacional->id);


});

it('can associate a AFP with a paciente', function () {
    $afp = Afp::factory()->create();
    $paciente = Paciente::factory()->create(['afp_id' => $afp->id]);

    expect($paciente->afp_id)->toBe($afp->id);
});

it('can associate a religion with a paciente', function () {
    $religion = Religion::factory()->create();
    $paciente = Paciente::factory()->create(['religion_id' => $religion->id]);

    expect($paciente->religion_id)->toBe($religion->id);
});

it('can associate a modalidad with a paciente', function () {
    $modalidad = Modalidad::factory()->create();
    $paciente = Paciente::factory()->create(['modalidad' => $modalidad->id]);

    expect($paciente->modalidad)->toBe($modalidad->id);
});

it('can associate a seguro with a paciente', function () {
    $seguro = SeguroSalud::factory()->create();
    $paciente = Paciente::factory()->create(['seguro_salud_id' => $seguro->id]);

    expect($paciente->seguro_salud_id)->toBe($seguro->id);
});

it('belongs to seguro', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->seguro_salud_id())->toBeInstanceOf(BelongsTo::class);
});

it('can associate a establecimiento educacional with a paciente', function () {
    $educacional = EstablecimientoEducacional::factory()->create();
    $paciente = Paciente::factory()->create(['establecimiento_educacional_id' => $educacional->id]);

    expect($paciente->establecimiento_educacional_id)->toBe($educacional->id);
});

it('belongs to establecimiento educacional', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->establecimiento_educacional_id())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to estado civil', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->estado_civil())->toBeInstanceOf(BelongsTo::class);
});

it('belongs to afp', function () {
    $paciente = Paciente::factory()->create();
    expect($paciente->afp_id())->toBeInstanceOf(BelongsTo::class);
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
        'pueblo_indigena_id',
        'religion_id',
        'rut',
        'seguro_salud_id',
        'telefono1',
        'telefono2',
    ]);
});