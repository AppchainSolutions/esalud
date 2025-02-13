<?php

namespace Tests\Feature\Pacientes\Busqueda;

use App\Models\Paciente;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase;
use Tests\CreatesApplication;

class BusquedaPacienteTest extends TestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    private function crearPacientesParaPruebas()
    {
        // Crear paciente con diferentes características para pruebas de búsqueda
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
            'exposicion' => json_encode(['Ruido', 'Polvo']),
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
            'exposicion' => json_encode(['Humos', 'Químicos']),
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
            'exposicion' => json_encode(['Ruido', 'Vibraciones']),
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

        $paciente = Paciente::where('nombre', 'LIKE', '%Juan%')
            ->orWhere('apellidos', 'LIKE', '%Pérez%')
            ->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_por_genero()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::where('genero', 1)->get();

        $this->assertCount(2, $paciente);
        $this->assertTrue($paciente->contains('nombre', 'Juan'));
        $this->assertTrue($paciente->contains('nombre', 'Carlos'));
    }

    public function test_buscar_paciente_por_estado_activacion()
    {
        $this->crearPacientesParaPruebas();

        $pacienteActivos = Paciente::where('cuenta_activada', true)->get();
        $pacienteInactivos = Paciente::where('cuenta_activada', false)->get();

        $this->assertCount(1, $pacienteActivos);
        $this->assertEquals('María', $pacienteActivos->first()->nombre);

        $this->assertCount(2, $pacienteInactivos);
    }

    public function test_buscar_paciente_por_rango_edad()
    {
        $this->crearPacientesParaPruebas();

        $edadMinima = now()->subYears(35);
        $edadMaxima = now()->subYears(25);

        $paciente = Paciente::whereBetween('fecha_nacimiento', [$edadMinima, $edadMaxima])->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_por_empresa()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::where('empresa', 1)->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_por_area()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::where('area', 1)->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_con_filtros_multiples()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::where('genero', 1)
            ->where('cuenta_activada', false)
            ->where('activo', true)
            ->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_busqueda_paciente_paginacion()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::paginate(2);

        $this->assertCount(2, $paciente);
        $this->assertEquals(3, $paciente->total());
    }

    public function test_busqueda_paciente_ordenamiento()
    {
        $this->crearPacientesParaPruebas();

        $paciente = Paciente::orderBy('nombre', 'asc')->get();

        $this->assertEquals('Carlos', $paciente->first()->nombre);
        $this->assertEquals('María', $paciente->last()->nombre);
    }

    public function test_buscar_paciente_por_exposicion_unica()
    {
        $this->crearPacientesParaPruebasExposicion();

        $paciente = Paciente::whereJsonContains('exposicion', 'Ruido')->get();

        $this->assertCount(2, $paciente);
        $this->assertTrue($paciente->contains('nombre', 'Juan'));
        $this->assertTrue($paciente->contains('nombre', 'Carlos'));
    }

    public function test_buscar_paciente_por_multiples_exposiciones()
    {
        $this->crearPacientesParaPruebasExposicion();

        $paciente = Paciente::whereJsonContains('exposicion', 'Ruido')
            ->whereJsonContains('exposicion', 'Polvo')
            ->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_con_cualquiera_de_varias_exposiciones()
    {
        $this->crearPacientesParaPruebasExposicion();

        $exposicionesBuscadas = ['Humos', 'Químicos'];

        $paciente = Paciente::where(function ($query) use ($exposicionesBuscadas) {
            foreach ($exposicionesBuscadas as $exposicion) {
                $query->orWhereJsonContains('exposicion', $exposicion);
            }
        })->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('María', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_con_exposiciones_y_filtros_adicionales()
    {
        $this->crearPacientesParaPruebasExposicion();

        $paciente = Paciente::whereJsonContains('exposicion', 'Ruido')
            ->where('genero', 1)
            ->where('activo', true)
            ->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('Juan', $paciente->first()->nombre);
    }

    public function test_buscar_paciente_sin_exposiciones_especificas()
    {
        $this->crearPacientesParaPruebasExposicion();

        $paciente = Paciente::whereJsonDoesntContain('exposicion', 'Ruido')->get();

        $this->assertCount(1, $paciente);
        $this->assertEquals('María', $paciente->first()->nombre);
    }
}
