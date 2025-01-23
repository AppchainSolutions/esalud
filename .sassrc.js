module.exports = {
    // Usar la nueva API de módulos
    style: 'new',
    // Habilitar la nueva sintaxis de importación
    loadPaths: ['node_modules'],
    // Deshabilitar la API legacy
    functions: {
        'color.adjust': true,
        'color.scale': true
    }
}
