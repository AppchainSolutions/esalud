<?php

namespace Tests\Feature;

use App\Models\ExAldehido;
use App\Models\Paciente;
use App\Models\User;
use App\Notifications\ExamenVencimientoNotification;
use App\Services\ExamenNotificationService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class NotificacionesVencimientoTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function puede_generar_notificaciones_para_examenes_proximos_a_vencer()
    {
        Notification::fake();

        // Crear paciente con usuario
        $paciente = Paciente::factory()
            ->has(User::factory())
            ->create();

        // Crear examen próximo a vencer
        $examen = ExAldehido::factory()
            ->for($paciente)
            ->proximoAVencer()
            ->create();

        // Ejecutar servicio de notificaciones
        $notificacionService = app(ExamenNotificationService::class);
        $notificacionService->generarNotificacionesVencimiento();

        // Verificar que se envió notificación
        Notification::assertSentTo(
            $paciente->user,
            ExamenVencimientoNotification::class,
            function ($notification) use ($examen) {
                return $notification->examen->id === $examen->id;
            }
        );
    }

    /** @test */
    public function no_genera_notificaciones_para_examenes_no_proximos_a_vencer()
    {
        Notification::fake();

        // Crear paciente con usuario
        $paciente = Paciente::factory()
            ->has(User::factory())
            ->create();

        // Crear examen no próximo a vencer
        $examen = ExAldehido::factory()
            ->for($paciente)
            ->create([
                'fecha_prox_control' => now()->addYears(2),
            ]);

        // Ejecutar servicio de notificaciones
        $notificacionService = app(ExamenNotificationService::class);
        $notificacionService->generarNotificacionesVencimiento();

        // Verificar que no se envió notificación
        Notification::assertNothingSent();
    }

    /** @test */
    public function no_genera_notificaciones_para_paciente_sin_usuario()
    {
        // Crear paciente sin usuario
        $paciente = Paciente::factory()->create();

        // Crear examen próximo a vencer para paciente sin usuario
        $examen = ExAldehido::factory()
            ->for($paciente)
            ->proximoAVencer()
            ->create();

        // Ejecutar servicio de notificaciones
        $notificacionService = app(ExamenNotificationService::class);
        $notificacionService->generarNotificacionesVencimiento();

        // Verificar que NO se crearon notificaciones en base de datos
        $this->assertDatabaseCount('notificaciones', 0);
    }

    /** @test */
    public function puede_reintentar_notificaciones_fallidas()
    {
        // Simular un escenario de notificación fallida
        $paciente = Paciente::factory()
            ->has(User::factory())
            ->create();

        $examen = ExAldehido::factory()
            ->for($paciente)
            ->proximoAVencer()
            ->create();

        // Simular una notificación fallida
        $notificacion = $examen->generarNotificacionVencimiento();
        $notificacion->update([
            'estado' => 'fallida',
            'intentos' => 1,
        ]);

        // Ejecutar reintento de notificaciones
        $notificacionService = app(ExamenNotificationService::class);
        $notificacionService->reintentarNotificacionesFallidas();

        // Verificar que la notificación fue reenviada
        $this->assertDatabaseHas('notificaciones', [
            'id' => $notificacion->id,
            'estado' => 'enviada',
            'intentos' => 2,
        ]);
    }

    /** @test */
    public function correo_de_notificacion_contiene_detalles_del_examen()
    {
        // Crear paciente con usuario
        $paciente = Paciente::factory()
            ->has(User::factory())
            ->create();

        // Crear examen próximo a vencer
        $examen = ExAldehido::factory()
            ->for($paciente)
            ->proximoAVencer()
            ->create([
                'comentario' => 'Examen de control anual',
            ]);

        // Simular envío de notificación
        Notification::fake();

        // Ejecutar servicio de notificaciones
        $notificacionService = app(ExamenNotificationService::class);
        $notificacionService->generarNotificacionesVencimiento();

        // Verificar que se envió la notificación
        Notification::assertSentTo(
            $paciente->user,
            ExamenVencimientoNotification::class,
            function ($notification) use ($examen) {
                // Obtener el nombre de la clase sin namespace
                $tipoExamen = class_basename(get_class($examen));

                // Crear una instancia de MailMessage directamente
                $mailMessage = $notification->toMail($notification->examen->paciente->user);

                // Convertir introLines a un string para búsqueda más flexible
                $introLinesText = implode(' ', $mailMessage->introLines);

                // Verificar que el correo contiene los detalles del examen
                $this->assertTrue(
                    strpos($mailMessage->subject, $tipoExamen) !== false ||
                    strpos($introLinesText, $tipoExamen) !== false,
                    "El correo debe contener el tipo de examen: {$tipoExamen}"
                );

                $this->assertTrue(
                    strpos($introLinesText, $examen->fecha_prox_control->format('d/m/Y')) !== false,
                    "El correo debe contener la fecha de próximo control: {$examen->fecha_prox_control->format('d/m/Y')}"
                );

                // Verificar comentario de manera más flexible
                $this->assertTrue(
                    strpos($introLinesText, 'control anual') !== false,
                    "El correo debe contener algo relacionado con 'control anual'"
                );

                return true;
            }
        );
    }
}
