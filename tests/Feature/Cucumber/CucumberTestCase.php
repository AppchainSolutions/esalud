<?php

namespace Tests\Feature\Cucumber;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Behat\Behat\Context\Context;
use Illuminate\Support\Facades\Artisan;

abstract class CucumberTestCase extends TestCase implements Context
{
    use RefreshDatabase;

    protected $user;
    protected $app;

    public function __construct()
    {
        parent::__construct('test');
    }

    /**
     * @BeforeScenario
     */
    public function setUpScenario()
    {
        $this->app = $this->createApplication();
        $this->refreshDatabase();
        
        // Ejecutar el seeder de usuarios
        Artisan::call('db:seed', ['--class' => 'UserSeeder']);
        
        $this->user = User::where('email', 'admin@example.com')->first();
        if (!$this->user) {
            throw new \Exception('Usuario admin@example.com no encontrado. Por favor, asegúrese de que el usuario exista en la base de datos.');
        }
    }

    protected function actingAsAdmin()
    {
        $this->actingAs($this->user, 'sanctum');
    }
}
