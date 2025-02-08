<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase;
use App\Models\Paciente;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Tests\CreatesApplication;

class CreacionPacienteTest extends TestCase
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

    public function testCrearPacienteConDatosMinimos()
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

        // Verificar en base de datos
        $this->assertDatabaseHas('paciente', [
            'rut' => '12.345.678-9',
            'email' => 'juan.perez@ejemplo.com',
            'cuenta_activada' => false
        ]);
    }

    public function testNoCrearPacienteConRUTDuplicado()
    {
        // Arrange
        $primerPaciente = Paciente::create($this->baseData);

        // Act & Assert
        $this->expectException(\Illuminate\Database\QueryException::class);
        Paciente::create($this->baseData);
    }

    public function testValidacionDeCamposObligatorios()
    {
        // Arrange
        $camposObligatorios = [
            'nombre', 'apellidos', 'rut', 'email', 
            'fecha_nacimiento', 'genero', 'estado_civil', 
            'nacionalidad'
        ];

        // Act & Assert
        foreach ($camposObligatorios as $campo) {
            $datosIncompletos = $this->baseData;
            unset($datosIncompletos[$campo]);

            $validator = Validator::make(
                $datosIncompletos,
                [
                    'nombre' => 'required',
                    'apellidos' => 'required',
                    'rut' => 'required|unique:paciente',
                    'email' => 'required|email',
                    'fecha_nacimiento' => 'required|date',
                    'genero' => 'required|integer',
                    'estado_civil' => 'required|integer',
                    'nacionalidad' => 'required|integer'
                ]
            );

            $this->assertTrue($validator->fails(), "Falló validación sin $campo");
        }
    }

    public function testGenerarTokenDeActivacionAlCrearPaciente()
    {
        // Arrange
        $pacienteData = $this->baseData;
        $pacienteData['cuenta_activada'] = false;

        // Act
        $paciente = Paciente::create($pacienteData);

        // Assert
        $this->assertNotNull($paciente->token_activacion);
        $this->assertNotNull($paciente->token_activacion_expira);
    }

    public function testRestriccionesDeEmailUnico()
    {
        // Arrange
        $primerPaciente = Paciente::create($this->baseData);
        $segundoPacienteData = $this->baseData;
        $segundoPacienteData['rut'] = '98.765.432-1'; // RUT diferente

        // Act & Assert
        $this->expectException(\Illuminate\Database\QueryException::class);
        Paciente::create($segundoPacienteData);
    }
}
