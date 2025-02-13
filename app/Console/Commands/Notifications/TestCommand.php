<?php

namespace App\Console\Commands\Notifications;

use Illuminate\Console\Command;

class TestCommand extends Command
{
    protected $signature = 'test
                         {--without-tty : Disable output to TTY}
                         {--parallel : Indicates if the tests should run in parallel}
                         {--recreate-databases : Indicates if the test databases should be re-created}
                         {--group= : The groups of tests to run}';

    protected $description = 'Run the application tests

Available test groups for Pacientes:
  - busqueda    : Ejecuta solo las pruebas de búsqueda de paciente
  - validacion  : Ejecuta solo las pruebas de validación de paciente
  - creacion    : Ejecuta solo las pruebas de creación de paciente
  - vista       : Ejecuta solo las pruebas de vista de paciente

Examples:
  php artisan test --group=busqueda
  php artisan test --group=validacion
  php artisan test --group=creacion
  php artisan test --group=vista';

    public function handle()
    {
        $options = array_filter([
            '--without-tty' => $this->option('without-tty'),
            '--parallel' => $this->option('parallel'),
            '--recreate-databases' => $this->option('recreate-databases'),
        ]);

        if ($group = $this->option('group')) {
            $options['--group'] = $group;
        }

        $command = array_merge(['vendor/bin/pest'], array_map(function ($value, $key) {
            return is_bool($value) ? $key : "$key=$value";
        }, $options, array_keys($options)));

        $process = new \Symfony\Component\Process\Process($command, base_path(), ['COLUMNS' => '120']);

        return $process->run(function ($type, $buffer) {
            $this->output->write($buffer);
        });
    }
}
