<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class RunMutationTests extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:mutation
                          {--debug : Muestra información detallada de depuración}
                          {--coverage-path= : Ruta personalizada para los archivos de cobertura}
                          {--threads= : Número de hilos a usar (por defecto: número de CPU)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ejecuta pruebas de mutación usando Infection';

    /**
     * La ruta base para los logs.
     *
     * @var string
     */
    protected string $logsPath;

    /**
     * El timestamp para los archivos de esta ejecución.
     *
     * @var string
     */
    protected string $timestamp;

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->timestamp = now()->format('Y-m-d_His');
        $this->logsPath = storage_path('logs/mutation');
        
        try {
            $this->setupEnvironment();
            
            if (!$this->checkRequirements()) {
                return Command::FAILURE;
            }

            if (!$this->runPestTests()) {
                return Command::FAILURE;
            }

            return $this->runMutationTests();

        } catch (\Exception $e) {
            $this->logError("Error inesperado: " . $e->getMessage());
            $this->error("Ha ocurrido un error inesperado. Revisa los logs para más detalles.");
            return Command::FAILURE;
        }
    }

    /**
     * Configura el entorno necesario para las pruebas.
     */
    protected function setupEnvironment(): void
    {
        // Crear directorio de logs si no existe
        if (!File::exists($this->logsPath)) {
            File::makeDirectory($this->logsPath, 0755, true);
        }

        // Configurar logging específico para mutation tests
        Log::build([
            'driver' => 'single',
            'path' => "{$this->logsPath}/mutation_{$this->timestamp}.log",
        ]);

        $this->info('Configuración del entorno completada.');
        $this->debug("Directorio de logs: {$this->logsPath}");
    }

    /**
     * Verifica los requisitos necesarios para ejecutar las pruebas.
     */
    protected function checkRequirements(): bool
    {
        $this->info('Verificando requisitos...');

        // Verificar Xdebug
        if (!extension_loaded('xdebug')) {
            $this->error('Xdebug no está instalado o habilitado. Es necesario para la cobertura de código.');
            return false;
        }

        // Verificar Infection
        if (!File::exists(base_path('vendor/bin/infection'))) {
            $this->error('Infection no está instalado. Ejecuta: composer require --dev infection/infection');
            return false;
        }

        $this->info('✓ Todos los requisitos están cumplidos.');
        return true;
    }

    /**
     * Ejecuta las pruebas de Pest.
     */
    protected function runPestTests(): bool
    {
        $this->info('Ejecutando pruebas Pest...');

        $process = new Process(['./vendor/bin/pest']);
        $process->setWorkingDirectory(base_path());
        $process->setTimeout(null);

        try {
            $process->mustRun(function ($type, $buffer) {
                $this->debug($buffer);
            });

            $this->info('✓ Las pruebas Pest se completaron exitosamente.');
            return true;

        } catch (ProcessFailedException $e) {
            $this->error('Las pruebas Pest fallaron. Corrige los errores antes de ejecutar las pruebas de mutación.');
            $this->logError($e->getMessage());
            return false;
        }
    }

    /**
     * Ejecuta las pruebas de mutación con Infection.
     */
    protected function runMutationTests(): int
    {
        $this->info('Ejecutando pruebas de mutación...');

        $coveragePath = $this->option('coverage-path') ?? storage_path('framework/coverage');
        $threads = $this->option('threads') ?? (php_sapi_name() === 'cli' ? shell_exec('nproc') : 4);

        $command = [
            './vendor/bin/infection',
            '--threads=' . $threads,
            '--coverage=' . $coveragePath,
            '--show-mutations',
            '--min-msi=80',
            '--min-covered-msi=90',
            '--logger-html=' . "{$this->logsPath}/infection_{$this->timestamp}.html",
            '--logger-json=' . "{$this->logsPath}/infection_{$this->timestamp}.json",
            '--formatter=progress'
        ];

        $process = new Process($command);
        $process->setWorkingDirectory(base_path());
        $process->setTimeout(null);

        try {
            $process->mustRun(function ($type, $buffer) {
                $this->debug($buffer);
            });

            $this->showResults();
            $this->info('✓ Las pruebas de mutación se completaron exitosamente.');
            return Command::SUCCESS;

        } catch (ProcessFailedException $e) {
            $this->error('Las pruebas de mutación fallaron.');
            $this->logError($e->getMessage());
            return Command::FAILURE;
        }
    }

    /**
     * Muestra los resultados de las pruebas de mutación.
     */
    protected function showResults(): void
    {
        $jsonPath = "{$this->logsPath}/infection_{$this->timestamp}.json";
        $htmlPath = "{$this->logsPath}/infection_{$this->timestamp}.html";

        if (File::exists($jsonPath)) {
            $results = json_decode(File::get($jsonPath), true);
            
            $this->info("\nResumen de Resultados:");
            $this->table(
                ['Métrica', 'Valor'],
                [
                    ['Total Mutantes', $results['stats']['totalMutantsCount']],
                    ['Mutantes Detectados', $results['stats']['killedCount']],
                    ['Mutantes Sobrevivientes', $results['stats']['escapedCount']],
                    ['MSI', $results['stats']['msi'] . '%'],
                    ['Covered MSI', $results['stats']['coveredCodeMsi'] . '%'],
                ]
            );
        }

        $this->info("\nReportes generados:");
        $this->line(" - HTML: {$htmlPath}");
        $this->line(" - JSON: {$jsonPath}");
        $this->line(" - Log:  {$this->logsPath}/mutation_{$this->timestamp}.log");
    }

    /**
     * Log un mensaje de error.
     */
    protected function logError(string $message): void
    {
        Log::error($message);
    }

    /**
     * Muestra un mensaje de debug si la opción está activada.
     */
    protected function debug(string $message): void
    {
        if ($this->option('debug')) {
            $this->line($message);
        }
    }
}
