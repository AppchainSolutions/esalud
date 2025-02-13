<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Symfony\Component\Finder\Finder;

class FileTagCommand extends Command
{
    /**
     * The console command signature.
     *
     * @var string
     */
    protected $signature = 'file:tag 
        {action? : La acción a realizar (add, find, list, remove, cleanup, delete-tag, replace-tag)}
        {tag? : Etiqueta a eliminar o reemplazar}
        {replacement? : Nueva etiqueta para reemplazar}
        {file? : Archivo para añadir/eliminar etiquetas}
        {tags?* : Etiquetas a añadir/buscar/eliminar}
        {--f|force : Forzar la operación sin confirmación}';

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
    private function displayExtendedHelp()
    {
        $this->line("\n📋 Gestión de Etiquetas de Archivos 📋");
        $this->line("=====================================");
        $this->line("Administra etiquetas para archivos en tu proyecto.\n");
        
        $this->line("🏷️ Acciones disponibles:");
        $this->line("  • add         : Añadir una etiqueta a un archivo");
        $this->line("  • find        : Buscar archivos por etiqueta");
        $this->line("  • list        : Listar todas las etiquetas");
        $this->line("  • remove      : Eliminar una etiqueta de un archivo");
        $this->line("  • cleanup     : Limpiar referencias a archivos eliminados");
        $this->line("  • delete-tag  : Eliminar un tag de todos los archivos");
        $this->line("  • replace-tag : Reemplazar un tag por otro\n");
        
        $this->line("🚀 Ejemplos de uso:");
        $this->line("  # Añadir etiqueta");
        $this->line("  php artisan file:tag add app/Models/User.php importante\n");
        
        $this->line("  # Buscar archivos por etiqueta");
        $this->line("  php artisan file:tag find importante\n");
        
        $this->line("  # Eliminar tag de un archivo");
        $this->line("  php artisan file:tag remove app/Models/User.php importante\n");
        
        $this->line("  # Eliminar un tag de todos los archivos");
        $this->line("  php artisan file:tag delete-tag urgente\n");
        
        $this->line("  # Reemplazar un tag");
        $this->line("  php artisan file:tag replace-tag antiguo nuevo\n");
        
        $this->line("🔧 Opciones adicionales:");
        $this->line("  • -f, --force : Forzar operación sin confirmación\n");
        
        $this->line("📝 Restricciones:");
        $this->line("  • Etiquetas solo pueden contener letras, números, espacios y guiones");
        $this->line("  • No se permiten caracteres especiales");
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Obtener argumentos sin procesar
        $rawArguments = array_values(array_filter($this->arguments()));
        
        // Depuración de argumentos
        $this->line("🔍 Depuración de argumentos sin procesar:");
        foreach ($rawArguments as $index => $arg) {
            $this->line("  • Argumento $index: " . (is_array($arg) ? implode(', ', $arg) : $arg));
        }

        // Verificar si hay suficientes argumentos
        if (count($rawArguments) < 2) {
            $this->error('Debe especificar al menos una acción.');
            $this->displayExtendedHelp();
            return 1;
        }

        // Extraer argumentos de manera flexible
        $action = strtolower($rawArguments[1]);

        // Extraer archivo y tags
        $file = null;
        $tags = [];

        // Buscar archivo y tags en los argumentos restantes
        for ($i = 2; $i < count($rawArguments); $i++) {
            $currentArg = $rawArguments[$i];
            
            // Ignorar argumentos vacíos
            if (empty($currentArg)) continue;

            // Intentar resolver como archivo si aún no se ha encontrado
            if (empty($file)) {
                $resolvedFile = $this->resolveFilePath($currentArg);
                if ($resolvedFile) {
                    $file = $resolvedFile;
                    continue;
                }
            }

            // Si ya se encontró el archivo, agregar como tag
            $tags[] = $currentArg;
        }

        // Depuración de argumentos procesados
        $this->line("🔍 Depuración de argumentos procesados:");
        $this->line("  • Acción: " . $action);
        $this->line("  • Archivo: " . ($file ?? 'N/A'));
        $this->line("  • Tags: " . implode(', ', $tags));
        
        // Manejar diferentes acciones
        switch ($action) {
            case 'add':
                if (empty($file)) {
                    $this->error('Debe especificar un archivo para añadir etiquetas.');
                    $this->line('Ejemplo: php artisan file:tag add /ruta/al/archivo.php etiqueta1 etiqueta2');
                    return 1;
                }
                
                return $this->processMultipleTags($file, $tags);
            
            case 'find':
                // Si no hay tags, mostrar error
                if (empty($tags)) {
                    $this->error('Debe especificar al menos una etiqueta para buscar.');
                    $this->displayExtendedHelp();
                    return 1;
                }
                
                return $this->findFiles($tags);
            
            case 'list':
                return $this->listTags();
            
            case 'remove':
                if (empty($file)) {
                    $this->error('Debe especificar un archivo para eliminar etiquetas.');
                    return 1;
                }
                
                return $this->removeTag($file, $tags);
            
            case 'cleanup':
                return $this->handleTagCleanup();
            
            case 'delete-tag':
                return $this->deleteTag();
            
            case 'replace-tag':
                return $this->replaceTag();
            
            case 'help':
            default:
                $this->displayExtendedHelp();
                return 0;
        }
    }

