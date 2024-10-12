
<?php

use App\Http\Controllers\PacienteController;
use App\Repository\PacienteRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mockery;
use Pest\Laravel\mock;

beforeEach(function () {
    $this->pacienteRepository = Mockery::mock(PacienteRepository::class);
    $this->controller = new PacienteController($this->pacienteRepository);
});

test('index method returns Inertia response', function () {
    Inertia::shouldReceive('render')
        ->once()
        ->with('PacientePage')
        ->andReturn('InertiaResponse');

    $response = $this->controller->index();

    expect($response)->toBe('InertiaResponse');
});

test('all method returns all patients', function () {
    $this->pacienteRepository->shouldReceive('all')
        ->once()
        ->andReturn('allPatients');

    $response = $this->controller->all();

    expect($response)->toBe('allPatients');
});

test('show method returns specific patient data', function () {
    $request = Request::create('/paciente/show', 'GET', ['id' => 1]);
    $this->pacienteRepository->shouldReceive('show')
        ->once()
        ->with($request)
        ->andReturn('patientData');

    $response = $this->controller->show($request);

    expect($response)->toBe('patientData');
});

test('update method updates patient data', function () {
    $request = Request::create('/paciente/update', 'POST', ['id' => 1, 'name' => 'Updated Name']);
    $this->pacienteRepository->shouldReceive('update')
        ->once()
        ->with($request)
        ->andReturn('updatedPatientData');

    $response = $this->controller->update($request);

    expect($response)->toBe('updatedPatientData');
});

test('store method stores new patient data', function () {
    $request = Request::create('/paciente/store', 'POST', ['name' => 'New Patient']);
    $this->pacienteRepository->shouldReceive('store')
        ->once()
        ->with($request)
        ->andReturn('storedPatientData');

    $response = $this->controller->store($request);

    expect($response)->toBe('storedPatientData');
});

test('destroy method deletes a patient', function () {
    $request = Request::create('/paciente/destroy', 'DELETE', ['id' => 1]);
    $this->pacienteRepository->shouldReceive('delete')
        ->once()
        ->with($request)
        ->andReturn(true);

    $response = $this->controller->destroy($request);

    expect($response)->toBeTrue();
});