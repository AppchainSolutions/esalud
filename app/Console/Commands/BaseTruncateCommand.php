<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class BaseTruncateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'base:truncate 
                            {--tables= : Comma-separated list of tables to truncate}
                            {--except= : Comma-separated list of tables to exclude}
                            {--all : Truncate all tables}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Truncate database tables with flexible options';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Desactivar restricciones de clave foránea
        Schema::disableForeignKeyConstraints();

        // Obtener todas las tablas de la base de datos
        $allTables = $this->getAllTables();

        // Determinar qué tablas truncar
        $tablesToTruncate = $this->determineTablesToTruncate($allTables);

        // Realizar truncado
        foreach ($tablesToTruncate as $table) {
            try {
                DB::table($table)->truncate();
                $this->info("Truncated table: $table");
            } catch (\Exception $e) {
                $this->error("Error truncating table $table: " . $e->getMessage());
            }
        }

        // Reactivar restricciones de clave foránea
        Schema::enableForeignKeyConstraints();

        $this->info('Truncate operation completed.');
    }

    /**
     * Obtener todas las tablas de la base de datos
     */
    private function getAllTables(): array
    {
        $connection = DB::connection();
        $driverName = $connection->getDriverName();

        switch ($driverName) {
            case 'sqlite':
                $tables = $connection->select("SELECT name FROM sqlite_master WHERE type='table'");
                return array_map(function($table) { return $table->name; }, $tables);

            case 'pgsql':
                $tables = $connection->select("SELECT tablename FROM pg_tables WHERE schemaname = 'public'");
                return array_map(function($table) { return $table->tablename; }, $tables);

            case 'mysql':
                $tables = $connection->select('SHOW TABLES');
                return array_map('reset', $tables);

            default:
                $this->error("Unsupported database driver: $driverName");
                return [];
        }
    }

    /**
     * Determinar qué tablas se deben truncar
     */
    private function determineTablesToTruncate(array $allTables): array
    {
        // Si se especifica --all, usar todas las tablas
        if ($this->option('all')) {
            return $allTables;
        }

        // Si se especifican tablas específicas
        if ($this->option('tables')) {
            $specifiedTables = explode(',', $this->option('tables'));
            return array_intersect($specifiedTables, $allTables);
        }

        // Si se especifican tablas a excluir
        if ($this->option('except')) {
            $excludedTables = explode(',', $this->option('except'));
            return array_diff($allTables, $excludedTables);
        }

        // Por defecto, no truncar nada si no se especifica
        return [];
    }
}
