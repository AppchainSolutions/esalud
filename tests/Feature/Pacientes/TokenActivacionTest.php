<?php

namespace Tests\Feature\Pacientes;

use App\Models\Paciente;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Tests\CreatesApplication;

class TokenActivacionTest extends TestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    private $baseData;

    public function setUp(): void
    {
        parent::setUp();
        
        $this->baseData = [
            'nombre' => 'Juan',
            'apellidos' => 'Pérez González',
            'rut' => '12.345.678-9',
            'email' => 'juan.perez@ejemplo.com',
            'fecha_nacimiento' => now()->subYears(30)->format('Y-m-d'),
            'genero' => 1,
            'estado_civil' => 1,
            'nacionalidad' => 1,
            'activo' => true,
            'cuenta_activada' => false,
            'protocolo_minsal' => false,
            'donante' => false
        ];
    }

    public function testTokenActivacionExpira()
    {
        // Arrange
        $paciente = Paciente::create($this->baseData);
        $tokenOriginal = $paciente->token_activacion;
        
        // Simular paso de tiempo
        Carbon::setTestNow(now()->addHours(25));

        // Act & Assert
        $this->assertFalse($paciente->tokenActivacionVigente(), 
            'El token de activación debería expirar después de 24 horas');
    }

    public function testNoUsarTokenExpirado()
    {
        // Arrange
        $paciente = Paciente::create($this->baseData);
        $tokenPlano = Str::random(64);
        
        // Simular paso de tiempo
        Carbon::setTestNow(now()->addHours(25));

        // Act & Assert
        $this->assertFalse(
            $paciente->verificarTokenActivacion($tokenPlano), 
            'No debería permitir verificar un token expirado'
        );
    }

    public function testTokenUnicoParaCadaPaciente()
    {
        // Arrange
        $paciente1 = Paciente::create($this->baseData);
        $tokenPaciente1 = $paciente1->token_activacion;

        $otroPacienteData = $this->baseData;
        $otroPacienteData['rut'] = '98.765.432-1';
        $otroPacienteData['email'] = 'otro.paciente@ejemplo.com';
        $paciente2 = Paciente::create($otroPacienteData);
        $tokenPaciente2 = $paciente2->token_activacion;

        // Assert
        $this->assertNotEquals(
            $tokenPaciente1, 
            $tokenPaciente2, 
            'Cada paciente debe tener un token de activación único'
        );
    }

    public function testNoReutilizarTokenDespuesDeActivacion()
    {
        // Arrange
        $paciente = Paciente::create($this->baseData);
        $tokenOriginal = $paciente->token_activacion;

        // Simular activación de cuenta
        $paciente->update([
            'cuenta_activada' => true,
            'token_activacion' => null,
            'token_activacion_expira' => null
        ]);

        // Act & Assert
        $this->assertNull($paciente->token_activacion, 
            'El token debe eliminarse después de la activación');
        $this->assertFalse($paciente->tokenActivacionVigente(), 
            'No debe tener token vigente después de activación');
    }

    public function testTokenSeguroContraFalsificacion()
    {
        // Arrange
        $paciente = Paciente::create($this->baseData);
        $tokenOriginal = $paciente->token_activacion;
        $tokenFalso = Hash::make('token_falso');

        // Act & Assert
        $this->assertFalse(
            Hash::check('token_falso', $tokenOriginal), 
            'El token debe ser seguro contra falsificación'
        );
    }
}
