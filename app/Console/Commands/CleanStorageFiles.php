<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redis;
use Symfony\Component\Finder\Finder;

/**
 * Comando para limpiar archivos temporales en el directorio storage
 * 
 * Ejemplos de uso:
 * 
 * # Comportamiento por defecto: elimina logs y json, excepto en directorios críticos
 * php artisan storage:clean
 * 
 * # Incluir directorios específicos
 * php artisan storage:clean --sessions
 * php artisan storage:clean --views
 * php artisan storage:clean --cache
 * php artisan storage:clean --clockwork
 * 
 * # Combinaciones de directorios
 * php artisan storage:clean --sessions --views
 * php artisan storage:clean --cache --clockwork
 * 
 * # Incluir todos los directorios
 * php artisan storage:clean --sessions --views --cache --clockwork
 * 
 * # Limpiar registros de Redis
 * php artisan storage:clean --redis
 * 
 * Opciones:
 * - --sessions: Incluye archivos en el directorio de sesiones
 * - --views: Incluye archivos en el directorio de vistas
 * - --cache: Incluye archivos en el directorio de caché
 * - --clockwork: Incluye archivos de Clockwork
 * - --redis: Limpiar registros de Redis
 * 
 * Precaución: Usar con cuidado, especialmente en entornos de producción
 */
class CleanStorageFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storage:clean 
                            {--sessions : Incluir directorio de sesiones} 
                            {--views : Incluir directorio de vistas} 
                            {--cache : Incluir directorio de caché} 
                            {--clockwork : Incluir directorio de Clockwork}
                            {--redis : Limpiar registros de Redis}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Eliminar archivos temporales en storage y opcionalmente limpiar registros de Redis';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $storagePath = storage_path();
        $deletedFiles = 0;

        // Configurar directorios a ignorar por defecto
        $ignoreDirs = [
            'framework/sessions',
            'framework/views',
            'framework/cache',
            'clockwork'
        ];

        // Filtrar directorios basado en opciones
        $ignoreDirs = array_filter($ignoreDirs, function($dir) {
            $option = str_replace('framework/', '', $dir);
            return !$this->option($option);
        });

        // Buscar archivos .log y .json recursivamente
        $finder = new Finder();
        $finder->files()
            ->in($storagePath)
            ->name('*.log')
            ->name('*.json')
            ->notPath($ignoreDirs);

        foreach ($finder as $file) {
            $filePath = $file->getRealPath();

            try {
                // Eliminar archivo
                unlink($filePath);
                $deletedFiles++;

                $this->info("Eliminado: {$filePath}");
            } catch (\Exception $e) {
                $this->warn("No se pudo eliminar {$filePath}: " . $e->getMessage());
            }
        }

        // Limpiar registros de Redis si está habilitado
        if ($this->option('redis')) {
            try {
                // Limpiar todas las claves de Redis
                $redis = Redis::connection();
                $keys = $redis->keys('*');
                
                foreach ($keys as $key) {
                    $redis->del($key);
                }

                $this->info("Eliminados " . count($keys) . " registros de Redis");
            } catch (\Exception $e) {
                $this->error("Error al limpiar registros de Redis: " . $e->getMessage());
            }
        }

        $this->info("Se eliminaron {$deletedFiles} archivos temporales de storage.");

        // Mostrar directorios excluidos
        if (!empty($ignoreDirs)) {
            $this->warn("Directorios excluidos: " . implode(', ', $ignoreDirs));
        }
    }
}
