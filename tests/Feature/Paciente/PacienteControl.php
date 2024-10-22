<?php

use App\Http\Controllers\PacienteController;
use App\Repository\PacienteRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mockery;
use function Pest\Laravel\get;
use function Pest\Laravel\post;
use function Pest\Laravel\put;
use function Pest\Laravel\delete;

beforeEach(function () {
    $this->pacienteRepository = Mockery::mock(PacienteRepository::class);
    $this->controller = new PacienteController($this->pacienteRepository);
});

test('index returns an Inertia response', function () {
    Inertia::shouldReceive('render')
        ->once()
        ->with('PacientePage')
        ->andReturn('InertiaResponse');

    $response = $this->controller->index();

    expect($response)->toBe('InertiaResponse');
});

test('all returns all patients', function () {
    $this->pacienteRepository->shouldReceive('all')
        ->once()
        ->andReturn('allPatients');

    $response = $this->controller->all();

    expect($response)->toBe('allPatients');
});

test('show returns a specific patient', function () {
    $request = Request::create('/paciente/1', 'GET');
    $this->pacienteRepository->shouldReceive('show')
        ->once()
        ->with($request)
        ->andReturn('specificPatient');

    $response = $this->controller->show($request);

    expect($response)->toBe('specificPatient');
});

test('update updates a patient', function () {
    $request = Request::create('/paciente/1', 'PUT');
    $this->pacienteRepository->shouldReceive('update')
        ->once()
        ->with($request)
        ->andReturn('updatedPatient');

    $response = $this->controller->update($request);

    expect($response)->toBe('updatedPatient');
});

test('store stores a new patient', function () {
    $request = Request::create('/paciente', 'POST');
    $this->pacienteRepository->shouldReceive('store')
        ->once()
        ->with($request)
        ->andReturn('storedPatient');

    $response = $this->controller->store($request);

    expect($response)->toBe('storedPatient');
});

test('destroy deletes a patient', function () {
    $request = Request::create('/paciente/1', 'DELETE');
    $this->pacienteRepository->shouldReceive('delete')
        ->once()
        ->with($request)
        ->andReturn(true);

    $response = $this->controller->destroy($request);

    expect($response)->toBeTrue();
});