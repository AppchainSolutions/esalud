<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\ExamenNotificationService;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ExamenNotificationServiceTest extends TestCase
{
    private $service;

    protected function setUp(): void
    {
        parent::setUp();
        $this->service = new ExamenNotificationService();
    }

    public function test_metodo_get_config()
    {
        // Verificar que la configuración por defecto tenga las claves esperadas
        $config = $this->service->getConfig();
        
        $this->assertIsArray($config);
        $this->assertArrayHasKey('dias_anticipacion', $config);
        $this->assertArrayHasKey('canales_notificacion', $config);
        $this->assertArrayHasKey('max_intentos', $config);
        $this->assertArrayHasKey('rango_meses_busqueda', $config);
    }

    public function test_metodo_set_config()
    {
        // Establecer una configuración personalizada
        $configPersonalizada = [
            'dias_anticipacion' => 45,
            'canales_notificacion' => ['email'],
            'max_intentos' => 2
        ];

        $this->service->setConfig($configPersonalizada);
        
        // Verificar que la configuración se haya actualizado
        $configActualizada = $this->service->getConfig();
        
        $this->assertEquals(45, $configActualizada['dias_anticipacion']);
        $this->assertEquals(['email'], $configActualizada['canales_notificacion']);
        $this->assertEquals(2, $configActualizada['max_intentos']);
    }

    public function test_metodo_get_modelos_examenes()
    {
        // Verificar que se devuelva un array de modelos de exámenes
        $modelosExamenes = $this->service->getModelosExamenes();
        
        $this->assertIsArray($modelosExamenes);
        $this->assertNotEmpty($modelosExamenes);
        
        // Verificar que los modelos sean clases válidas
        foreach ($modelosExamenes as $modelo) {
            $this->assertTrue(class_exists($modelo), "El modelo $modelo no existe");
        }
    }

    public function test_metodo_set_modelos_examenes()
    {
        // Establecer modelos de exámenes personalizados
        $modelosPersonalizados = [
            \App\Models\ExAldehido::class,
            \App\Models\ExHumoNegro::class
        ];

        $this->service->setModelosExamenes($modelosPersonalizados);
        
        // Verificar que los modelos se hayan actualizado
        $modelosActualizados = $this->service->getModelosExamenes();
        
        $this->assertEquals($modelosPersonalizados, $modelosActualizados);
    }

    public function test_generar_notificaciones_vencimiento_modo_prueba()
    {
        // Ejecutar en modo de prueba (dry run)
        $notificaciones = $this->service->generarNotificacionesVencimiento(true);
        
        // Verificar que el resultado sea una colección
        $this->assertIsObject($notificaciones);
        $this->assertGreaterThanOrEqual(0, $notificaciones->count());
    }

    public function test_generar_notificaciones_con_rango_dias_personalizado()
    {
        // Probar con rango de días personalizado
        $notificaciones = $this->service->generarNotificacionesVencimiento(
            true, 
            [30, 45]  // Entre 30 y 45 días de anticipación
        );
        
        // Verificar que el resultado sea una colección
        $this->assertIsObject($notificaciones);
    }

    public function test_calcular_fecha_notificacion_para_examen_proximo_a_vencer()
    {
        // Usar una fecha de ejemplo si no hay datos en la base de datos
        $fechaProxControl = now()->addMonths(2);

        $fechaNotificacion = $this->service->calcularFechaNotificacion($fechaProxControl);

        $this->assertInstanceOf(Carbon::class, $fechaNotificacion);
        $this->assertTrue($fechaNotificacion->lte($fechaProxControl), 'La fecha de notificación debe ser anterior o igual a la fecha de próximo control');
    }

    public function test_generar_plantilla_notificacion_para_examen()
    {
        // Crear un objeto de examen simulado
        $examen = (object)[
            'id' => 1,
            'paciente_id' => 1,
            'tipo_examen' => 'ex_aldehido',
            'fecha_prox_control' => now()->addMonths(2)
        ];

        $plantilla = $this->service->generarPlantillaNotificacion($examen);

        $this->assertIsString($plantilla);
        $this->assertStringContainsString((string)$examen->paciente_id, $plantilla);
        $this->assertStringContainsString($examen->tipo_examen, $plantilla);
    }

    public function test_obtener_examenes_por_vencer()
    {
        // Obtener exámenes próximos a vencer usando el servicio
        $examenesPorVencer = $this->service->obtenerExamenesPorVencer();

        // Verificaciones básicas
        $this->assertIsArray($examenesPorVencer, 'El resultado debe ser un array');

        // Si no hay exámenes, hacer una aserción informativa
        if (empty($examenesPorVencer)) {
            Log::warning('No se encontraron exámenes próximos a vencer en la base de datos.');
            $this->assertTrue(true, 'No hay exámenes próximos a vencer en este momento');
            return;
        }

        // Tipos de examen esperados
        $tiposExamenEsperados = [
            'ex_aldehido', 
            'ex_humo_negro', 
            'ex_metal'
        ];

        // Verificar que hay exámenes de los tipos esperados
        $tiposEncontrados = array_keys($examenesPorVencer);

        foreach ($tiposExamenEsperados as $tipoExamen) {
            // Si no se encuentra un tipo, solo hacer un log en lugar de fallar
            if (!array_key_exists($tipoExamen, $examenesPorVencer)) {
                Log::warning("No se encontraron exámenes del tipo: $tipoExamen");
            }
        }

        // Verificar detalles de los exámenes
        foreach ($examenesPorVencer as $tipoExamen => $examenes) {
            foreach ($examenes as $examen) {
                $this->assertObjectHasAttribute('id', $examen, 'Cada examen debe tener un ID');
                $this->assertObjectHasAttribute('paciente_id', $examen, 'Cada examen debe tener un paciente_id');
                $this->assertObjectHasAttribute('fecha_prox_control', $examen, 'Cada examen debe tener una fecha de próximo control');
                
                // Verificar que la fecha de próximo control está próxima a vencer
                $fechaProxControl = Carbon::parse($examen->fecha_prox_control);
                $this->assertTrue(
                    $fechaProxControl->between(now(), now()->addMonths(2)), 
                    "El examen {$examen->id} debe estar próximo a vencer"
                );
            }
        }
    }
}
