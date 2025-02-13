<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Config;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class ExamenConfigurationTest extends TestCase
{
    #[Test]
    public function examenes_configuration_is_loaded_correctly()
    {
        // Verificar que la configuración de exámenes existe
        $this->assertTrue(Config::has('examenes'), 'Configuración de exámenes no encontrada');
        
        // Verificar modelos principales
        $modelosPrincipales = Config::get('examenes.modelos.principales', []);
        $this->assertIsArray($modelosPrincipales, 'Modelos principales deben ser un array');
        $this->assertNotEmpty($modelosPrincipales, 'Debe haber al menos un modelo principal');
        
        // Verificar que los modelos sean clases válidas
        foreach ($modelosPrincipales as $modelo) {
            $this->assertTrue(
                class_exists($modelo), 
                "Modelo $modelo no existe"
            );
        }
        
        // Verificar tipos de exámenes incluidos
        $tiposIncluidos = Config::get('examenes.tipos_incluidos', []);
        $this->assertIsArray($tiposIncluidos, 'Tipos incluidos deben ser un array');
        $this->assertNotEmpty($tiposIncluidos, 'Debe haber al menos un tipo de examen incluido');
        
        // Verificar tipos de exámenes excluidos
        $tiposExcluidos = Config::get('examenes.tipos_excluidos', []);
        $this->assertIsArray($tiposExcluidos, 'Tipos excluidos deben ser un array');
    }
    
    #[Test]
    public function notifications_configuration_uses_examenes_config()
    {
        // Verificar que la configuración de notificaciones usa la configuración de exámenes
        $modelosNotificaciones = Config::get('notifications.examenes.modelos', []);
        $modelosExamenes = Config::get('examenes.modelos.principales', []);
        
        $this->assertNotEmpty($modelosNotificaciones, 'No hay modelos de notificaciones');
        $this->assertNotEmpty($modelosExamenes, 'No hay modelos de exámenes');
        
        $this->assertEquals(
            $modelosExamenes, 
            $modelosNotificaciones, 
            'Los modelos de notificaciones deben coincidir con los modelos principales de exámenes'
        );
        
        // Verificar tipos incluidos
        $tiposIncluidosNotificaciones = Config::get('notifications.examenes.tipos_incluidos', []);
        $tiposIncluidosExamenes = Config::get('examenes.tipos_incluidos', []);
        
        $this->assertEquals(
            $tiposIncluidosExamenes, 
            $tiposIncluidosNotificaciones, 
            'Los tipos incluidos de notificaciones deben coincidir con los tipos de exámenes'
        );
    }
    
    #[Test]
    public function notification_environment_variables_exist()
    {
        // Verificar variables de entorno para notificaciones de exámenes
        $variablesRequeridas = [
            'NOTIFICACIONES_EXAMENES_DIAS_MIN',
            'NOTIFICACIONES_EXAMENES_DIAS_MAX',
            'NOTIFICACIONES_EXAMENES_INTENTOS',
            'NOTIFICACIONES_EXAMENES_COLA',
            'NOTIFICACIONES_EXAMENES_RETRASO'
        ];
        
        foreach ($variablesRequeridas as $variable) {
            $valor = env($variable);
            $this->assertNotNull(
                $valor, 
                "Variable de entorno $variable no está definida"
            );
            $this->assertIsNumeric(
                $valor, 
                "Variable de entorno $variable debe ser numérica"
            );
        }
    }
}