    /**
     * Buscar archivos por etiquetas
     * 
     * @param array $tags
     * @return int
     */
    private function findFiles(array $tags)
    {
        // Depuración: mostrar tags originales
        $this->line("🔍 Tags originales: " . implode(', ', $tags));

        // Normalizar y validar tags
        $tags = $this->normalizeAndValidateTags($tags);
        
        // Depuración: mostrar tags normalizados
        $this->line("✅ Tags normalizados: " . implode(', ', $tags));

        // Si no hay tags válidos, salir
        if (empty($tags)) {
            $this->error('No se encontraron etiquetas válidas.');
            return 1;
        }

        // Buscar archivos con las etiquetas especificadas
        $searchResults = $this->searchFilesByTags($tags);
        $matchedFiles = $searchResults['exact_matches'];
        $partialMatchFiles = $searchResults['partial_matches'];

        // Mostrar resultados
        if (empty($matchedFiles) && empty($partialMatchFiles)) {
            $this->warn("No se encontraron archivos con la" . 
                (count($tags) > 1 ? 's' : '') . 
                " etiqueta" . (count($tags) > 1 ? 's' : '') . 
                ": " . implode(', ', $tags));
            
            // Sugerir etiquetas similares
            $this->suggestSimilarTags($tags);
            
            return 0;
        }

        // Encabezado de resultados
        $this->line("\n🏷️ <info>Archivos con etiqueta" . 
            (count($tags) > 1 ? 's' : '') . 
            ": " . implode(', ', $tags) . "</info>");

        // Mostrar archivos encontrados
        if (!empty($matchedFiles)) {
            $this->line("\n✅ Coincidencias exactas:");
            foreach ($matchedFiles as $file) {
                $this->line("  • <fg=green>" . $this->convertToRelativePath($file) . "</>");
            }
        }

        // Mostrar coincidencias parciales
        if (!empty($partialMatchFiles)) {
            $this->line("\n🔍 Coincidencias parciales:");
            foreach ($partialMatchFiles as $file) {
                $this->line("  • <fg=yellow>" . $this->convertToRelativePath($file) . "</>");
            }
        }

        // Resumen
        $this->line("\n📊 Resumen:");
        $this->line("  • Total de archivos con coincidencia exacta: <fg=green>" . count($matchedFiles) . "</>");
        $this->line("  • Total de archivos con coincidencia parcial: <fg=yellow>" . count($partialMatchFiles) . "</>");

        return 0;
    }

