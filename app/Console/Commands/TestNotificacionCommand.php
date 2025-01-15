<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ExEpo;
use App\Models\Paciente;
use App\Notifications\ExamVencNotification;
use Illuminate\Support\Facades\Mail;


class TestNotificacionCommand extends Command
{
    protected $signature = 'test:notificacion';
    protected $description = 'Prueba el envío de notificaciones de exámenes';

    public function handle()
    {
        // Obtener algunos exámenes de prueba
        //$examenes = ExEpo::get()->first();
        $fechaObjetivoIni = now()->addMonth(); // Un mes en el futuro
        $fechaObjetivoTer = now()->addMonth()->addDays(14); // Un mes en el futuro
        $this->info($fechaObjetivoIni->format('Y-m-d'));
        $this->info($fechaObjetivoTer->format('Y-m-d'));
        $examenes = ExEpo::whereBetween('fecha_vencimiento', [$fechaObjetivoIni, $fechaObjetivoTer])
            ->with('paciente', 'bateria')
            ->get();

        if (!$examenes) {
            $this->error('No hay exámenes para probar.');
            return;
        }else{
            $data = $examenes->map(function ($examen) {
                return [
                    'nombre' => $examen->paciente->nombre,
                    'apellidos' => $examen->paciente->apellidos,
                    'rut' => $examen->paciente->rut,
                    'fecha_vencimiento' => $examen->fecha_vencimiento,
                    'bateria' => $examen->bateria->descripcion,
                    'email' => $examen->paciente->email,
                    'codigo_verificacion' => $examen->codigo_verificacion,
                    'numero_solicitud' => $examen->numero_solicitud,
                    'protocolo_minsal' => $examen->paciente->protocolo_minsal,
                    'activo' => $examen->paciente->activo
                ];
            });
            echo($data);
            $correo='omar.ahumadag@gmail.com';
            Mail::to($correo)->send(new \App\Mail\NotificacionExamenesEPO($data->toArray()));
        }

        // Enviar notificación directamente
/*         $persona = Paciente::first();

        $this->info('Notificación de prueba enviada correctamente.'); */
    }
}