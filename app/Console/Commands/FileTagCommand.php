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

        // Validar que el archivo exista
        if (!File::exists($file)) {
            $this->error("El archivo $file no existe");
            return 1;
        }

        // Generar hash del archivo
        $fileHash = $this->generateFileHash($file);
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
            $this->info("Tag '$tag' añadido a $file");
        } else {
            $this->warn("El tag '$tag' ya existe para $file");
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

        $foundFiles = [];

        // Buscar archivos con el tag
        foreach (File::files($this->tagsDir) as $tagFile) {
            $content = File::get($tagFile);
            $tags = array_filter(explode("\n", $content));
            
            if (in_array($tag, $tags)) {
                $fileHash = pathinfo($tagFile, PATHINFO_FILENAME);
                
                // Buscar el archivo en los directorios especificados
                foreach ($searchDirs as $dir) {
                    $this->findFileByHash($dir, $fileHash, $foundFiles);
                }
            }
        }

        if ($foundFiles) {
            $this->info("Archivos encontrados con el tag '$tag':");
            foreach ($foundFiles as $foundFile) {
                $this->line($foundFile);
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

        if (!File::exists($file)) {
            $this->error("El archivo $file no existe");
            return 1;
        }

        $fileHash = $this->generateFileHash($file);
        $tagFile = $this->tagsDir . '/' . $fileHash . '.tags';

        if (File::exists($tagFile)) {
            $tags = array_filter(explode("\n", File::get($tagFile)));
            $this->info("Tags para $file:");
            foreach ($tags as $tag) {
                $this->line($tag);
            }
        } else {
            $this->warn("No hay tags para $file");
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

        $fileHash = $this->generateFileHash($file);
        $tagFile = $this->tagsDir . '/' . $fileHash . '.tags';

        if (!File::exists($tagFile)) {
            $this->error("No hay tags para este archivo");
            return 1;
        }

        $tags = array_filter(explode("\n", File::get($tagFile)));
        $index = array_search($tag, $tags);

        if ($index !== false) {
            unset($tags[$index]);
            File::put($tagFile, implode("\n", $tags));
            $this->info("Tag '$tag' eliminado de $file");
        } else {
            $this->warn("El tag '$tag' no existe para $file");
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

        return [$file, $tag];
    }
}
