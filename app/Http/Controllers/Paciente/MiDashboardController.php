<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\Paciente;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class MiDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Paciente/MiDashboard');
    }

    // private function obtenerProximasCitas($paciente)
    // {
    //     return DB::table('citas')
    //         ->where('paciente_id', $paciente->id)
    //         ->where('fecha', '>=', now())
    //         ->orderBy('fecha', 'asc')
    //         ->take(3)
    //         ->get([
    //             'id', 
    //             'fecha', 
    //             'especialidad', 
    //             'medico_nombre' => 'nombre_medico'
    //         ]);
    // }

    // private function obtenerUltimasConsultas($paciente)
    // {
    //     return DB::table('consultas')
    //         ->where('paciente_id', $paciente->id)
    //         ->orderBy('fecha', 'desc')
    //         ->take(3)
    //         ->get([
    //             'id', 
    //             'fecha', 
    //             'diagnostico_principal',
    //             'especialidad'
    //         ]);
    // }

    // private function obtenerResumenSalud($paciente)
    // {
    //     return [
    //         'examenes_pendientes' => DB::table('examenes')
    //             ->where('paciente_id', $paciente->id)
    //             ->where('estado', 'pendiente')
    //             ->count(),
    //         'vacunas_aplicadas' => DB::table('vacunas')
    //             ->where('paciente_id', $paciente->id)
    //             ->count(),
    //         'tratamientos_activos' => DB::table('tratamientos')
    //             ->where('paciente_id', $paciente->id)
    //             ->where('estado', 'activo')
    //             ->count()
    //     ];
    // }

    // private function obtenerRecordatorios($paciente)
    // {
    //     $recordatorios = [];

    //     // Recordatorio de próxima cita
    //     $proximaCita = DB::table('citas')
    //         ->where('paciente_id', $paciente->id)
    //         ->where('fecha', '>=', now())
    //         ->orderBy('fecha', 'asc')
    //         ->first();

    //     if ($proximaCita) {
    //         $recordatorios[] = [
    //             'tipo' => 'cita',
    //             'mensaje' => 'Tienes una próxima cita el ' . 
    //                 Carbon::parse($proximaCita->fecha)->format('d/m/Y') . 
    //                 ' con ' . $proximaCita->medico_nombre
    //         ];
    //     }

    //     // Recordatorio de exámenes pendientes
    //     $examenesPendientes = DB::table('examenes')
    //         ->where('paciente_id', $paciente->id)
    //         ->where('estado', 'pendiente')
    //         ->count();

    //     if ($examenesPendientes > 0) {
    //         $recordatorios[] = [
    //             'tipo' => 'examen',
    //             'mensaje' => "Tienes $examenesPendientes exámenes pendientes"
    //         ];
    //     }

    //     return $recordatorios;
    // }
}
