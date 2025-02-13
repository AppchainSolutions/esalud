<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Symfony\Component\Finder\Finder;

class FileTagCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'file:tag 
        {action? : Acción a realizar (add|find|list|remove|cleanup)} 
        {file? : Ruta del archivo o etiqueta a buscar} 
        {tags?* : Etiquetas a añadir o buscar en directorios específicos}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gestionar etiquetas de archivos: añadir, buscar, listar y eliminar etiquetas en archivos del proyecto';

    /**
     * Indica si el comando debe mostrarse en la lista de comandos disponibles
     *
     * @var bool
     */
    protected $hidden = false;

    /**
     * Directorio de almacenamiento de tags
     */
    private $tagsDir;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->tagsDir = base_path('.project_tags');
    }

    /**
     * Genera ejemplos de uso para mostrar en la ayuda
     *
     * @return array
     */
    private function getUsageExamples(): array
    {
        return [
            'Añadir una etiqueta a un archivo' => [
                'comando' => 'php artisan file:tag add app/Models/User.php importante',
                'descripcion' => 'Añade la etiqueta "importante" al archivo User.php'
            ],
            'Añadir múltiples etiquetas a un archivo' => [
                'comando' => 'php artisan file:tag add app/Models/User.php importante urgente',
                'descripcion' => 'Añade las etiquetas "importante" y "urgente" al archivo User.php'
            ],
            'Buscar archivos con una etiqueta' => [
                'comando' => 'php artisan file:tag find importante',
                'descripcion' => 'Lista todos los archivos etiquetados como "importante"'
            ],
            'Listar todas las etiquetas' => [
                'comando' => 'php artisan file:tag list',
                'descripcion' => 'Muestra todas las etiquetas usadas en el proyecto'
            ],
            'Eliminar una etiqueta de un archivo' => [
                'comando' => 'php artisan file:tag remove app/Models/User.php importante',
                'descripcion' => 'Elimina la etiqueta "importante" del archivo User.php'
            ],
            'Limpiar tags de archivos eliminados' => [
                'comando' => 'php artisan file:tag cleanup',
                'descripcion' => 'Elimina los archivos de tags que corresponden a archivos eliminados'
            ]
        ];
    }

    /**
     * Obtener descripción detallada del comando
     *
     * @return string
     */
    public function getHelp(): string
    {
        return implode("\n", [
            "Gestión de Etiquetas de Archivos",
            "===============================",
            "Este comando permite administrar etiquetas para archivos en el proyecto.",
            "",
            "Acciones disponibles:",
            "  - add    : Añadir una etiqueta a un archivo específico",
            "  - find   : Buscar archivos que contengan una etiqueta determinada",
            "  - list   : Listar todas las etiquetas existentes en el proyecto",
            "  - remove : Eliminar una etiqueta de un archivo",
            "  - cleanup: Limpiar tags de archivos eliminados",
            "",
            "Restricciones:",
            "  - Las etiquetas solo pueden contener letras, números, espacios y guiones",
            "  - No se permiten caracteres especiales",
            "",
            "Ejemplos de uso:",
            "  php artisan file:tag add app/Models/User.php importante",
            "  php artisan file:tag add app/Models/User.php importante urgente",
            "  php artisan file:tag find importante",
            "  php artisan file:tag list",
            "  php artisan file:tag remove app/Models/User.php importante",
            "  php artisan file:tag cleanup"
        ]);
    }

    /**
     * Mostrar ayuda extendida
     */
    public function displayExtendedHelp()
    {
        $this->line($this->getHelp());
    }

    /**
     * Muestra la ayuda detallada del comando
     */
    public function help()
    {
        $this->line('Gestión de Etiquetas de Archivos');
        $this->line('===============================');
        $this->line('Este comando permite gestionar etiquetas para archivos en el proyecto.');
        $this->line('');
        
        $this->line('Acciones disponibles:');
        $this->line('  - add    : Añadir una etiqueta a un archivo');
        $this->line('  - find   : Buscar archivos con una etiqueta específica');
        $this->line('  - list   : Listar todas las etiquetas existentes');
        $this->line('  - remove : Eliminar una etiqueta de un archivo');
        $this->line('  - cleanup: Limpiar tags de archivos eliminados');
        $this->line('');
        
        $this->line('Restricciones de Etiquetas:');
        $this->line('  - Solo se permiten letras, números, espacios y guiones');
        $this->line('  - No se permiten caracteres especiales');
        $this->line('');
        
        $this->line('Ejemplos de Uso:');
        foreach ($this->getUsageExamples() as $titulo => $ejemplo) {
            $this->line("  • $titulo:");
            $this->line("    Comando: {$ejemplo['comando']}");
            $this->line("    {$ejemplo['descripcion']}");
            $this->line('');
        }
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $action = $this->argument('action');

        // Mostrar ayuda si no se proporciona acción o se solicita explícitamente
        if ($action === null || $action === 'help') {
            $this->displayExtendedHelp();
            return 0;
        }

        switch ($action) {
            case 'add':
                return $this->addTag();
            case 'find':
                return $this->findFiles();
            case 'list':
                return $this->listTags();
            case 'remove':
                return $this->removeTag();
            case 'cleanup':
                return $this->handleTagCleanup();
            default:
                $this->error('Acción no válida. Use add, find, list, remove, cleanup o help para ver ayuda.');
                $this->displayExtendedHelp(); // Mostrar ayuda por defecto
                return 1;
        }
    }

    /**
     * Método para procesar múltiples etiquetas
     * 
     * @param string $file
     * @param array $tags
     * @return int
     */
    private function processMultipleTags(string $file, array $tags): int
    {
        $successCount = 0;
        $errorCount = 0;

        foreach ($tags as $tag) {
            // Validar cada etiqueta
            if (!$this->validateTag($tag)) {
                $this->error("La etiqueta '$tag' no tiene un formato válido. Saltando...");
                $errorCount++;
                continue;
            }

            // Resolver ruta absoluta
            $absoluteFile = $this->resolveFilePath($file);

            if (!$absoluteFile || !File::exists($absoluteFile)) {
                $this->error("El archivo $file no existe");
                $errorCount++;
                continue;
            }

            $fileHash = $this->generateFileHash($absoluteFile);
            $tagFile = $this->tagsDir . '/' . $fileHash . '.tags';

            // Crear directorio de tags si no existe
            if (!File::exists($this->tagsDir)) {
                File::makeDirectory($this->tagsDir, 0755, true);
            }

            // Leer tags existentes
            $existingTags = File::exists($tagFile) 
                ? $this->removeDuplicateTags(array_filter(explode("\n", File::get($tagFile)))) 
                : [];

            // Añadir tag si no existe
            if (!in_array($tag, $existingTags)) {
                $existingTags[] = $tag;
                
                // Guardar tags
                File::put($tagFile, implode("\n", $existingTags));
                
                $this->info("Etiqueta '$tag' añadida al archivo $file");
                
                // Logging de la acción
                \Log::info("Etiqueta añadida", [
                    'file' => $absoluteFile,
                    'tag' => $tag
                ]);

                $successCount++;
            } else {
                $this->warn("La etiqueta '$tag' ya existe para este archivo");
            }
        }

        // Resumen de resultados
        if ($successCount > 0) {
            $this->line("\n<info>Resumen:</info>");
            $this->line("  • Etiquetas añadidas: $successCount");
        }
        if ($errorCount > 0) {
            $this->line("  • Errores: $errorCount");
        }

        return $errorCount > 0 ? 1 : 0;
    }

    /**
     * Añadir una etiqueta a un archivo
     */
    private function addTag()
    {
        $file = $this->argument('file');
        $tags = $this->argument('tags') ?? [];

        // Si no se proporcionan etiquetas, solicitar entrada interactiva
        if (empty($tags)) {
            $tags = $this->ask('Ingrese las etiquetas (separadas por espacios):');
            $tags = explode(' ', $tags);
        }

        // Procesar múltiples etiquetas
        return $this->processMultipleTags($file, $tags);
    }

    /**
     * Buscar archivos por etiqueta
     */
    private function findFiles()
    {
        // Obtener las etiquetas a buscar
        $tags = $this->argument('tags') ?? [];

        // Si no se proporcionan etiquetas, solicitar entrada interactiva
        if (empty($tags)) {
            $tags = $this->ask('Ingrese las etiquetas a buscar (separadas por espacios):');
            $tags = explode(' ', $tags);
        }

        // Validar etiquetas
        foreach ($tags as $tag) {
            if (!$this->validateTag($tag)) {
                $this->error("La etiqueta '$tag' no tiene un formato válido. Saltando...");
                continue;
            }
        }

        // Buscar archivos con las etiquetas
        $foundFiles = [];
        $projectRoot = base_path();

        // Recorrer todos los archivos de tags
        $tagFiles = File::glob($this->tagsDir . '/*.tags');

        foreach ($tagFiles as $tagFile) {
            // Leer contenido de tags
            $existingTags = array_filter(explode("\n", File::get($tagFile)));
            
            // Verificar si contiene TODAS las etiquetas buscadas
            $matchesAllTags = true;
            foreach ($tags as $tag) {
                if (!in_array($tag, $existingTags)) {
                    $matchesAllTags = false;
                    break;
                }
            }

            // Si coincide con todas las etiquetas
            if ($matchesAllTags) {
                // Obtener el hash del archivo original
                $fileHash = basename($tagFile, '.tags');
                
                // Buscar el archivo original
                $foundFile = $this->findFileByHash($projectRoot, $fileHash, $foundFiles);
            }
        }

        // Mostrar resultados
        if (!empty($foundFiles)) {
            $this->line("\n<info>Archivos encontrados con etiquetas: " . implode(', ', $tags) . "</info>");
            foreach ($foundFiles as $file) {
                $this->line("  • $file");
            }
            $this->line("\nTotal de archivos: " . count($foundFiles));
        } else {
            $this->warn("No se encontraron archivos con las etiquetas: " . implode(', ', $tags));
        }

        return 0;
    }

    /**
     * Buscar archivos por hash en un directorio
     * 
     * @param string $dir Directorio raíz para buscar
     * @param string $fileHash Hash del archivo a buscar
     * @param array &$foundFiles Arreglo de archivos encontrados
     * @return bool
     */
    private function findFileByHash($dir, $fileHash, &$foundFiles)
    {
        // Evitar búsqueda en directorios de sistema o de vendor
        $excludeDirs = [
            '.git', 
            'vendor', 
            'node_modules', 
            'storage', 
            'bootstrap', 
            '.project_tags'
        ];

        try {
            $iterator = new \RecursiveIteratorIterator(
                new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS)
            );

            foreach ($iterator as $file) {
                // Saltar directorios excluidos
                $skipDir = false;
                foreach ($excludeDirs as $excludeDir) {
                    if (strpos($file->getPathname(), $excludeDir) !== false) {
                        $skipDir = true;
                        break;
                    }
                }
                if ($skipDir) continue;

                // Generar hash del archivo actual
                $currentFileHash = $this->generateFileHash($file->getPathname());

                // Comparar hash
                if ($currentFileHash === $fileHash) {
                    // Convertir a ruta relativa al proyecto
                    $relativePath = substr($file->getPathname(), strlen($dir) + 1);
                    $foundFiles[] = $relativePath;
                    return true;
                }
            }
        } catch (\Exception $e) {
            $this->error("Error al buscar archivos: " . $e->getMessage());
        }

        return false;
    }

    /**
     * Listar tags de archivos con manejo de archivos eliminados
     * 
     * @return void
     */
    private function listTags()
    {
        // Obtener todos los archivos de tags
        $tagFiles = glob($this->tagsDir . '/*.tags');
        
        // Agrupar tags por nombre
        $tagGroups = [];
        $totalTags = 0;
        $filesWithDeletedReferences = 0;

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if (!$tagData) {
                continue;
            }

            foreach ($tagData['tags'] as $tag) {
                $tag = trim($tag);
                if (!isset($tagGroups[$tag])) {
                    $tagGroups[$tag] = [
                        'files' => [],
                        'count' => 0
                    ];
                }

                // Verificar si el archivo existe
                $filePath = $this->getFilePathFromTagFile($tagFile);
                if ($filePath && file_exists($filePath)) {
                    $tagGroups[$tag]['files'][] = $filePath;
                    $tagGroups[$tag]['count']++;
                } else {
                    $tagGroups[$tag]['files'][] = '<fg=red>Archivo no encontrado</>';
                    $filesWithDeletedReferences++;
                }
            }
            $totalTags++;
        }

        // Ordenar tags alfabéticamente
        ksort($tagGroups);

        // Mostrar resultados
        $this->line("\n📋 Etiquetas en el proyecto:");
        foreach ($tagGroups as $tag => $tagInfo) {
            $this->line("  • <fg=yellow>$tag</> (usado en {$tagInfo['count']} archivo" . ($tagInfo['count'] != 1 ? 's' : '') . "):");
            
            // Mostrar hasta 5 archivos
            $displayFiles = array_slice($tagInfo['files'], 0, 5);
            foreach ($displayFiles as $file) {
                $this->line("    - $file");
            }

            // Indicar si hay más archivos
            if (count($tagInfo['files']) > 5) {
                $remainingCount = count($tagInfo['files']) - 5;
                $this->line("    ... y $remainingCount más");
            }
        }

        // Estadísticas adicionales
        $this->line("\n📊 Resumen:");
        $this->line("  • Total de etiquetas: <fg=green>$totalTags</>");
        $this->line("  • Archivos con referencias eliminadas: <fg=red>$filesWithDeletedReferences</>");

        // Sugerencia de limpieza si hay referencias a archivos eliminados
        if ($filesWithDeletedReferences > 0) {
            $this->warn("\n⚠️ Hay referencias a archivos eliminados. Considere limpiar los tags.");
            $this->line("   Puede usar: <fg=yellow>php artisan file:tag cleanup</>");
        }
    }

    /**
     * Obtener la ruta del archivo desde un archivo de tags
     * 
     * @param string $tagFile
     * @return string|null
     */
    private function getFilePathFromTagFile($tagFile)
    {
        try {
            $tagData = $this->readTagFile($tagFile);
            return $tagData['file'] ?? null;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Limpiar tags de archivos eliminados
     * 
     * @return void
     */
    private function cleanupDeletedFileTags()
    {
        $tagFiles = glob($this->tagsDir . '/*.tags');
        $deletedCount = 0;

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if (!$tagData || !isset($tagData['file']) || !file_exists($tagData['file'])) {
                // Eliminar archivo de tags si el archivo original no existe
                unlink($tagFile);
                $deletedCount++;
            }
        }

        if ($deletedCount > 0) {
            $this->info("🧹 Limpieza completada. Se eliminaron $deletedCount archivos de tags huérfanos.");
        } else {
            $this->line("✅ No se encontraron archivos de tags huérfanos.");
        }
    }

    /**
     * Método para manejar la limpieza de tags
     * 
     * @return void
     */
    private function handleTagCleanup()
    {
        $this->cleanupDeletedFileTags();
    }

    /**
     * Generar hash consistente de un archivo
     */
    private function generateFileHash($file)
    {
        return md5(realpath($file));
    }

    /**
     * Resolver ruta de archivo con validaciones amigables
     * 
     * @param string $path
     * @return string|null
     */
    private function resolveFilePath($path)
    {
        // Manejar caso de ruta vacía
        if (empty($path)) {
            $this->error('Debe especificar una ruta de archivo válida.');
            return null;
        }

        // Normalizar separadores de ruta
        $normalizedPath = str_replace(['\\', '//'], '/', trim($path));
        
        // Intentar resolver rutas relativas
        $possiblePaths = [
            base_path($normalizedPath),           // Ruta relativa al proyecto
            $normalizedPath,                      // Ruta original
            getcwd() . '/' . $normalizedPath,     // Ruta relativa al directorio actual
            app_path($normalizedPath),            // Ruta relativa a app/
            public_path($normalizedPath),         // Ruta relativa a public/
            storage_path($normalizedPath)         // Ruta relativa a storage/
        ];

        foreach ($possiblePaths as $possiblePath) {
            if (file_exists($possiblePath)) {
                return realpath($possiblePath);
            }
        }

        // Analizar posibles errores comunes
        $this->analyzePathError($normalizedPath);

        // Sugerir rutas similares si no se encuentra
        $similarPaths = $this->findSimilarPaths($normalizedPath);

        // Mensaje de error personalizado
        $this->error("❌ No se pudo encontrar el archivo: <fg=yellow>$normalizedPath</>");
        
        // Contexto adicional
        $this->line("\n📍 Contexto actual:");
        $this->line("  • Directorio actual: " . getcwd());
        $this->line("  • Ruta base del proyecto: " . base_path());

        if (!empty($similarPaths)) {
            $this->line("\n🔍 ¿Quizás quiso decir?:");
            foreach ($similarPaths as $similarPath) {
                $this->line("  • <fg=green>$similarPath</>");
            }
        }

        $this->line("\n💡 Consejos:");
        $this->line("  • Verifique la ortografía de la ruta");
        $this->line("  • Use rutas relativas desde la raíz del proyecto");
        $this->line("  • Asegúrese de que el archivo exista");

        return null;
    }

    /**
     * Analizar posibles errores en la ruta
     * 
     * @param string $path
     */
    private function analyzePathError($path)
    {
        // Verificar errores comunes
        $commonErrors = [
            'Ruta con espacios en blanco' => str_contains($path, ' '),
            'Ruta con caracteres especiales' => preg_match('/[^a-zA-Z0-9\/\.\-_]/', $path),
            'Ruta con mayúsculas inconsistentes' => $path !== strtolower($path) && $path === ucfirst($path)
        ];

        $this->line("\n⚠️ Posibles problemas detectados:");
        $hasErrors = false;
        foreach ($commonErrors as $error => $condition) {
            if ($condition) {
                $this->line("  • <fg=yellow>$error</>");
                $hasErrors = true;
            }
        }

        if (!$hasErrors) {
            $this->line("  • No se detectaron errores comunes");
        }
    }

    /**
     * Buscar rutas similares
     * 
     * @param string $path
     * @return array
     */
    private function findSimilarPaths($path)
    {
        try {
            // Buscar archivos con nombres similares
            $finder = new \Symfony\Component\Finder\Finder();
            $finder->files()
                ->in(base_path())
                ->name('*' . basename($path) . '*')
                ->depth('< 5');  // Limitar profundidad de búsqueda

            $similarPaths = [];
            foreach ($finder as $file) {
                $similarPaths[] = $file->getRelativePathname();
                
                // Limitar a 5 sugerencias
                if (count($similarPaths) >= 5) {
                    break;
                }
            }

            return $similarPaths;
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Método para manejar la flexibilidad de los argumentos
     */
    private function processArguments()
    {
        $action = $this->argument('action');
        $file = $this->argument('file');
        $tag = $this->argument('tag');

        // Ajustar argumentos según la acción
        switch ($action) {
            case 'find':
                // Si solo se proporciona un argumento, asumimos que es el tag
                if ($file && !$tag) {
                    $tag = $file;
                    $file = null;
                }
                break;
            case 'list':
                // Si no se proporciona archivo, usar el primer argumento como archivo
                if (!$file && $tag) {
                    $file = $tag;
                    $tag = null;
                }
                break;
        }

        // Procesar rutas relativas y cortas
        if ($file) {
            // Convertir rutas relativas a absolutas
            if (!str_starts_with($file, '/')) {
                // Intentar resolver rutas relativas
                $resolvedPath = $this->resolveRelativePath($file);
                $file = $resolvedPath ?: $file;
            }
        }

        return [$file, $tag];
    }

    /**
     * Resolver rutas relativas dentro del proyecto
     */
    private function resolveRelativePath($path)
    {
        // Rutas base para búsqueda
        $basePaths = [
            base_path(),
            base_path('app'),
            base_path('app/Http/Controllers'),
            base_path('app/Models'),
            base_path('database'),
            base_path('routes'),
            base_path('resources'),
            base_path('tests')
        ];

        foreach ($basePaths as $basePath) {
            $fullPath = $basePath . '/' . $path;
            
            // Verificar si el archivo existe
            if (file_exists($fullPath)) {
                return $fullPath;
            }

            // Buscar archivos que contengan el nombre
            $matchingFiles = glob($basePath . '/*' . $path . '*');
            if (!empty($matchingFiles)) {
                // Devolver el primer archivo coincidente
                return $matchingFiles[0];
            }
        }

        return null;
    }

    /**
     * Convertir ruta absoluta a ruta relativa al proyecto
     */
    private function convertToRelativePath($absolutePath)
    {
        $basePath = base_path();
        
        // Quitar el base path del inicio de la ruta absoluta
        if (strpos($absolutePath, $basePath) === 0) {
            $relativePath = substr($absolutePath, strlen($basePath) + 1);
            return $relativePath;
        }
        
        return $absolutePath;
    }

    /**
     * Validar formato de etiqueta
     * 
     * @param string $tag
     * @return bool
     */
    private function validateTag(string $tag): bool
    {
        // Permitir etiquetas alfanuméricas con espacios y guiones
        return preg_match('/^[a-zA-Z0-9\s\-]+$/', $tag) === 1;
    }

    /**
     * Eliminar etiquetas duplicadas
     * 
     * @param array $tags
     * @return array
     */
    private function removeDuplicateTags(array $tags): array
    {
        return array_unique(array_map('trim', $tags));
    }

    /**
     * Leer contenido de un archivo de tags
     * 
     * @param string $tagFile
     * @return array|null
     */
    private function readTagFile($tagFile)
    {
        try {
            $content = File::get($tagFile);
            $lines = explode("\n", $content);
            $tagData = [
                'file' => null,
                'tags' => []
            ];

            foreach ($lines as $line) {
                $line = trim($line);
                if (empty($line)) {
                    continue;
                }

                if (strpos($line, 'file:') === 0) {
                    $tagData['file'] = substr($line, 5);
                } else {
                    $tagData['tags'][] = $line;
                }
            }

            return $tagData;
        } catch (\Exception $e) {
            return null;
        }
    }
}
