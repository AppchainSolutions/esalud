<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use App\Services\PacienteService;
use App\Repository\PacienteRepository;
use Illuminate\Http\Request;
use Mockery;
use Mockery\MockInterface;

class PacienteServiceTest extends TestCase
{
    private PacienteService $pacienteService;
    private MockInterface $pacienteRepositoryMock;

    protected function setUp(): void
    {
        parent::setUp();

        // Crear un mock del repositorio de pacientes
        $this->pacienteRepositoryMock = Mockery::mock(PacienteRepository::class);
        
        // Inyectar el mock en el servicio
        $this->pacienteService = new PacienteService($this->pacienteRepositoryMock);
    }

    /** @test */
    public function test_search_method_calls_repository_search()
    {
        // Preparar un request de búsqueda
        $request = Request::create('/api/pacientes/search', 'GET', [
            'nombre' => 'Juan',
            'apellido' => 'Pérez'
        ]);

        // Configurar expectativa en el mock del repositorio
        $this->pacienteRepositoryMock
            ->shouldReceive('search')
            ->once()
            ->with($request)
            ->andReturn(collect([])); // Devolver una colección vacía como ejemplo

        // Ejecutar el método de búsqueda
        $resultado = $this->pacienteService->search($request);

        // Verificar que el resultado sea una colección
        $this->assertInstanceOf(\Illuminate\Support\Collection::class, $resultado);
    }

    protected function tearDown(): void
    {
        Mockery::close();
        parent::tearDown();
    }
}
