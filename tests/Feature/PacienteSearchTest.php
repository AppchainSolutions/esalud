<?php

use App\Services\PacienteService;
use App\Repository\PacienteRepository;
use Illuminate\Http\Request;
use Mockery;
use Tests\TestCase;

describe('Búsqueda de Pacientes', function () {
    it('debe buscar pacientes con criterios válidos', function () {
        // Given: Un servicio de pacientes con un repositorio mockeado
        $pacienteRepository = Mockery::mock(PacienteRepository::class);
        
        $pacienteService = new PacienteService($pacienteRepository, null);
        
        // Preparar datos de prueba
        $request = Request::create('/search', 'GET', [
            'nombre' => 'Juan',
            'apellido' => 'Pérez'
        ]);

        // Configurar expectativas del repositorio
        $pacienteRepository
            ->shouldReceive('search')
            ->once()
            ->with($request)
            ->andReturn(new class {
                public function getData($assoc = false) {
                    $data = [
                        'data' => [
                            ['id' => 1, 'nombre' => 'Juan', 'apellido' => 'Pérez'],
                            ['id' => 2, 'nombre' => 'Juan', 'apellido' => 'Gómez']
                        ],
                        'meta' => [
                            'total' => 2,
                            'page' => 1,
                            'per_page' => 15
                        ]
                    ];
                    return $assoc ? $data : (object) $data;
                }
            });

        // When: Realizar la búsqueda
        $resultado = $pacienteService->search($request);

        // Then: Verificar los resultados
        expect($resultado)->toBeArray();
        expect($resultado)->toHaveCount(2);
        expect($resultado[0]['nombre'])->toBe('Juan');
        expect($resultado[0]['apellido'])->toBe('Pérez');
    });

    it('debe manejar búsquedas sin resultados', function () {
        // Given: Un servicio de pacientes con un repositorio mockeado
        $pacienteRepository = Mockery::mock(PacienteRepository::class);
        
        $pacienteService = new PacienteService($pacienteRepository, null);
        
        // Preparar datos de prueba
        $request = Request::create('/search', 'GET', [
            'nombre' => 'Paciente',
            'apellido' => 'Inexistente'
        ]);

        // Configurar expectativas del repositorio
        $pacienteRepository
            ->shouldReceive('search')
            ->once()
            ->with($request)
            ->andReturn(new class {
                public function getData($assoc = false) {
                    $data = [
                        'data' => [],
                        'meta' => [
                            'total' => 0,
                            'page' => 1,
                            'per_page' => 15
                        ]
                    ];
                    return $assoc ? $data : (object) $data;
                }
            });

        // When: Realizar la búsqueda
        $resultado = $pacienteService->search($request);

        // Then: Verificar los resultados
        expect($resultado)->toBeArray();
        expect($resultado)->toHaveCount(0);
    });
});
