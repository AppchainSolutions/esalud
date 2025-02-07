<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Services\PacienteActivacionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PruebasController extends Controller
{
    protected $pacienteActivacionService;

    public function __construct(PacienteActivacionService $pacienteActivacionService)
    {
        $this->pacienteActivacionService = $pacienteActivacionService;
    }

    /**
     * Resetear base de datos para pruebas
     */
    public function resetDatabase()
    {
        if (app()->environment(['testing', 'local'])) {
            Artisan::call('migrate:fresh');
            Artisan::call('db:seed', ['--class' => 'PruebasPacienteSeeder']);
            
            return response()->json([
                'status' => 'success', 
                'message' => 'Base de datos reseteada'
            ]);
        }

        return response()->json([
            'status' => 'error', 
            'message' => 'Acción no permitida en este entorno'
        ], 403);
    }

    /**
     * Crear paciente de prueba
     */
    public function crearPaciente(Request $request)
    {
        $paciente = Paciente::create([
            'nombre' => $request->input('nombre', 'Paciente'),
            'apellidos' => $request->input('apellidos', 'Prueba'),
            'email' => $request->input('email', 'paciente_prueba@example.com'),
            'estado' => 'pendiente_activacion'
        ]);

        return response()->json([
            'paciente_id' => $paciente->id,
            'email' => $paciente->email
        ]);
    }

    /**
     * Generar token de activación para pruebas
     */
    public function generarToken(Request $request)
    {
        $email = $request->input('email');
        $paciente = Paciente::where('email', $email)->firstOrFail();

        $token = $this->pacienteActivacionService->generarTokenActivacion($paciente);

        return response()->json([
            'token' => $token,
            'email' => $paciente->email
        ]);
    }

    /**
     * Generar token de activación expirado para pruebas
     */
    public function generarTokenExpirado(Request $request)
    {
        $email = $request->input('email');
        $paciente = Paciente::where('email', $email)->firstOrFail();

        // Generar token con fecha de expiración en el pasado
        $paciente->token_activacion = Str::random(60);
        $paciente->token_activacion_expira = now()->subHours(2);
        $paciente->save();

        return response()->json([
            'token' => $paciente->token_activacion,
            'email' => $paciente->email
        ]);
    }

    /**
     * Ejecutar un seeder específico
     */
    public function ejecutarSeeder($nombreSeeder)
    {
        if (app()->environment(['testing', 'local'])) {
            try {
                $seederClass = "Database\\Seeders\\{$nombreSeeder}";
                
                if (!class_exists($seederClass)) {
                    return response()->json([
                        'status' => 'error', 
                        'message' => "Seeder {$nombreSeeder} no encontrado"
                    ], 404);
                }

                \Illuminate\Support\Facades\Artisan::call('db:seed', [
                    '--class' => $seederClass,
                    '--force' => true
                ]);
                
                return response()->json([
                    'status' => 'success', 
                    'message' => "Seeder {$nombreSeeder} ejecutado correctamente"
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'error', 
                    'message' => "Error al ejecutar seeder: " . $e->getMessage()
                ], 500);
            }
        }

        return response()->json([
            'status' => 'error', 
            'message' => 'Acción no permitida en este entorno'
        ], 403);
    }
}
