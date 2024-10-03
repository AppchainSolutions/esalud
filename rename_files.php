<?php

$directory = 'app/Models';
$files = scandir($directory);

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'php') {
        $newName = pathinfo($file, PATHINFO_FILENAME) . 'Model.php';
        rename($directory . '/' . $file, $directory . '/' . $newName);
    }
}

echo "Archivos renombrados exitosamente.";