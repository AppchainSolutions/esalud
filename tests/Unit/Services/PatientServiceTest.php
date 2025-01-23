<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use App\Services\PatientService;
use App\Models\Patient;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PatientServiceTest extends TestCase
{
    use RefreshDatabase;

    private PatientService $patientService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->patientService = new PatientService();
    }

    public function test_can_create_patient()
    {
        $patientData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '1234567890',
            'birth_date' => '1990-01-01'
        ];

        $patient = $this->patientService->create($patientData);

        $this->assertInstanceOf(Patient::class, $patient);
        $this->assertEquals($patientData['name'], $patient->name);
        $this->assertEquals($patientData['email'], $patient->email);
    }
}
