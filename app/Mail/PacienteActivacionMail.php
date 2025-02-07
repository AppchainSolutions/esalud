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
     * URL de activación
     *
     * @var string
     */
    public $activationUrl;

    /**
     * Horas de expiración del token
     *
     * @var int
     */
    public $expiracionHoras;

    /**
     * Create a new message instance.
     *
     * @param Paciente $paciente Paciente que se está activando
     * @param string $token Token de activación
     * @param string $activationUrl URL de activación
     * @param int $expiracionHoras Horas de validez del token
     */
    public function __construct(
        Paciente $paciente, 
        string $token, 
        string $activationUrl, 
        int $expiracionHoras = 24
    ) {
        $this->paciente = $paciente;
        $this->token = $token;
        $this->activationUrl = $activationUrl;
        $this->expiracionHoras = $expiracionHoras;
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
        return new Content(
            markdown: 'emails.paciente-activacion',
            with: [
                'paciente' => $this->paciente,
                'token' => $this->token,
                'activationUrl' => $this->activationUrl,
                'expiracionHoras' => $this->expiracionHoras
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
