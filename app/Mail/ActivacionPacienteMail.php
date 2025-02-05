<?php

namespace App\Mail;

use App\Models\Paciente;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ActivacionPacienteMail extends Mailable
{
    use Queueable, SerializesModels;

    public $paciente;
    public $token;

    public function __construct(Paciente $paciente, string $token)
    {
        $this->paciente = $paciente;
        $this->token = $token;
    }

    public function build()
    {
        return $this->markdown('emails.pacientes.activacion')
            ->subject('Activación de Cuenta - E-Salud')
            ->with([
                'nombrePaciente' => $this->paciente->nombre_completo,
                'urlActivacion' => route('paciente.activar', $this->token)
            ]);
    }
}
