<?php

namespace App\Mail;

use App\Models\Paciente;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class PacienteActivacionMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Paciente que se está activando
     *
     * @var Paciente
     */
    public $paciente;

    /**
     * Token de activación
     *
     * @var string
     */
    public $token;

    /**
     * Create a new message instance.
     */
    public function __construct(Paciente $paciente, string $token)
    {
        $this->paciente = $paciente;
        $this->token = $token;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Activación de Cuenta - eSalud',
            to: $this->paciente->email
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        // Generar URL de activación
        $activationUrl = route('paciente.activacion', ['token' => $this->token]);

        return new Content(
            markdown: 'emails.paciente-activacion',
            with: [
                'paciente' => $this->paciente,
                'activationUrl' => $activationUrl,
                'expiracionHoras' => 24
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
