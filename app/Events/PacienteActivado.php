<?php

namespace App\Events;

use App\Models\Paciente;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PacienteActivado
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Paciente que ha sido activado
     *
     * @var Paciente
     */
    public $paciente;

    /**
     * Usuario creado para el paciente
     *
     * @var User
     */
    public $user;

    /**
     * Create a new event instance.
     */
    public function __construct(Paciente $paciente, User $user)
    {
        $this->paciente = $paciente;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('paciente-activado.' . $this->paciente->id),
        ];
    }
}
