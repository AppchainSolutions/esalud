
<?php

use App\Http\Controllers\PacienteController;
use App\Repository\PacienteRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mockery;

/* beforeEach(function () {
    $this->pacienteRepository = Mockery::mock(PacienteRepository::class);
    $this->controller = new PacienteController($this->pacienteRepository);
}); */

test('update method updates patient data', function () {
    $request = Request::create('/paciente/update', 'POST', ['id' => 1, 'name' => 'Updated Name']);
    $this->pacienteRepository->shouldReceive('update')
        ->once()
        ->with($request)
        ->andReturn('updatedPatientData');

    $response = $this->controller->update($request);

    expect($response)->toBe('updatedPatientData');
});

/* describe('Paciente CRUD Operations', () => {
    const baseUrl = 'http://localhost:8000';

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('should create a new patient', () => {
        cy.visit(`${baseUrl}/paciente/create`);
        cy.get('input[name="name"]').type('New Patient');
        cy.get('form').submit();
        cy.contains('Patient created successfully').should('be.visible');
});

    it('should edit an existing patient', () => {
        cy.visit(`${baseUrl}/paciente/1/edit`);
        cy.get('input[name="name"]').clear().type('Updated Patient');
        cy.get('form').submit();
        cy.contains('Patient updated successfully').should('be.visible');
});

    it('should delete a patient', () => {
        cy.visit(`${baseUrl}/paciente`);
        cy.get('button[data-cy="delete-paciente-1"]').click();
        cy.contains('Patient deleted successfully').should('be.visible');
    });

    it('should view a patient', () => {
        cy.visit(`${baseUrl}/paciente/1`);
        cy.contains('Patient Details').should('be.visible');
        cy.contains('Name:').should('be.visible');
    }); */
/* 
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
 */