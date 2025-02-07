<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Services\PacienteActivacionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PruebasController extends Controller
{
    protected $activacionService;

    public function __construct(PacienteActivacionService $activacionService)
    {
        $this->activacionService = $activacionService;
    }

    /**
     * Resetear base de datos para pruebas
     */
    public function resetDatabase()
    {
        if (app()->environment('testing')) {
            // Limpiar tablas
            \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            \DB::table('paciente')->truncate();
            \DB::table('users')->truncate();
            \DB::statement('SET FOREIGN_KEY_CHECKS=1;');

            return response()->json(['status' => 'Database reset successfully']);
        }

        return response()->json(['error' => 'Not allowed in this environment'], 403);
    }

    /**
     * Crear paciente para pruebas
     */
    public function crearPacientePrueba(Request $request)
    {
        $paciente = Paciente::create([
            'nombre' => $request->input('nombre', 'Paciente de Prueba'),
            'apellidos' => $request->input('apellidos', 'Prueba'),
            'email' => $request->input('email', 'paciente_prueba@example.com'),
            'rut' => $request->input('rut', '11.111.111-1'),
            'activo' => false,
            'cuenta_activada' => false
        ]);

        return response()->json($paciente);
    }

    /**
     * Generar token de activación para pruebas
     */
    public function generarTokenActivacion(Request $request)
    {
        $paciente = Paciente::where('email', $request->input('email'))->first();

        if (!$paciente) {
            return response()->json(['error' => 'Paciente no encontrado'], 404);
        }

        $token = $this->activacionService->generarTokenActivacion($paciente);

        return response()->json([
            'token' => $token,
            'paciente_id' => $paciente->id
        ]);
    }

    /**
     * Generar token de activación expirado para pruebas
     */
    public function generarTokenActivacionExpirado(Request $request)
    {
        $paciente = Paciente::where('email', $request->input('email'))->first();

        if (!$paciente) {
            return response()->json(['error' => 'Paciente no encontrado'], 404);
        }

        $token = Str::random(64);
        $paciente->update([
            'token_activacion' => Hash::make($token),
            'token_activacion_expira' => now()->subHours(25)
        ]);

        return response()->json([
            'token' => $token,
            'paciente_id' => $paciente->id
        ]);
    }

    /**
     * Verificar correo electrónico para pruebas
     */
    public function verificarCorreo(Request $request)
    {
        // Simular verificación de correo para pruebas
        // En un escenario real, esto sería más complejo
        $correos = [
            'paciente_prueba@example.com' => [
                'subject' => 'Activación de Cuenta',
                'body' => 'Su token de activación es: TOKEN_PRUEBA'
            ]
        ];

        $to = $request->input('to');
        $subject = $request->input('subject');
        $contains = $request->input('contains');

        $correo = $correos[$to] ?? null;

        if ($correo && 
            ($subject === null || strpos($correo['subject'], $subject) !== false) &&
            ($contains === null || strpos($correo['body'], $contains) !== false)
        ) {
            return response()->json(['exists' => true]);
        }

        return response()->json(['exists' => false]);
    }
}
