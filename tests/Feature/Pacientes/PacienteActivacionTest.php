<?php

use Illuminate\Support\Facades\Hash;
use App\Events\PacienteActivado;
use App\Models\Paciente;
use App\Models\RegistroActividad;
use App\Models\User;
use App\Services\PacienteActivacionService;
use App\Exceptions\TokenActivacionInvalidoException;
use Illuminate\Support\Facades\Artisan;
use Database\Seeders\PacienteActivacionSeeder;

uses(Tests\TestCase::class);
uses()->group('paciente-activacion');

beforeEach(function () {
    $this->artisan('db:seed', ['--class' => PacienteActivacionSeeder::class]);
});

it('genera un token de activación para un paciente', function () {
    $paciente = Paciente::where('email', 'omar.ahumadag@gmail.com')->first();
    $activacionService = new PacienteActivacionService();

    $token = $activacionService->generarTokenActivacion($paciente);

    expect($token)->not()->toBeNull()
        ->and(strlen($token))->toBe(64);
    
    $paciente->refresh();
    expect($paciente->token_activacion)->not()->toBeNull()
        ->and($paciente->token_activacion_expira)->not()->toBeNull();
});

it('envía un correo de activación', function () {
    $paciente = Paciente::where('email', 'omar.ahumadag@gmail.com')->first();
    $activacionService = new PacienteActivacionService();

    $tokenPlano = $activacionService->generarTokenActivacion($paciente);
    $activationUrl = route('paciente.activar', ['token' => $tokenPlano]);

    $resultado = $activacionService->enviarCorreoActivacion(
        $paciente, 
        $tokenPlano, 
        $activationUrl
    );

    expect($resultado)->toBeTrue();
    
    $paciente->refresh();
    expect($paciente->token_activacion)->not()->toBeNull();
});

it('activa una cuenta de paciente', function () {
    $paciente = Paciente::where('email', 'omar.ahumadag@gmail.com')->first();
    $activacionService = new PacienteActivacionService();

    $tokenPlano = $activacionService->generarTokenActivacion($paciente);

    $datosUsuario = [
        'password' => 'Paciente123!Seguro', // Contraseña que cumple con requisitos
        'password_confirmation' => 'Paciente123!Seguro',
        'email' => $paciente->email,
        'rut' => $paciente->rut,
        'name' => $paciente->nombre,
        'lastname' => $paciente->apellidos,
        'isAdmin' => 'false',
        'rol' => 'paciente',
    ];

    $resultado = $activacionService->activarCuenta($tokenPlano, $datosUsuario);

    expect($resultado)->toBeInstanceOf(User::class);
    
    $paciente->refresh();

    expect($paciente->user)->not()->toBeNull();
    expect($paciente->cuenta_activada)->toBeTrue('La cuenta del paciente no está activada');
    expect($paciente->token_activacion)->toBeNull();
    expect($paciente->token_activacion_expira)->toBeNull();
});

it('lanza una excepción para token de activación expirado', function () {
    $tokenPlano = 'token_antiguo';
    $tokenHash = Hash::make($tokenPlano);

    $paciente = Paciente::factory()->create([
        'token_activacion' => $tokenHash,
        'token_activacion_expira' => now()->subHours(25)
    ]);

    $activacionService = new PacienteActivacionService();

    try {
        $activacionService->validarToken($tokenPlano);
        $this->fail('No se lanzó la excepción esperada');
    } catch (TokenActivacionInvalidoException $e) {
        $this->assertEquals('Token de activación inválido o expirado', $e->getMessage());
    }
});

it('registra la actividad de activación de cuenta', function () {
    $paciente = Paciente::where('email', 'omar.ahumadag@gmail.com')->first();
    $activacionService = new PacienteActivacionService();

    $tokenPlano = $activacionService->generarTokenActivacion($paciente);

    $datosUsuario = [
        'password' => 'Password123!Seguro', // Contraseña que cumple con requisitos
        'password_confirmation' => 'Password123!Seguro',
        'email' => $paciente->email,
        'rut' => $paciente->rut,
        'name' => $paciente->name,
        'lastname' => $paciente->lastname,
        'isAdmin' => 'false',
        'rol' => 'paciente',
    ];

    $usuario = $activacionService->activarCuenta($tokenPlano, $datosUsuario);

    $registroActividad = RegistroActividad::where('paciente_id', $paciente->id)
        ->where('tipo_evento', 'activacion_cuenta')
        ->first();

    expect($registroActividad)->not()->toBeNull()
        ->and($registroActividad->usuario_id)->toBe($usuario->id)
        ->and($registroActividad->paciente_id)->toBe($paciente->id);
});
