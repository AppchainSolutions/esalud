<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Finder\Finder;

/**
 * Comando para limpiar archivos temporales y caché en el sistema
 * 
 * Características principales:
 * - Elimina archivos log y json temporales
 * - Limpia caché de Laravel (rutas, vistas, configuración)
 * - Gestiona directorios críticos del sistema
 * - Soporte para limpieza selectiva de directorios
 * - Registro de eventos y errores
 * 
 * Ejemplos de uso:
 * 
 * # Comportamiento por defecto: elimina logs y json, limpia caché
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
    protected $description = 'Limpia archivos temporales y caché del sistema

Descripción Detallada:
  Este comando ayuda a mantener limpio el sistema eliminando archivos temporales
  y limpiando diferentes tipos de caché. Es útil para liberar espacio en disco
  y resolver problemas de caché.

Archivos que se limpian por defecto:
  - Archivos .log en el directorio storage
  - Archivos .json temporales
  - Caché de Laravel (rutas, vistas, configuración)

Opciones Disponibles:
  --sessions    : Incluye la limpieza del directorio de sesiones
  --views       : Incluye la limpieza del directorio de vistas compiladas
  --cache       : Incluye la limpieza del directorio de caché
  --clockwork   : Incluye la limpieza de archivos de Clockwork
  --redis       : Limpia los registros almacenados en Redis

Ejemplos de Uso:
  # Limpieza básica (logs y json)
  php artisan storage:clean

  # Limpiar sesiones y vistas
  php artisan storage:clean --sessions --views

  # Limpiar todo incluyendo Redis
  php artisan storage:clean --sessions --views --cache --clockwork --redis

Nota: Usar con precaución en entornos de producción';

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

        try {
            // Mantén tu lógica existente de limpieza de archivos
            $this->cleanFiles();

            // Agrega nuevos métodos de limpieza
            $this->clearLaravelCaches();

            // Registro de log
            Log::info('Limpieza de almacenamiento completada exitosamente.');
            $this->info('Limpieza de almacenamiento completada.');
        } catch (\Exception $e) {
            // Mejora en el manejo de errores
            Log::error('Error en limpieza de almacenamiento: ' . $e->getMessage());
            $this->error('Error en limpieza: ' . $e->getMessage());
        }
    }

    private function cleanFiles()
    {
        $storagePath = storage_path();
        $deletedFiles = 0;
        $totalSize = 0;

        // Directorios específicos a limpiar con rutas completas
        $cleanDirectories = [
            'logs' => $storagePath . '/logs',
            'framework_cache' => $storagePath . '/framework/cache/data',
            'framework_sessions' => $storagePath . '/framework/sessions',
            'framework_views' => $storagePath . '/framework/views',
            'clockwork' => $storagePath . '/clockwork'
        ];

        // Registro inicial detallado
        Log::info('Iniciando limpieza de archivos temporales', [
            'storage_path' => $storagePath,
            'directories' => array_keys($cleanDirectories)
        ]);

        foreach ($cleanDirectories as $dirName => $fullPath) {
            // Verificar si el directorio existe
            if (File::exists($fullPath)) {
                try {
                    // Obtener todos los archivos, incluyendo subdirectorios
                    $files = File::allFiles($fullPath);
                    
                    $this->info("Procesando directorio: {$dirName}");
                    Log::info("Procesando directorio: {$dirName}", ['path' => $fullPath]);

                    foreach ($files as $file) {
                        // Convertir a string la ruta del archivo
                        $filePath = $file->getRealPath();

                        // Condiciones de eliminación más flexibles
                        if ($this->isFileDeletable($filePath)) {
                            try {
                                $fileSize = File::size($filePath);
                                
                                // Intentar eliminar el archivo
                                if (File::delete($filePath)) {
                                    $deletedFiles++;
                                    $totalSize += $fileSize;
                                    
                                    $this->info("Eliminado: {$filePath}");
                                    Log::info("Archivo eliminado", [
                                        'path' => $filePath,
                                        'size' => $this->formatBytes($fileSize)
                                    ]);
                                }
                            } catch (\Exception $deleteEx) {
                                Log::warning("No se pudo eliminar archivo", [
                                    'path' => $filePath,
                                    'error' => $deleteEx->getMessage()
                                ]);
                                $this->warn("No se pudo eliminar: {$filePath}");
                            }
                        }
                    }
                } catch (\Exception $e) {
                    Log::error("Error procesando directorio {$dirName}", [
                        'path' => $fullPath,
                        'error' => $e->getMessage(),
                        'trace' => $e->getTraceAsString()
                    ]);
                    $this->error("Error en directorio {$dirName}: " . $e->getMessage());
                }
            } else {
                Log::warning("Directorio no encontrado", ['path' => $fullPath]);
                $this->warn("Directorio no encontrado: {$fullPath}");
            }
        }

        // Registro final de la limpieza
        Log::info('Limpieza de archivos temporales completada', [
            'total_files_deleted' => $deletedFiles,
            'total_size_freed' => $this->formatBytes($totalSize)
        ]);

        $this->info("Se eliminaron {$deletedFiles} archivos temporales. Espacio liberado: " . $this->formatBytes($totalSize));
    }

    // Método para verificar si un archivo es eliminable
    private function isFileDeletable($filePath)
    {
        // Condiciones más flexibles
        return 
            // Archivos con más de 24 horas
            File::lastModified($filePath) < now()->subDay()->timestamp &&
            // Archivos menores a 50MB
            File::size($filePath) < 50 * 1024 * 1024 &&
            // Excluir archivos críticos
            !preg_match('/\.(gitignore|env|lock|php)$/', $filePath);
    }

    /**
     * Formatear bytes a una representación legible
     * 
     * @param int $bytes Número de bytes
     * @param int $precision Precisión decimal
     * @return string
     */
    private function formatBytes($bytes, $precision = 2)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        $bytes /= pow(1024, $pow);

        return round($bytes, $precision) . ' ' . $units[$pow];
    }

    // Método para limpiar cachés de Laravel con más logging
    private function clearLaravelCaches()
    {
        $caches = [
            'cache:clear' => 'Caché general',
            'route:clear' => 'Caché de rutas',
            'config:clear' => 'Caché de configuración',
            'view:clear' => 'Caché de vistas',
            'optimize:clear' => 'Optimización'
        ];

        foreach ($caches as $command => $description) {
            try {
                // Ejecutar comando y capturar salida
                $exitCode = Artisan::call($command);
                
                // Registro detallado
                Log::info("Comando Artisan ejecutado", [
                    'command' => $command,
                    'description' => $description,
                    'exit_code' => $exitCode
                ]);

                // Mostrar salida del comando
                $output = Artisan::output();
                
                if ($exitCode === 0) {
                    $this->info("{$description} limpiada");
                    if (!empty(trim($output))) {
                        $this->line($output);
                    }
                } else {
                    $this->warn("Posible error limpiando {$description}. Código de salida: {$exitCode}");
                    Log::warning("Posible error en comando Artisan", [
                        'command' => $command,
                        'exit_code' => $exitCode,
                        'output' => $output
                    ]);
                }
            } catch (\Exception $e) {
                $this->error("Error ejecutando {$command}: " . $e->getMessage());
                Log::error("Error en comando Artisan", [
                    'command' => $command,
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
            }
        }

        // Comando final de optimización
        try {
            $optimizeExitCode = Artisan::call('optimize');
            Log::info("Comando optimize ejecutado", ['exit_code' => $optimizeExitCode]);
            $this->info('Aplicación optimizada');
        } catch (\Exception $e) {
            $this->error("Error en optimización: " . $e->getMessage());
            Log::error("Error en optimización", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }
}
