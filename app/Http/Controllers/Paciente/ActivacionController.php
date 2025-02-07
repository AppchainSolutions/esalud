<?php

namespace App\Http\Controllers\Paciente;

use App\Http\Controllers\Controller;
use App\Models\Paciente;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ActivacionController extends Controller
{
    public function mostrarFormularioActivacion($token)
    {
        // Buscar paciente con el token de activación
        $paciente = Paciente::where('token_activacion', $token)
            ->whereNull('user_id')
            ->firstOrFail();

        return Inertia::render('Paciente/Activacion', [
            'token' => $token,
            'paciente' => $paciente
        ]);
    }

    public function activar($token)
    {
        // Buscar paciente con el token
        $paciente = Paciente::where('token_activacion', $token)
            ->whereNull('user_id')
            ->firstOrFail();

        // Mostrar formulario de activación sin autenticación
        return Inertia::render('Paciente/Activacion', [
            'token' => $token,
            'paciente' => $paciente,
            'mostrarFormulario' => true
        ]);
    }

    public function completarActivacion(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'token' => 'required|exists:paciente,token_activacion',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Buscar paciente con el token
        $paciente = Paciente::where('token_activacion', $request->token)
            ->whereNull('user_id')
            ->firstOrFail();

        // Crear usuario
        $user = User::create([
            'name' => $paciente->nombre . ' ' . $paciente->apellidos,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol' => 'paciente',
            'activo' => true
        ]);

        // Vincular usuario con paciente
        $paciente->update([
            'user_id' => $user->id,
            'token_activacion' => null,  // Limpiar token de activación
            'cuenta_activada' => true
        ]);

        // Iniciar sesión
        Auth::login($user);

        // Redirigir al dashboard
        return redirect()->route('paciente.dashboard')
            ->with('success', 'Cuenta activada exitosamente');
    }

    public function generarTokenActivacion(Paciente $paciente)
    {
        // Generar y enviar token de activación
        $token = $paciente->generarTokenActivacion();

        // Enviar correo con enlace de activación
        // Implementar lógica de envío de correo aquí
        // Puedes usar Mailable o un servicio de notificaciones

        return response()->json([
            'mensaje' => 'Token de activación generado',
            'enlace_activacion' => route('paciente.activar', $token)
        ]);
    }
}
