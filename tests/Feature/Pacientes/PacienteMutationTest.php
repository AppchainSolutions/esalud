<?php

namespace Tests\Feature\Pacientes;

use App\Models\Paciente;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase;
use Illuminate\Support\Facades\Validator;
use Tests\CreatesApplication;

class PacienteMutationTest extends TestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    // Datos base para pruebas
    private $baseData;

    public function setUp(): void
    {
        parent::setUp();
        
        $this->baseData = [
            'nombre' => 'Juan',
            'apellidos' => 'Pérez González',
            'rut' => '12.345.678-9',
            'email' => 'juan.perez@ejemplo.com',
            'fecha_nacimiento' => null,
            'genero' => 1,
            'estado_civil' => 1,
            'nacionalidad' => 1,
            'activo' => true,
            'cuenta_activada' => false,
            'protocolo_minsal' => false,
            'donante' => false
        ];

        // Generar fecha de nacimiento dinámica
        $this->baseData['fecha_nacimiento'] = now()->subYears(30)->format('Y-m-d');
    }

    public function test_puede_crear_un_paciente_con_datos_validos()
    {
        // Arrange
        $pacienteData = $this->baseData;

        // Act
        $paciente = Paciente::create($pacienteData);

        // Assert
        $this->assertInstanceOf(Paciente::class, $paciente);
        $this->assertEquals('Juan', $paciente->nombre);
        $this->assertEquals('12.345.678-9', $paciente->rut);
        $this->assertFalse($paciente->cuenta_activada);
    }

    public function test_no_puede_crear_paciente_con_rut_invalido()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['rut'] = '12.345.678-0'; // RUT inválido

        // Act
        $validator = Validator::make($pacienteData, [
            'rut' => ['required', 'cl_rut']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_edad_menor_a_18_anos()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['fecha_nacimiento'] = now()->subYears(17)->format('Y-m-d'); // Menor de 18

        // Act
        $validator = Validator::make($pacienteData, [
            'fecha_nacimiento' => ['required', 'date', 'before_or_equal:' . now()->subYears(18)->format('Y-m-d')]
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_email_invalido()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['email'] = 'email-invalido'; // Email sin formato correcto

        // Act
        $validator = Validator::make($pacienteData, [
            'email' => ['required', 'email']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_nombre_vacio()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['nombre'] = '';

        // Act
        $validator = Validator::make($pacienteData, [
            'nombre' => ['required', 'min:2']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_apellidos_vacios()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['apellidos'] = '';

        // Act
        $validator = Validator::make($pacienteData, [
            'apellidos' => ['required', 'min:2']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_fecha_nacimiento_futura()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['fecha_nacimiento'] = now()->addYears(1)->format('Y-m-d');

        // Act
        $validator = Validator::make($pacienteData, [
            'fecha_nacimiento' => ['required', 'date', 'before_or_equal:today']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_genero_invalido()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['genero'] = 999; // ID de género inexistente

        // Act
        $validator = Validator::make($pacienteData, [
            'genero' => ['required', 'exists:genero,id']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_crear_paciente_con_estado_civil_invalido()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['estado_civil'] = 999; // ID de estado civil inexistente

        // Act
        $validator = Validator::make($pacienteData, [
            'estado_civil' => ['required', 'exists:estado_civil,id']
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_activar_cuenta_con_token_invalido()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $paciente = Paciente::create($pacienteData);

        // Act
        $validator = Validator::make([
            'token_activacion' => 'token-invalido'
        ], [
            'token_activacion' => [
                'required', 
                function ($attribute, $value, $fail) use ($paciente) {
                    if (!$paciente->verificarTokenActivacion($value)) {
                        $fail('El token de activación no es válido.');
                    }
                }
            ]
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_activar_cuenta_con_token_expirado()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $paciente = Paciente::create($pacienteData);

        // Simular token expirado
        $paciente->token_activacion_expira = now()->subHours(25);
        $paciente->save();

        // Act
        $validator = Validator::make([
            'token_activacion_expira' => $paciente->token_activacion_expira
        ], [
            'token_activacion_expira' => [
                'required', 
                'date', 
                function ($attribute, $value, $fail) {
                    if (now()->greaterThan($value)) {
                        $fail('El token de activación ha expirado.');
                    }
                }
            ]
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_activar_cuenta_con_contrasena_debil()
    {
        // Arrange
        $contrasenaDebil = 'password123'; // Contraseña que no cumple requisitos

        // Act
        $validator = Validator::make([
            'password' => $contrasenaDebil
        ], [
            'password' => [
                'required',
                'min:12',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'
            ]
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_activar_cuenta_con_email_diferente()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $paciente = Paciente::create($pacienteData);

        // Act
        $validator = Validator::make([
            'email' => 'otro.email@ejemplo.com'
        ], [
            'email' => [
                'required', 
                'email', 
                function ($attribute, $value, $fail) use ($paciente) {
                    if ($value !== $paciente->email) {
                        $fail('El correo electrónico no coincide con el registrado.');
                    }
                }
            ]
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }

    public function test_no_puede_activar_cuenta_ya_activada()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['cuenta_activada'] = true;
        $paciente = Paciente::create($pacienteData);

        // Act
        $validator = Validator::make([
            'cuenta_activada' => $paciente->cuenta_activada
        ], [
            'cuenta_activada' => [
                'required', 
                function ($attribute, $value, $fail) {
                    if ($value === true) {
                        $fail('La cuenta ya está activada.');
                    }
                }
            ]
        ]);

        // Assert
        $this->assertTrue($validator->fails());
    }
}
