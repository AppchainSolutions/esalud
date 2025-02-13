<?php

namespace Tests\Feature\Pacientes\Crud;

use App\Models\Paciente;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase;
use Tests\CreatesApplication;

class PacienteCrudTest extends TestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    private function datosValidosPaciente($sobreescribir = [])
    {
        $datosBase = [
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
        ];

        return array_merge($datosBase, $sobreescribir);
    }

    public function test_crear_paciente_con_datos_validos()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $this->assertDatabaseHas('paciente', [
            'rut' => '12.345.678-9',
            'email' => 'juan.perez@ejemplo.com',
        ]);

        $this->assertEquals('Juan', $paciente->nombre);
        $this->assertEquals('Pérez González', $paciente->apellidos);
    }

    public function test_actualizar_paciente_existente()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $paciente->update([
            'nombre' => 'Carlos',
            'apellidos' => 'Martínez López',
            'email' => 'carlos.martinez@ejemplo.com',
        ]);

        $this->assertDatabaseHas('paciente', [
            'id' => $paciente->id,
            'nombre' => 'Carlos',
            'apellidos' => 'Martínez López',
            'email' => 'carlos.martinez@ejemplo.com',
        ]);
    }

    public function test_eliminar_paciente()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $pacienteId = $paciente->id;
        $paciente->delete();

        $this->assertSoftDeleted('paciente', [
            'id' => $pacienteId,
        ]);
    }

    public function test_no_puede_crear_paciente_con_rut_duplicado()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);

        Paciente::create($this->datosValidosPaciente());
        Paciente::create($this->datosValidosPaciente([
            'nombre' => 'María',
            'email' => 'maria.rodriguez@ejemplo.com',
        ]));
    }

    public function test_no_puede_crear_paciente_con_email_duplicado()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);

        Paciente::create($this->datosValidosPaciente());
        Paciente::create($this->datosValidosPaciente([
            'nombre' => 'María',
            'rut' => '98.765.432-1',
        ]));
    }

    public function test_actualizar_estado_activacion_paciente()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $paciente->update([
            'cuenta_activada' => true,
        ]);

        $this->assertDatabaseHas('paciente', [
            'id' => $paciente->id,
            'cuenta_activada' => true,
        ]);
    }

    public function test_actualizar_exposiciones_paciente()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $paciente->update([
            'exposicion' => json_encode(['Químicos', 'Humos']),
        ]);

        $this->assertDatabaseHas('paciente', [
            'id' => $paciente->id,
            'exposicion' => json_encode(['Químicos', 'Humos']),
        ]);
    }

    public function test_desactivar_paciente()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $paciente->update([
            'activo' => false,
        ]);

        $this->assertDatabaseHas('paciente', [
            'id' => $paciente->id,
            'activo' => false,
        ]);
    }

    public function test_cambiar_empresa_area_cargo_paciente()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());

        $paciente->update([
            'empresa' => 2,
            'area' => 2,
            'cargo' => 2,
        ]);

        $this->assertDatabaseHas('paciente', [
            'id' => $paciente->id,
            'empresa' => 2,
            'area' => 2,
            'cargo' => 2,
        ]);
    }

    public function test_restaurar_paciente_eliminado()
    {
        $paciente = Paciente::create($this->datosValidosPaciente());
        $pacienteId = $paciente->id;
        $paciente->delete();

        $pacienteRestaurado = Paciente::withTrashed()->find($pacienteId);
        $pacienteRestaurado->restore();

        $this->assertDatabaseHas('paciente', [
            'id' => $pacienteId,
        ]);
        $this->assertNull($pacienteRestaurado->deleted_at);
    }
}
