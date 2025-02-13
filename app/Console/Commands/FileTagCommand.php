<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class FileTagCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'file:tag 
        {action? : Acción a realizar (add|find|list|remove)} 
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
            "  php artisan file:tag remove app/Models/User.php importante"
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
            default:
                $this->error('Acción no válida. Use add, find, list, remove o help para ver ayuda.');
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

            // Generar hash del archivo
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
     * Listar tags de archivos
     */
    private function listTags()
    {
        // Obtener todos los archivos de tags
        $tagFiles = File::glob($this->tagsDir . '/*.tags');

        // Recolectar todas las etiquetas únicas
        $allTags = [];
        $tagFileCount = [];

        foreach ($tagFiles as $tagFile) {
            // Leer contenido de tags
            $existingTags = array_filter(explode("\n", File::get($tagFile)));
            
            // Obtener el hash del archivo original
            $fileHash = basename($tagFile, '.tags');
            
            // Buscar el archivo original para obtener su ruta relativa
            $foundFiles = [];
            $this->findFileByHash(base_path(), $fileHash, $foundFiles);
            $filePath = $foundFiles[0] ?? 'Archivo no encontrado';

            // Agregar cada etiqueta
            foreach ($existingTags as $tag) {
                if (!isset($allTags[$tag])) {
                    $allTags[$tag] = [];
                    $tagFileCount[$tag] = 0;
                }
                $allTags[$tag][] = $filePath;
                $tagFileCount[$tag]++;
            }
        }

        // Ordenar etiquetas alfabéticamente
        ksort($allTags);

        // Mostrar resultados
        if (!empty($allTags)) {
            $this->line("\n<info>Etiquetas en el proyecto:</info>");
            
            foreach ($allTags as $tag => $files) {
                $this->line(sprintf(
                    "  • <fg=yellow>%s</> (usado en %d archivo%s):", 
                    $tag, 
                    count($files), 
                    count($files) != 1 ? 's' : ''
                ));
                
                // Mostrar archivos con esta etiqueta (limitado a 5 para no saturar)
                $displayFiles = array_slice($files, 0, 5);
                foreach ($displayFiles as $file) {
                    $this->line("    - $file");
                }
                
                // Indicar si hay más archivos
                if (count($files) > 5) {
                    $this->line(sprintf("    ... y %d más", count($files) - 5));
                }
            }

            $this->line(sprintf(
                "\n<info>Total de etiquetas:</info> %d", 
                count($allTags)
            ));
        } else {
            $this->warn("No se encontraron etiquetas en el proyecto.");
        }

        return 0;
    }

    /**
     * Eliminar un tag de un archivo
     */
    private function removeTag()
    {
        list($file, $tag) = $this->processArguments();

        if (!$file || !$tag) {
            $this->error('Debe especificar un archivo y una etiqueta');
            return 1;
        }

        // Resolver ruta absoluta
        $absoluteFile = $this->resolveFilePath($file);

        if (!$absoluteFile || !File::exists($absoluteFile)) {
            $this->error("El archivo $file no existe");
            return 1;
        }

        $fileHash = $this->generateFileHash($absoluteFile);
        $tagFile = $this->tagsDir . '/' . $fileHash . '.tags';

        if (!File::exists($tagFile)) {
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            $this->error("No hay tags para el archivo $relativeFile");
            return 1;
        }

        $tags = array_filter(explode("\n", File::get($tagFile)));
        $index = array_search($tag, $tags);

        if ($index !== false) {
            unset($tags[$index]);
            File::put($tagFile, implode("\n", $tags));
            
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            $this->info("Tag '$tag' eliminado de $relativeFile");
        } else {
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            $this->warn("El tag '$tag' no existe para $relativeFile");
        }

        return 0;
    }

    /**
     * Generar hash consistente de un archivo
     */
    private function generateFileHash($file)
    {
        return md5(realpath($file));
    }

    /**
     * Mejora: Optimizar la resolución de rutas para mayor flexibilidad
     * Se añade soporte para rutas más complejas y manejo de excepciones
     */
    protected function resolveFilePath($path)
    {
        // Implementar resolución más robusta de rutas
        $normalizedPath = str_replace(['\\', '//'], '/', $path);
        
        // Añadir validación de rutas
        if (!file_exists($normalizedPath)) {
            throw new \InvalidArgumentException("La ruta especificada no existe: $normalizedPath");
        }
        
        return realpath($normalizedPath);
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
}
