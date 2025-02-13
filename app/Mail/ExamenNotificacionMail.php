<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;

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
     * Obtener nombre amigable del tipo de examen
     */
    private function getNombreAmigableExamen(): string
    {
        $nombreClase = class_basename(get_class($this->examen));
        $mapeoNombres = [
            'ExAldehido' => 'Examen de Aldehído',
            'ExHumoNegro' => 'Examen de Humo Negro',
            'ExamenPvt' => 'Examen PVT',
            'ExamenPvmos' => 'Examen PVMOS',
            'ExamenPvmosol' => 'Examen PVMOSOL',
            'ExamenRespirador' => 'Examen de Respirador',
            // Añadir más mapeos según sea necesario
        ];

        return $mapeoNombres[$nombreClase] ?? $nombreClase;
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
                'tipoExamen' => $this->getNombreAmigableExamen(),
                'fechaProxControl' => Carbon::parse($this->examen->fecha_prox_control)->format('d/m/Y'),
                'fechaUltControl' => $this->examen->fecha_ult_control 
                    ? Carbon::parse($this->examen->fecha_ult_control)->format('d/m/Y') 
                    : 'No registrada'
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
