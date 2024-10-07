<?php

$directory = 'resources/js/Pages/SubPages';
$files = scandir($directory);

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'vue') {
        $newName = pathinfo($file, PATHINFO_FILENAME) . 'Page.vue';
        rename($directory . '/' . $file, $directory . '/' . $newName);
    }
}

echo "Archivos renombrados exitosamente.";