<?php

namespace Tests\Feature\Cucumber\Steps;

use App\Models\Paciente;
use Tests\TestCase;
use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\TableNode;
use Tests\Feature\Cucumber\CucumberTestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SearchPatientsSteps extends CucumberTestCase implements Context
{
    use RefreshDatabase;

    private $response;
    private $pacientes;

    /**
     * @BeforeScenario
     */
    public function before()
    {
        $this->refreshApplication();
    }

    /**
     * @Given que existen los siguientes pacientes en el sistema:
     */
    public function queExistenLosSiguientesPacientesEnElSistema(TableNode $table)
    {
        foreach ($table->getHash() as $row) {
            Paciente::factory()->create([
                'nombre' => $row['nombre'],
                'apellidos' => $row['apellidos'],
                'rut' => $row['rut']
            ]);
        }
    }

    /**
     * @When busco pacientes con el criterio :criterio
     */
    public function buscoPacientesConElCriterio($criterio)
    {
        $this->response = $this->get("/api/pacientes/search?q=" . urlencode($criterio));
        $this->pacientes = $this->response->json()['data'];
    }

    /**
     * @Then debo ver :cantidad paciente(s) en los resultados
     */
    public function deboVerPacientesEnLosResultados($cantidad)
    {
        $this->assertEquals(intval($cantidad), count($this->pacientes));
    }

    /**
     * @Then el paciente debe tener nombre :nombre y apellido :apellido
     */
    public function elPacienteDebeTenerNombreYApellido($nombre, $apellido)
    {
        $paciente = $this->pacientes[0];
        $this->assertEquals($nombre, $paciente['nombre']);
        $this->assertEquals($apellido, $paciente['apellidos']);
    }
}
