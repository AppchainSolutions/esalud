<?php

namespace Tests\Feature\Pacientes\Busqueda;

use App\Models\Paciente;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase;
use Illuminate\Support\Facades\DB;
use Tests\CreatesApplication;

class BusquedaPacienteTest extends TestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    private function crearPacientesParaPruebas()
    {
        // Crear pacientes con diferentes características para pruebas de búsqueda
        Paciente::create([
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
            'empresa' => 1,
            'area' => 1,
            'cargo' => 1
        ]);

        Paciente::create([
            'nombre' => 'María',
            'apellidos' => 'Rodríguez Sánchez',
            'rut' => '98.765.432-1',
            'email' => 'maria.rodriguez@ejemplo.com',
            'fecha_nacimiento' => now()->subYears(35)->format('Y-m-d'),
            'genero' => 2,
            'estado_civil' => 2,
            'nacionalidad' => 1,
            'activo' => true,
            'cuenta_activada' => true,
            'empresa' => 2,
            'area' => 2,
            'cargo' => 2
        ]);

        Paciente::create([
            'nombre' => 'Carlos',
            'apellidos' => 'Martínez López',
            'rut' => '45.678.901-2',
            'email' => 'carlos.martinez@ejemplo.com',
            'fecha_nacimiento' => now()->subYears(40)->format('Y-m-d'),
            'genero' => 1,
            'estado_civil' => 3,
            'nacionalidad' => 2,
            'activo' => false,
            'cuenta_activada' => false,
            'empresa' => 3,
            'area' => 3,
            'cargo' => 3
        ]);
    }

    private function crearPacientesParaPruebasExposicion()
    {
        Paciente::create([
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
            'empresa' => 1,
            'area' => 1,
            'cargo' => 1,
            'exposicion' => json_encode(['Ruido', 'Polvo'])
        ]);

        Paciente::create([
            'nombre' => 'María',
            'apellidos' => 'Rodríguez Sánchez',
            'rut' => '98.765.432-1',
            'email' => 'maria.rodriguez@ejemplo.com',
            'fecha_nacimiento' => now()->subYears(35)->format('Y-m-d'),
            'genero' => 2,
            'estado_civil' => 2,
            'nacionalidad' => 1,
            'activo' => true,
            'cuenta_activada' => true,
            'empresa' => 2,
            'area' => 2,
            'cargo' => 2,
            'exposicion' => json_encode(['Humos', 'Químicos'])
        ]);

        Paciente::create([
            'nombre' => 'Carlos',
            'apellidos' => 'Martínez López',
            'rut' => '45.678.901-2',
            'email' => 'carlos.martinez@ejemplo.com',
            'fecha_nacimiento' => now()->subYears(40)->format('Y-m-d'),
            'genero' => 1,
            'estado_civil' => 3,
            'nacionalidad' => 2,
            'activo' => false,
            'cuenta_activada' => false,
            'empresa' => 3,
            'area' => 3,
            'cargo' => 3,
            'exposicion' => json_encode(['Ruido', 'Vibraciones'])
        ]);
    }

    public function test_buscar_paciente_por_rut()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::where('rut', '12.345.678-9')->first();

        $this->assertNotNull($paciente);
        $this->assertEquals('Juan', $paciente->nombre);
        $this->assertEquals('Pérez González', $paciente->apellidos);
    }

    public function test_buscar_paciente_por_nombre_completo()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::where('nombre', 'LIKE', '%Juan%')
            ->orWhere('apellidos', 'LIKE', '%Pérez%')
            ->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_por_genero()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::where('genero', 1)->get();

        $this->assertCount(2, $pacientes);
        $this->assertTrue($pacientes->contains('nombre', 'Juan'));
        $this->assertTrue($pacientes->contains('nombre', 'Carlos'));
    }

    public function test_buscar_pacientes_por_estado_activacion()
    {
        $this->crearPacientesParaPruebas();

        $pacientesActivos = Paciente::where('cuenta_activada', true)->get();
        $pacientesInactivos = Paciente::where('cuenta_activada', false)->get();

        $this->assertCount(1, $pacientesActivos);
        $this->assertEquals('María', $pacientesActivos->first()->nombre);

        $this->assertCount(2, $pacientesInactivos);
    }

    public function test_buscar_pacientes_por_rango_edad()
    {
        $this->crearPacientesParaPruebas();

        $edadMinima = now()->subYears(35);
        $edadMaxima = now()->subYears(25);

        $pacientes = Paciente::whereBetween('fecha_nacimiento', [$edadMinima, $edadMaxima])->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_por_empresa()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::where('empresa', 1)->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_por_area()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::where('area', 1)->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_con_filtros_multiples()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::where('genero', 1)
            ->where('cuenta_activada', false)
            ->where('activo', true)
            ->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_busqueda_pacientes_paginacion()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::paginate(2);

        $this->assertCount(2, $pacientes);
        $this->assertEquals(3, $pacientes->total());
    }

    public function test_busqueda_pacientes_ordenamiento()
    {
        $this->crearPacientesParaPruebas();

        $pacientes = Paciente::orderBy('nombre', 'asc')->get();

        $this->assertEquals('Carlos', $pacientes->first()->nombre);
        $this->assertEquals('María', $pacientes->last()->nombre);
    }

    public function test_buscar_pacientes_por_exposicion_unica()
    {
        $this->crearPacientesParaPruebasExposicion();

        $pacientes = Paciente::whereJsonContains('exposicion', 'Ruido')->get();

        $this->assertCount(2, $pacientes);
        $this->assertTrue($pacientes->contains('nombre', 'Juan'));
        $this->assertTrue($pacientes->contains('nombre', 'Carlos'));
    }

    public function test_buscar_pacientes_por_multiples_exposiciones()
    {
        $this->crearPacientesParaPruebasExposicion();

        $pacientes = Paciente::whereJsonContains('exposicion', 'Ruido')
            ->whereJsonContains('exposicion', 'Polvo')
            ->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_con_cualquiera_de_varias_exposiciones()
    {
        $this->crearPacientesParaPruebasExposicion();

        $exposicionesBuscadas = ['Humos', 'Químicos'];
        
        $pacientes = Paciente::where(function($query) use ($exposicionesBuscadas) {
            foreach ($exposicionesBuscadas as $exposicion) {
                $query->orWhereJsonContains('exposicion', $exposicion);
            }
        })->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('María', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_con_exposiciones_y_filtros_adicionales()
    {
        $this->crearPacientesParaPruebasExposicion();

        $pacientes = Paciente::whereJsonContains('exposicion', 'Ruido')
            ->where('genero', 1)
            ->where('activo', true)
            ->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('Juan', $pacientes->first()->nombre);
    }

    public function test_buscar_pacientes_sin_exposiciones_especificas()
    {
        $this->crearPacientesParaPruebasExposicion();

        $pacientes = Paciente::whereJsonDoesntContain('exposicion', 'Ruido')->get();

        $this->assertCount(1, $pacientes);
        $this->assertEquals('María', $pacientes->first()->nombre);
    }
}
