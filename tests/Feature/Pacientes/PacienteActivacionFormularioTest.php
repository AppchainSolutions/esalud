<?php

namespace Tests\Feature\Pacientes;

use App\Models\Paciente;
use App\Services\PacienteActivacionService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Tests\TestCase;
use Illuminate\Support\Facades\URL;

class PacienteActivacionFormularioTest extends TestCase
{
    use RefreshDatabase;

    private PacienteActivacionService $activacionService;
    protected $paciente;
    protected $activationUrl;
    protected $tokenPlano;

    protected function setUp(): void
    {
        parent::setUp();

        // Crear paciente para pruebas de activación
        $this->paciente = Paciente::factory()->create([
            'cuenta_activada' => false,
            'token_activacion' => null,
            'token_activacion_expira' => null
        ]);

        // Inyectar servicio de activación
        $this->activacionService = app(PacienteActivacionService::class);

        // Generar token de activación
        $this->tokenPlano = Str::random(64);
        $this->paciente->update([
            'token_activacion' => $this->tokenPlano,
            'token_activacion_expira' => now()->addHours(24)
        ]);

        // Generar URL firmada para activación
        $this->activationUrl = URL::signedRoute('paciente.activacion.completar', [
            'token' => $this->tokenPlano
        ], now()->addHours(24));
    }

    public function testPermiteActivarCuentaMedianteFormulario()
    {
        // Datos de usuario para activación
        $datosUsuario = [
            'token' => $this->tokenPlano,
            'email' => $this->paciente->email,
            'password' => 'Segura123!@#456789', 
            'password_confirmation' => 'Segura123!@#456789'
        ];

        // Simular envío de formulario de activación
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertRedirect('/')
            ->assertSessionHas('status', 'Cuenta activada exitosamente');

        // Recargar paciente
        $this->paciente->refresh();

        // Verificar que la cuenta está activada
        $this->assertTrue($this->paciente->cuenta_activada);
        $this->assertNotNull($this->paciente->user_id);
    }

    public function testRechazaActivacionConTokenExpirado()
    {
        // Establecer token como expirado
        $this->paciente->update([
            'token_activacion_expira' => now()->subDay()
        ]);

        // Datos de usuario para activación
        $datosUsuario = [
            'token' => $this->tokenPlano,
            'email' => $this->paciente->email,
            'password' => 'Segura123!@#456789', 
            'password_confirmation' => 'Segura123!@#456789'
        ];

        // Simular envío de formulario de activación con token expirado
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertRedirect('/')
            ->assertSessionHas('error', 'Token de activación inválido o expirado');

        // Verificar que el paciente no tiene usuario
        $this->paciente->refresh();
        $this->assertFalse($this->paciente->cuenta_activada);
        $this->assertNull($this->paciente->user_id);
    }

    public function testRechazaActivacionConContrasenaInvalida()
    {
        // Datos de usuario con contraseña inválida
        $datosUsuario = [
            'token' => $this->tokenPlano,
            'email' => $this->paciente->email,
            'password' => 'corta', // Contraseña demasiado corta
            'password_confirmation' => 'corta'
        ];

        // Simular envío de formulario de activación
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertSessionHasErrors([
            'password' => 'La contraseña debe tener al menos 12 caracteres.'
        ]);

        // Verificar que el paciente no tiene usuario
        $this->paciente->refresh();
        $this->assertFalse($this->paciente->cuenta_activada);
        $this->assertNull($this->paciente->user_id);
    }

    public function testRechazaActivacionConEmailInvalido()
    {
        // Datos de usuario con email inválido
        $datosUsuario = [
            'token' => $this->tokenPlano,
            'email' => 'emailinvalido@ejemplo.com',
            'password' => 'Segura123!@#456789',
            'password_confirmation' => 'Segura123!@#456789'
        ];

        // Simular envío de formulario de activación
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertRedirect('/')
            ->assertSessionHas('error', 'Correo electrónico no válido para este token de activación');

        // Verificar que el paciente no tiene usuario
        $this->paciente->refresh();
        $this->assertFalse($this->paciente->cuenta_activada);
        $this->assertNull($this->paciente->user_id);
    }

    public function testRechazaActivacionConContrasenasSinCoincidencia()
    {
        // Datos de usuario con contraseñas no coincidentes
        $datosUsuario = [
            'token' => $this->tokenPlano,
            'email' => $this->paciente->email,
            'password' => 'Segura123!@#456789',
            'password_confirmation' => 'ContrasenaDistinta123!@#456789'
        ];

        // Simular envío de formulario de activación
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertSessionHasErrors([
            'password' => 'Las contraseñas no coinciden.'
        ]);

        // Verificar que el paciente no tiene usuario
        $this->paciente->refresh();
        $this->assertFalse($this->paciente->cuenta_activada);
        $this->assertNull($this->paciente->user_id);
    }

    public function testRechazaActivacionConTokenInvalido()
    {
        // Datos de usuario con token inválido
        $datosUsuario = [
            'token' => 'TokenInvalido123456',
            'email' => $this->paciente->email,
            'password' => 'Segura123!@#456789',
            'password_confirmation' => 'Segura123!@#456789'
        ];

        // Simular envío de formulario de activación
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertRedirect('/')
            ->assertSessionHas('error', 'Token de activación inválido o expirado');

        // Verificar que el paciente no tiene usuario
        $this->paciente->refresh();
        $this->assertFalse($this->paciente->cuenta_activada);
        $this->assertNull($this->paciente->user_id);
    }

    public function testRechazaActivacionParaPacienteYaActivado()
    {
        // Primero activamos la cuenta
        $this->post($this->activationUrl, [
            'token' => $this->tokenPlano,
            'email' => $this->paciente->email,
            'password' => 'Segura123!@#456789',
            'password_confirmation' => 'Segura123!@#456789'
        ]);

        // Intentamos activar nuevamente
        $datosUsuario = [
            'token' => $this->tokenPlano,
            'email' => $this->paciente->email,
            'password' => 'NuevaContrasena123!@#456789',
            'password_confirmation' => 'NuevaContrasena123!@#456789'
        ];

        // Simular envío de formulario de activación
        $response = $this->post($this->activationUrl, $datosUsuario);

        // Verificaciones
        $response->assertRedirect('/')
            ->assertSessionHas('error');

        $errorMessage = session('error');
        $this->assertTrue(
            $errorMessage === 'La cuenta ya ha sido activada' || 
            $errorMessage === 'Token de activación inválido o expirado',
            "Unexpected error message: $errorMessage"
        );

        // Verificar que no se ha modificado el usuario existente
        $this->paciente->refresh();
        $this->assertTrue($this->paciente->cuenta_activada);
        $this->assertNotNull($this->paciente->user_id);
    }
}