    /**
     * Buscar archivos por etiquetas
     * 
     * @param array $tags
     * @return array
     */
    private function searchFilesByTags(array $tags)
    {
        // Obtener todos los archivos de tags
        $tagFiles = glob($this->tagsDir . '/*.tags');
        $matchedFiles = [];
        $partialMatchFiles = [];

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if (!$tagData || !isset($tagData['file'])) {
                continue;
            }

            // Verificar si el archivo existe
            if (!file_exists($tagData['file'])) {
                continue;
            }

            // Verificar si todas las etiquetas buscadas están en el archivo
            $fileHasTags = true;
            $matchedTagsCount = 0;
            foreach ($tags as $tag) {
                if (in_array($tag, $tagData['tags'])) {
                    $matchedTagsCount++;
                } else {
                    $fileHasTags = false;
                }
            }

            if ($fileHasTags) {
                $matchedFiles[] = $tagData['file'];
            } elseif ($matchedTagsCount > 0) {
                // Archivos con coincidencia parcial
                $partialMatchFiles[] = [
                    'file' => $tagData['file'],
                    'matched_tags' => $matchedTagsCount
                ];
            }
        }

        // Ordenar archivos con coincidencia parcial por número de tags coincidentes
        usort($partialMatchFiles, function($a, $b) {
            return $b['matched_tags'] - $a['matched_tags'];
        });

