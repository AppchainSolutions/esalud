<?php
namespace Tests\Feature;

use Tests\TestCase;
use Carbon\Carbon;
use App\Models\Examen;
use App\Models\Paciente;
use Illuminate\Support\Facades\Mail;
use App\Mail\ExamenProximoAVencerMail;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExamenNotificationIntegrationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_envio_notificacion_examen_proximo_a_vencer()
    {
        // Preparar el entorno de prueba
        Mail::fake();

        // Crear un paciente con un examen próximo a vencer
        $paciente = Paciente::factory()->create([
            'email' => 'juan.perez@example.com'
        ]);

        $examen = Examen::factory()->create([
            'paciente_id' => $paciente->id,
            'fecha_vencimiento' => Carbon::now()->addMonths(2)
        ]);

        // Simular el envío de notificación
        $this->artisan('examenes:notificar')
             ->expectsOutput('Notificaciones de exámenes próximos a vencer enviadas.')
             ->assertExitCode(0);

        // Verificar que se envió el correo
        Mail::assertSent(ExamenProximoAVencerMail::class, function ($mail) use ($paciente) {
            return $mail->hasTo($paciente->email);
        });

        // Verificar que se registró la notificación
        $this->assertDatabaseHas('notificaciones', [
            'examen_id' => $examen->id,
            'tipo' => 'vencimiento',
            'estado' => 'enviada'
        ]);
    }
}
