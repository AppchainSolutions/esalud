<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Contracts\Queue\ShouldQueue;
use Carbon\Carbon;

class ExamenVencimientoNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $examen;

    /**
     * Create a new notification instance.
     *
     * @param mixed $examen
     */
    public function __construct($examen)
    {
        $this->examen = $examen;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        $canales = ['database'];

        // Agregar canal de correo solo si tiene email
        if ($notifiable->email) {
            $canales[] = 'mail';
        }

        return $canales;
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $tipoExamen = class_basename(get_class($this->examen));
        $fechaProxControl = $this->examen->fecha_prox_control instanceof Carbon 
            ? $this->examen->fecha_prox_control->format('d/m/Y') 
            : Carbon::parse($this->examen->fecha_prox_control)->format('d/m/Y');

        // Calcular días restantes
        $diasRestantes = now()->diffInDays($this->examen->fecha_prox_control, false);

        // Manejar comentarios de manera segura
        $comentario = property_exists($this->examen, 'comentario') && $this->examen->comentario 
            ? $this->examen->comentario 
            : 'Sin comentarios adicionales';

        // Obtener nombre completo del paciente
        $nombrePaciente = trim("{$notifiable->nombre} {$notifiable->apellidos}");

        return (new MailMessage)
            ->subject("Recordatorio de Examen Médico: {$tipoExamen}")
            ->greeting("Hola {$nombrePaciente}")
            ->line("Su examen de {$tipoExamen} está próximo a vencer.")
            ->line("Fecha de Próximo Control: {$fechaProxControl}")
            ->line("Quedan {$diasRestantes} días para realizar su examen.")
            ->line("Detalles del Examen:")
            ->line("- Tipo de Examen: {$tipoExamen}")
            ->line("- Fecha de Próximo Control: {$fechaProxControl}")
            ->line("- Comentarios: {$comentario}")
            ->line("Es importante realizar su examen de control anual.")
            ->action('Ver Mis Exámenes', url('/examenes'))
            ->line('Por favor, renueve su examen a tiempo.')
            ->line('Si tiene alguna duda, no dude en contactarnos.')
            ->salutation('Saludos cordiales, Equipo VitamHC-Vulco');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'examen_id' => $this->examen->id,
            'tipo_examen' => class_basename(get_class($this->examen)),
            'fecha_prox_control' => $this->examen->fecha_prox_control
        ];
    }
}
