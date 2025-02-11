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
        {action : Acción a realizar (add|find|list|remove)} 
        {file? : Ruta del archivo o etiqueta a buscar} 
        {tag? : Etiqueta a añadir o buscar en directorios específicos}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gestionar etiquetas de archivos del proyecto';

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
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $action = $this->argument('action');

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
                $this->error('Acción no válida. Use add, find, list o remove.');
                return 1;
        }
    }

    /**
     * Añadir una etiqueta a un archivo
     */
    private function addTag()
    {
        list($file, $tag) = $this->processArguments();

        if (!$file || !$tag) {
            $this->error('Debe especificar un archivo y una etiqueta');
            return 1;
        }

        // Resolver ruta absoluta
        $absoluteFile = realpath($file);

        if (!$absoluteFile || !File::exists($absoluteFile)) {
            $this->error("El archivo $file no existe");
            return 1;
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
            ? array_filter(explode("\n", File::get($tagFile))) 
            : [];

        // Añadir tag si no existe
        if (!in_array($tag, $existingTags)) {
            $existingTags[] = $tag;
            File::put($tagFile, implode("\n", $existingTags));
            
            // Mostrar ruta relativa
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            $this->info("Tag '$tag' añadido a $relativeFile");
        } else {
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            $this->warn("El tag '$tag' ya existe para $relativeFile");
        }

        return 0;
    }

    /**
     * Buscar archivos por etiqueta
     */
    private function findFiles()
    {
        list($file, $tag) = $this->processArguments();

        if (!$tag) {
            $this->error('Debe especificar una etiqueta para buscar');
            return 1;
        }

        $searchDirs = $file ? explode(',', $file) : [base_path()];

        // Convertir directorios de búsqueda a rutas absolutas
        $absoluteSearchDirs = array_map(function($dir) {
            return realpath($dir) ?: $dir;
        }, $searchDirs);

        // Spinner personalizado
        $spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
        $spinnerIndex = 0;

        $this->output->write("<fg=yellow>{$spinner[$spinnerIndex]}</> Buscando archivos con el tag '$tag'...");

        $foundFiles = [];

        // Buscar archivos con el tag
        foreach (File::files($this->tagsDir) as $tagFile) {
            // Actualizar spinner
            $spinnerIndex = ($spinnerIndex + 1) % count($spinner);
            $this->output->write("\r<fg=yellow>{$spinner[$spinnerIndex]}</> Buscando archivos con el tag '$tag'...");

            $content = File::get($tagFile);
            $tags = array_filter(explode("\n", $content));
            
            if (in_array($tag, $tags)) {
                $fileHash = pathinfo($tagFile, PATHINFO_FILENAME);
                
                // Buscar el archivo en los directorios especificados
                foreach ($absoluteSearchDirs as $dir) {
                    $this->findFileByHash($dir, $fileHash, $foundFiles);
                }
            }
        }

        // Limpiar línea de spinner
        $this->output->write("\r" . str_repeat(' ', 50) . "\r");

        if ($foundFiles) {
            $this->info("Archivos encontrados con el tag '$tag':");
            $relativePaths = array_map([$this, 'convertToRelativePath'], $foundFiles);
            foreach ($relativePaths as $relativePath) {
                // Crear enlace clickable con la ruta absoluta completa
                $absolutePath = base_path($relativePath);
                $this->line(sprintf(
                    '<href=%s>%s</>', 
                    $absolutePath, 
                    $relativePath
                ));
            }
        } else {
            $this->warn("No se encontraron archivos con el tag '$tag'");
        }

        return 0;
    }

    /**
     * Buscar archivos por hash en un directorio
     */
    private function findFileByHash($dir, $fileHash, &$foundFiles)
    {
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS)
        );

        foreach ($iterator as $file) {
            if ($file->isFile()) {
                $currentHash = $this->generateFileHash($file->getPathname());
                if ($currentHash === $fileHash) {
                    $foundFiles[] = $file->getPathname();
                }
            }
        }
    }

    /**
     * Listar tags de un archivo
     */
    private function listTags()
    {
        list($file, $tag) = $this->processArguments();

        if (!$file) {
            $this->error('Debe especificar un archivo');
            return 1;
        }

        // Resolver ruta absoluta si es necesario
        $absoluteFile = realpath($file);

        if (!$absoluteFile || !File::exists($absoluteFile)) {
            $this->error("El archivo $file no existe");
            return 1;
        }

        $fileHash = $this->generateFileHash($absoluteFile);
        $tagFile = $this->tagsDir . '/' . $fileHash . '.tags';

        if (File::exists($tagFile)) {
            $tags = array_filter(explode("\n", File::get($tagFile)));
            
            // Convertir ruta absoluta a relativa
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            
            $this->info(sprintf(
                "Tags para <href=%s>%s</href>:", 
                $absoluteFile, 
                $relativeFile
            ));
            foreach ($tags as $tag) {
                $this->line($tag);
            }
        } else {
            $relativeFile = $this->convertToRelativePath($absoluteFile);
            $this->warn("No hay tags para $relativeFile");
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
        $absoluteFile = realpath($file);

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
}
