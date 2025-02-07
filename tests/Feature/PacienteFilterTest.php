/**
 * Pruebas de Filtrado de Pacientes
 * 
 * Esta clase de pruebas verifica la funcionalidad de filtrado de pacientes 
 * con énfasis en el manejo de campos booleanos como 'activo'.
 * 
 * Características probadas:
 * - Filtrado de pacientes activos con diferentes tipos de valores
 * - Filtrado de pacientes inactivos con diferentes tipos de valores
 * - Compatibilidad entre diferentes representaciones de booleanos
 * 
 * @package Tests\Feature
 */
class PacienteFilterTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Prueba el filtrado de pacientes activos con múltiples representaciones
     * 
     * Verifica que se puedan filtrar pacientes activos utilizando:
     * - Booleano nativo (true)
     * - Cadena 'true'
     * - Entero 1
     * - Cadena '1'
     */
    public function test_filtrar_pacientes_activos()
    {
        // Crear pacientes con diferentes estados de activación
        Paciente::factory()->create(['activo' => true, 'email' => 'activo1@example.com']);
        Paciente::factory()->create(['activo' => true, 'email' => 'activo2@example.com']);
        Paciente::factory()->create(['activo' => false, 'email' => 'inactivo1@example.com']);
        Paciente::factory()->create(['activo' => false, 'email' => 'inactivo2@example.com']);

        // Probar diferentes formas de filtrar pacientes activos
        $filtros = [
            ['activo' => true],
            ['activo' => 'true'],
            ['activo' => 1],
            ['activo' => '1']
        ];

        foreach ($filtros as $filtro) {
            $resultado = Tools::filterData($filtro, Paciente::query());
            
            $this->assertCount(2, $resultado, "Filtro " . json_encode($filtro) . " no funcionó correctamente");
            
            foreach ($resultado as $paciente) {
                $this->assertTrue($paciente->activo, "Paciente {$paciente->email} debería estar activo");
            }
        }
    }

    /**
     * Prueba el filtrado de pacientes inactivos con múltiples representaciones
     * 
     * Verifica que se puedan filtrar pacientes inactivos utilizando:
     * - Booleano nativo (false)
     * - Cadena 'false'
     * - Entero 0
     * - Cadena '0'
     */
    public function test_filtrar_pacientes_inactivos()
    {
        // Crear pacientes con diferentes estados de activación
        Paciente::factory()->create(['activo' => true, 'email' => 'activo1@example.com']);
        Paciente::factory()->create(['activo' => true, 'email' => 'activo2@example.com']);
        Paciente::factory()->create(['activo' => false, 'email' => 'inactivo1@example.com']);
        Paciente::factory()->create(['activo' => false, 'email' => 'inactivo2@example.com']);

        // Probar diferentes formas de filtrar pacientes inactivos
        $filtros = [
            ['activo' => false],
            ['activo' => 'false'],
            ['activo' => 0],
            ['activo' => '0']
        ];

        foreach ($filtros as $filtro) {
            $resultado = Tools::filterData($filtro, Paciente::query());
            
            $this->assertCount(2, $resultado, "Filtro " . json_encode($filtro) . " no funcionó correctamente");
            
            foreach ($resultado as $paciente) {
                $this->assertFalse($paciente->activo, "Paciente {$paciente->email} debería estar inactivo");
            }
        }
    }
}
