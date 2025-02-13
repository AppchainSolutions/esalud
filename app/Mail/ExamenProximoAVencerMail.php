<?php

namespace App\Mail;

use App\Models\Examen;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ExamenProximoAVencerMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * El examen que está próximo a vencer.
     *
     * @var Examen
     */
    public $examen;

    /**
     * Create a new message instance.
     *
     * @param Examen $examen
     * @return void
     */
    public function __construct(Examen $examen)
    {
        $this->examen = $examen;
    }

    /**
     * Get the message envelope.
     *
     * @return Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Recordatorio de Examen Próximo a Vencer',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.examen_vencimiento',
            with: [
                'pacienteNombre' => $this->examen->paciente->nombre,
                'tipoExamen' => $this->examen->tipo,
                'fechaVencimiento' => $this->examen->fecha_vencimiento->format('d/m/Y')
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
