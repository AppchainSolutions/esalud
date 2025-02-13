<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ExamenNotificacionMail extends Mailable
{
    use Queueable, SerializesModels;

    public $examen;
    public $paciente;
    public $notificacion;

    /**
     * Create a new message instance.
     */
    public function __construct($examen, $paciente, $notificacion)
    {
        $this->examen = $examen;
        $this->paciente = $paciente;
        $this->notificacion = $notificacion;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Recordatorio de Examen Médico',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.examen_notificacion',
            with: [
                'nombrePaciente' => $this->paciente->nombre,
                'tipoExamen' => class_basename(get_class($this->examen)),
                'fechaProxControl' => $this->examen->fecha_prox_control,
                'fechaUltControl' => $this->examen->fecha_ult_control ?? 'No registrada'
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments(): array
    {
        return [];
    }
}
