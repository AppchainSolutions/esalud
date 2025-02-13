<?php
namespace Tests\Unit;

use Tests\TestCase;
use Carbon\Carbon;
use App\Models\Examen;
use App\Models\Paciente;
use App\Services\ExamenNotificationService;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExamenNotificationServiceTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_calcular_fecha_notificacion_para_examen_proximo_a_vencer()
    {
        // Crear un paciente
        $paciente = Paciente::factory()->create();

        // Crear un examen con fecha de vencimiento a 2 meses en el futuro
        $fechaVencimiento = Carbon::now()->addMonths(2);
        $examen = Examen::factory()->create([
            'paciente_id' => $paciente->id,
            'fecha_vencimiento' => $fechaVencimiento
        ]);

        $notificationService = new ExamenNotificationService();
        
        // Calcular fecha de notificación (debería ser un mes antes del vencimiento)
        $fechaNotificacion = $notificationService->calcularFechaNotificacion($examen);

        $this->assertEquals(
            $fechaVencimiento->subMonth(), 
            $fechaNotificacion,
            "La fecha de notificación debe ser un mes antes del vencimiento"
        );
    }

    /** @test */
    public function test_generar_plantilla_notificacion_para_examen()
    {
        // Crear un paciente
        $paciente = Paciente::factory()->create([
            'nombre' => 'Juan Pérez',
            'email' => 'juan.perez@example.com'
        ]);

        // Crear un examen
        $examen = Examen::factory()->create([
            'paciente_id' => $paciente->id,
            'tipo' => 'Examen de Sangre',
            'fecha_vencimiento' => Carbon::now()->addMonths(2)
        ]);

        $notificationService = new ExamenNotificationService();
        $plantilla = $notificationService->generarPlantillaNotificacion($examen);

        // Verificaciones
        $this->assertArrayHasKey('subject', $plantilla);
        $this->assertArrayHasKey('body', $plantilla);
        
        // Verificar contenido de la plantilla
        $this->assertEquals('Recordatorio de Examen Próximo a Vencer', $plantilla['subject']);
        $this->assertStringContainsString('Juan Pérez', $plantilla['body']);
        $this->assertStringContainsString('Examen de Sangre', $plantilla['body']);
        $this->assertStringContainsString($examen->fecha_vencimiento->format('d/m/Y'), $plantilla['body']);
    }
}
