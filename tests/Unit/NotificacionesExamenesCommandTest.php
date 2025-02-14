<?php

namespace Tests\Unit;

use App\Console\Commands\Notifications\NotificacionesExamenesCommand;
use App\Services\ExamenNotificationService;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;
use Mockery;

class NotificacionesExamenesCommandTest extends TestCase
{
    private $examenNotificationService;
    private $command;

    protected function setUp(): void
    {
        parent::setUp();

        // Crear servicio real
        $this->examenNotificationService = new ExamenNotificationService();
        
        // Inyectar el servicio en el comando
        $this->command = new NotificacionesExamenesCommand($this->examenNotificationService);
    }

    #[Test]
    public function test_generar_notificaciones_con_exito()
    {
        // Generar notificaciones con tipos de exámenes específicos
        $tiposExamenes = ['aldehido', 'humo_negro'];
        $meses = 2;
        $notificaciones = $this->examenNotificationService->generarNotificaciones($tiposExamenes, $meses, false);

        // Verificaciones
        $this->assertIsArray($notificaciones);
        
        // Verificar que el resultado no esté vacío
        $this->assertNotEmpty($notificaciones);
        
        // Verificar estructura de las notificaciones
        foreach ($notificaciones as $notificacion) {
            $this->assertArrayHasKey('id', $notificacion);
            $this->assertArrayHasKey('tipo', $notificacion);
        }

        // Ejecutar el comando
        $result = $this->artisan('notificaciones:examenes', [
            'accion' => 'generar',
            '--meses' => $meses
        ]);

        // Verificaciones
        $result->assertExitCode(0);
    }

    #[Test]
    public function test_revisar_notificaciones_con_exito()
    {
        // Revisar notificaciones de un tipo específico
        $tiposExamenes = ['metales'];
        $meses = 3;
        $examenes = $this->examenNotificationService->obtenerExamenesPorVencer($tiposExamenes, $meses);

        // Verificaciones
        $this->assertIsArray($examenes);
        
        // Verificar estructura de los exámenes
        foreach ($examenes as $tipo => $examenesDelTipo) {
            $this->assertIsArray($examenesDelTipo);
            
            foreach ($examenesDelTipo as $examen) {
                $this->assertIsArray($examen);
                $this->assertArrayHasKey('id', $examen);
                $this->assertArrayHasKey('paciente_id', $examen);
            }
        }

        // Ejecutar el comando
        $result = $this->artisan('notificaciones:examenes', [
            'accion' => 'revisar',
            'tipo' => 'metales',
            '--meses' => $meses
        ]);

        // Verificaciones
        $result->assertExitCode(0);
    }

    #[Test]
    public function test_generar_notificaciones_sin_resultados()
    {
        // Generar notificaciones con tipos de exámenes inexistentes
        $notificaciones = $this->examenNotificationService->generarNotificaciones([], 0, false);

        // Verificaciones
        $this->assertIsArray($notificaciones);
        $this->assertEmpty($notificaciones);

        // Ejecutar el comando
        $result = $this->artisan('notificaciones:examenes', [
            'accion' => 'generar'
        ]);

        // Verificaciones
        $result->assertExitCode(1);
    }

    #[Test]
    public function test_revisar_notificaciones_sin_examenes()
    {
        // Revisar notificaciones con tipos de exámenes inexistentes
        $examenes = $this->examenNotificationService->obtenerExamenesPorVencer([], 0);

        // Verificaciones
        $this->assertIsArray($examenes);
        $this->assertEmpty($examenes);

        // Ejecutar el comando
        $result = $this->artisan('notificaciones:examenes', [
            'accion' => 'revisar'
        ]);

        // Verificaciones
        $result->assertExitCode(1);
    }

    #[Test]
    public function test_accion_invalida()
    {
        // Ejecutar comando con acción no válida
        $result = $this->artisan('notificaciones:examenes', [
            'accion' => 'invalida'
        ]);

        // Verificaciones
        $result->assertExitCode(1);
        $result->expectsOutput('Acción no válida. Use generar, revisar o enviar.');
    }

    #[Test]
    public function test_log_de_notificaciones()
    {
        // Simular log
        Log::shouldReceive('channel')
            ->once()
            ->with('notifications')
            ->andReturnSelf();
        Log::shouldReceive('info')
            ->once()
            ->with('Notificaciones de Exámenes', Mockery::type('array'));

        // Generar notificaciones
        $notificaciones = $this->examenNotificationService->generarNotificaciones(['aldehido', 'humo_negro'], 2, false);

        // Verificaciones
        $this->assertIsArray($notificaciones);
        $this->assertNotEmpty($notificaciones);

        // Ejecutar el comando con opción de log
        $result = $this->artisan('notificaciones:examenes', [
            'accion' => 'generar',
            '--log' => true
        ]);

        // Verificaciones
        $result->assertExitCode(0);
    }
}