        return [
            'exact_matches' => $matchedFiles,
            'partial_matches' => array_map(function($match) {
                return $match['file'];
            }, $partialMatchFiles)
        ];
    }

    /**
     * Sugerir etiquetas similares cuando no se encuentran resultados
     * 
     * @param array $searchTags
     */
    private function suggestSimilarTags(array $searchTags)
    {
        // Obtener todas las etiquetas existentes
        $allTags = $this->getAllExistingTags();

        // Buscar etiquetas similares
        $suggestions = [];
        foreach ($searchTags as $searchTag) {
            $similarTags = $this->findSimilarTags($searchTag, $allTags);
            if (!empty($similarTags)) {
                $suggestions[$searchTag] = $similarTags;
            }
        }

        // Mostrar sugerencias
        if (!empty($suggestions)) {
            $this->line("\n💡 Sugerencias:");
            foreach ($suggestions as $originalTag => $similarTags) {
                $this->line("  • Para '<fg=yellow>$originalTag</>', quizás quiso decir:");
                foreach ($similarTags as $similarTag) {
                    $this->line("    - <fg=green>$similarTag</>");
                }
            }
        }
    }

    /**
     * Obtener todas las etiquetas existentes
     * 
     * @return array
     */
    private function getAllExistingTags()
    {
        $allTags = [];
        $tagFiles = glob($this->tagsDir . '/*.tags');

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if ($tagData && isset($tagData['tags'])) {
                $allTags = array_merge($allTags, $tagData['tags']);
            }
        }

        return array_unique($allTags);
    }

    /**
     * Encontrar etiquetas similares
     * 
     * @param string $searchTag
     * @param array $allTags
     * @return array
     */
    private function findSimilarTags($searchTag, $allTags, $maxSuggestions = 3)
    {
        // Calcular distancia de Levenshtein
        $similarTags = [];
        foreach ($allTags as $tag) {
            $distance = levenshtein($searchTag, $tag);
            
            // Considerar tags con distancia menor a 3 como similares
            if ($distance > 0 && $distance < 3) {
                $similarTags[] = [
                    'tag' => $tag,
                    'distance' => $distance
                ];
            }
        }

        // Ordenar por distancia
        usort($similarTags, function($a, $b) {
            return $a['distance'] - $b['distance'];
        });

        // Devolver solo los tags (limitando sugerencias)
        return array_slice(array_column($similarTags, 'tag'), 0, $maxSuggestions);
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
        // Obtener todos los archivos de tags
        $tagFiles = glob($this->tagsDir . '/*.tags');
        
        // Contadores para seguimiento
        $totalFiles = count($tagFiles);
        $cleanedFiles = 0;
        $removedReferences = 0;

        // Iterar sobre cada archivo de tags
        foreach ($tagFiles as $tagFile) {
            // Leer el contenido del archivo de tags
            $tagData = $this->readTagFile($tagFile);
            
            // Si no se puede leer el archivo, saltarlo
            if (!$tagData) {
                continue;
            }

            $originalFilePath = $tagData['file'];
            $tags = $tagData['tags'];

            // Verificar si el archivo original existe
            if (!file_exists($originalFilePath)) {
                // Crear un nuevo archivo de tags sin la referencia al archivo eliminado
                $newTagFile = $this->tagsDir . '/' . md5($originalFilePath) . '.tags';
                
                // Si ya existe un archivo de tags con las mismas etiquetas, fusionar
                if (file_exists($newTagFile)) {
                    $existingTagData = $this->readTagFile($newTagFile);
                    $tags = array_unique(array_merge($existingTagData['tags'], $tags));
                }

                // Guardar las etiquetas en un nuevo archivo
                if (!empty($tags)) {
                    $this->saveTagFile($newTagFile, [
                        'file' => 'DELETED:' . $originalFilePath,
                        'tags' => $tags
                    ]);
                }

                // Eliminar el archivo de tags original
                unlink($tagFile);
                
                $cleanedFiles++;
                $removedReferences++;
            }
        }

        // Mostrar resumen de la limpieza
        $this->line("\n🧹 Limpieza de Etiquetas:");
        $this->line("  • Total de archivos de tags: <fg=yellow>$totalFiles</>");
        $this->line("  • Archivos de tags limpiados: <fg=green>$cleanedFiles</>");
        $this->line("  • Referencias a archivos eliminados removidas: <fg=red>$removedReferences</>");
        
        // Mensaje final
        if ($cleanedFiles > 0) {
            $this->info("\n✅ Limpieza de tags completada exitosamente.");
        } else {
            $this->comment("\n❔ No se encontraron referencias a archivos eliminados.");
        }
    }

    /**
     * Método para manejar la limpieza de tags
     * 
     * @return int
     */
    private function handleTagCleanup()
    {
        // Verificar si se ha forzado la operación
        $force = $this->option('force');

        // Confirmar la acción de limpieza si no está forzada
        if (!$force && !$this->confirm('¿Está seguro de que desea limpiar las referencias a archivos eliminados? Esta acción no eliminará las etiquetas.')) {
            $this->line('Operación cancelada.');
            return 0;
        }

        // Realizar la limpieza
        $this->cleanupDeletedFileTags();

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
     * Resolver ruta de archivo con validaciones amigables
     * 
     * @param string $path
     * @return string|null
     */
    private function resolveFilePath($path)
    {
        // Eliminar espacios al inicio y final
        $path = trim($path);

        // Si está vacío, retornar null
        if (empty($path)) {
            return null;
        }

        // Convertir a ruta absoluta si es una ruta relativa
        if (!str_starts_with($path, '/')) {
            $path = base_path($path);
        }

        // Normalizar la ruta (eliminar '..' y '.')
        $path = realpath($path);

        // Verificar si el archivo existe
        if ($path && is_file($path)) {
            return $path;
        }

        // Si no existe, intentar encontrar rutas similares
        $similarPaths = $this->findSimilarPaths($path);
        
        if (!empty($similarPaths)) {
            $this->warn("El archivo no se encontró exactamente. ¿Quizás quiso decir?:");
            foreach ($similarPaths as $similarPath) {
                $this->line("  • " . $this->convertToRelativePath($similarPath));
            }
        }

        return null;
    }

    /**
     * Buscar rutas similares
     * 
     * @param string $path
     * @return array
     */
    private function findSimilarPaths($path)
    {
        // Buscar archivos con nombres similares
        $baseName = basename($path);
        $directory = dirname($path);

        // Si no se puede encontrar el directorio, usar base del proyecto
        if ($directory === '.') {
            $directory = base_path();
        }

        $similarFiles = [];
        
        // Buscar archivos con nombres similares
        try {
            $finder = new Finder();
            $finder->files()
                ->in($directory)
                ->name('*' . $baseName . '*')
                ->depth('< 5'); // Limitar profundidad de búsqueda

            foreach ($finder as $file) {
                $similarFiles[] = $file->getRealPath();
            }
        } catch (\Exception $e) {
            // Manejar errores de búsqueda
        }

        return $similarFiles;
    }

    /**
     * Validar formato de etiqueta
     * 
     * @param string $tag
     * @return bool
     */
    private function validateTag(string $tag): bool
    {
        // Permitir solo etiquetas en minúsculas, alfanuméricas con espacios y guiones
        return preg_match('/^[a-z0-9\s\-]+$/', $tag) === 1;
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

    /**
     * Normalizar y validar tags
     * 
     * @param array $tags
     * @return array
     */
    private function normalizeAndValidateTags(array $tags): array
    {
        // Depuración: mostrar tags originales
        $this->line("🔍 Tags originales: " . implode(', ', $tags));

        // Manejar caso de tags pasados como string
        if (count($tags) == 1 && strpos($tags[0], ' ') !== false) {
            $tags = explode(' ', $tags[0]);
        }

        // Convertir a minúsculas y eliminar espacios al inicio y final
        $tags = array_map(function($tag) {
            return trim(strtolower($tag));
        }, $tags);

        // Eliminar tags vacíos
        $tags = array_filter($tags);

        // Depuración: mostrar tags después de filtrado
        $this->line("🔄 Tags después de filtrado: " . implode(', ', $tags));

        // Validar cada tag
        $validTags = [];
        foreach ($tags as $tag) {
            if ($this->validateTag($tag)) {
                $validTags[] = $tag;
            } else {
                $this->error("La etiqueta '$tag' no es válida.");
                $this->line("Las etiquetas deben contener solo letras minúsculas, números, espacios y guiones.");
            }
        }

        // Eliminar duplicados
        $validTags = array_unique($validTags);

        // Depuración: mostrar tags válidos
        $this->line("✅ Tags válidos: " . implode(', ', $validTags));

        return $validTags;
    }

    /**
     * Añadir una etiqueta a un archivo
     */
    private function addTag()
    {
        $file = $this->argument('file');
        $tags = $this->option('tags') ?? [];

        // Si no se proporcionan etiquetas, solicitar entrada interactiva
        if (empty($tags)) {
            $tags = $this->ask('Ingrese las etiquetas (separadas por espacios):');
            $tags = explode(' ', $tags);
        }

        // Procesar múltiples etiquetas
        return $this->processMultipleTags($file, $tags);
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

        // Normalizar y validar tags
        $tags = $this->normalizeAndValidateTags($tags);

        foreach ($tags as $tag) {
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
            $tagData = $this->readTagFile($tagFile) ?? ['file' => $absoluteFile, 'tags' => []];
            
            // Añadir tag si no existe
            if (!in_array($tag, $tagData['tags'])) {
                $tagData['tags'][] = $tag;
                
                // Guardar tags
                $this->saveTagFile($tagFile, $tagData);
                
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
     * Guardar archivo de tags
     * 
     * @param string $tagFile
     * @param array $tagData
     */
    private function saveTagFile($tagFile, $tagData)
    {
        $content = "file:" . $tagData['file'] . "\n";
        $content .= implode("\n", $tagData['tags']);
        File::put($tagFile, $content);
    }

    /**
     * Buscar archivos que usan un tag específico
     * 
     * @param string $tag
     * @return array
     */
    private function findFilesWithTag(string $tag): array
    {
        $tagFiles = glob($this->tagsDir . '/*.tags');
        $matchedFiles = [];

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if (!$tagData || !isset($tagData['tags'])) {
                continue;
            }

            if (in_array($tag, $tagData['tags'])) {
                $matchedFiles[] = $tagData['file'];
            }
        }

        return $matchedFiles;
    }

    /**
     * Eliminar un tag específico
     * 
     * @return int
     */
    private function deleteTag()
    {
        // Obtener el tag a eliminar
        $tag = $this->argument('tag');
        
        if (empty($tag)) {
            $this->error('Debe especificar el tag a eliminar.');
            return 1;
        }

        $tag = strtolower(trim($tag));
        $force = $this->option('force');

        // Buscar archivos que usan este tag
        $matchedFiles = $this->findFilesWithTag($tag);

        // Si hay archivos usando el tag, advertir
        if (!empty($matchedFiles) && !$force) {
            $this->warn("⚠️ El tag '$tag' está siendo usado en los siguientes archivos:");
            foreach ($matchedFiles as $file) {
                $this->line("  • " . $this->convertToRelativePath($file));
            }

            if (!$this->confirm("¿Está seguro de que desea eliminar este tag de todos estos archivos?")) {
                $this->line('Operación cancelada.');
                return 0;
            }
        }

        // Eliminar el tag de todos los archivos
        $tagFiles = glob($this->tagsDir . '/*.tags');
        $removedCount = 0;

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if (!$tagData || !isset($tagData['tags'])) {
                continue;
            }

            // Eliminar el tag si existe
            $tagIndex = array_search($tag, $tagData['tags']);
            if ($tagIndex !== false) {
                unset($tagData['tags'][$tagIndex]);
                $tagData['tags'] = array_values($tagData['tags']); // Reindexar

                // Guardar el archivo de tags actualizado
                if (!empty($tagData['tags'])) {
                    $this->saveTagFile($tagFile, $tagData);
                } else {
                    // Si no quedan tags, eliminar el archivo
                    unlink($tagFile);
                }

                $removedCount++;
            }
        }

        $this->info("✅ Tag '$tag' eliminado de $removedCount archivos.");
        return 0;
    }

    /**
     * Reemplazar un tag por otro
     * 
     * @return int
     */
    private function replaceTag()
    {
        // Obtener los tags a reemplazar
        $oldTag = $this->argument('tag');
        $newTag = $this->argument('replacement');
        
        if (empty($oldTag) || empty($newTag)) {
            $this->error('Debe especificar el tag original y el tag de reemplazo.');
            $this->line('Ejemplo: php artisan file:tag replace-tag antiguo nuevo');
            return 1;
        }

        $oldTag = strtolower(trim($oldTag));
        $newTag = strtolower(trim($newTag));
        $force = $this->option('force');

        // Buscar archivos que usan el tag original
        $matchedFiles = $this->findFilesWithTag($oldTag);

        // Si hay archivos usando el tag, advertir
        if (!empty($matchedFiles) && !$force) {
            $this->warn("⚠️ El tag '$oldTag' está siendo usado en los siguientes archivos:");
            foreach ($matchedFiles as $file) {
                $this->line("  • " . $this->convertToRelativePath($file));
            }

            if (!$this->confirm("¿Está seguro de que desea reemplazar '$oldTag' por '$newTag' en todos estos archivos?")) {
                $this->line('Operación cancelada.');
                return 0;
            }
        }

        // Reemplazar el tag en todos los archivos
        $tagFiles = glob($this->tagsDir . '/*.tags');
        $replacedCount = 0;

        foreach ($tagFiles as $tagFile) {
            $tagData = $this->readTagFile($tagFile);
            
            if (!$tagData || !isset($tagData['tags'])) {
                continue;
            }

            // Reemplazar el tag si existe
            $tagIndex = array_search($oldTag, $tagData['tags']);
            if ($tagIndex !== false) {
                $tagData['tags'][$tagIndex] = $newTag;
                
                // Eliminar duplicados
                $tagData['tags'] = array_unique($tagData['tags']);

                // Guardar el archivo de tags actualizado
                $this->saveTagFile($tagFile, $tagData);

                $replacedCount++;
            }
        }

        $this->info("✅ Tag '$oldTag' reemplazado por '$newTag' en $replacedCount archivos.");
        return 0;
    }
}
