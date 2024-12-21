<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ExEpo;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EnviarNotificacionesVencimiento extends Command
{
    protected $signature = 'notificaciones:enviar';
    protected $description = 'Envia correos sobre exámenes próximos a vencer';

    public function handle()
    {
        $fechaObjetivoIni = now()->addMonth(); // Un mes en el futuro
        $fechaObjetivoTer = now()->addMonth()->addDays(14); // Un mes en el futuro
        $this->info($fechaObjetivoIni->format('Y-m-d'));
        $this->info($fechaObjetivoTer->format('Y-m-d'));
        $examenes = ExEpo::whereBetween('fecha_vencimiento', [$fechaObjetivoIni, $fechaObjetivoTer])
            ->with('paciente', 'bateria')
            ->get();


        Log::info($examenes);


        $data = $examenes->map(function ($examen) {
            return [
                'nombre' => $examen->paciente->nombre,
                'apellidos' => $examen->paciente->apellidos,
                'rut' => $examen->paciente->rut,
                'fecha_vencimiento' => $examen->fecha_vencimiento,
                'bateria' => $examen->bateria,
                'email' => $examen->paciente->email,
                'codigo_verificacion' => $examen->codigo_verificacion,
                'numero_solicitud' => $examen->numero_solicitud,
                'protocolo_minsal' => $examen->paciente->protocolo_minsal,
                'activo' => $examen->paciente->activo
            ];
        });
        Log::info($data);
        
        if ($data->isEmpty()) {
            $this->info('No hay exámenes para notificar.');
        } else {
//            $destinatarios = $data->pluck('email')->unique()->toArray();
            $destinatarios = ['omar.ahumadag@gmail.com']; // Lista predefinida
            foreach ($destinatarios as $correo) {
                Mail::to($correo)->send(new \App\Mail\NotificacionExamenes($data->toArray()));
            }
            $this->info('Notificaciones enviadas correctamente.');
        }
    }
}
