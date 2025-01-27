# Guía de Testing - eSalud

## Pruebas de Mutación

Las pruebas de mutación son una técnica avanzada que nos ayuda a evaluar la calidad de nuestras pruebas unitarias. La herramienta modifica pequeñas partes del código (crea "mutantes") y verifica si nuestras pruebas detectan estos cambios.

### Requisitos

- PHP con Xdebug habilitado
- Infection instalado (`composer require --dev infection/infection`)
- Suite de pruebas Pest funcionando correctamente

### Uso del Comando

```bash
# Ejecutar pruebas de mutación básicas
php artisan test:mutation

# Ejecutar con información detallada
php artisan test:mutation --debug

# Especificar número de hilos
php artisan test:mutation --threads=4

# Especificar ruta personalizada para cobertura
php artisan test:mutation --coverage-path=custom/path
```

### Opciones Disponibles

- `--debug`: Muestra información detallada durante la ejecución
- `--coverage-path`: Ruta personalizada para los archivos de cobertura
- `--threads`: Número de hilos a usar (por defecto: número de CPU)

### Reportes Generados

Los reportes se guardan en `storage/logs/mutation/` con el siguiente formato:

- HTML: `infection_[timestamp].html`
- JSON: `infection_[timestamp].json`
- Log: `mutation_[timestamp].log`

### Métricas

- **MSI (Mutation Score Indicator)**: Porcentaje de mutantes detectados
- **Covered MSI**: MSI considerando solo el código cubierto por pruebas
- **Mutantes Detectados**: Número de mutaciones que las pruebas detectaron
- **Mutantes Sobrevivientes**: Número de mutaciones que las pruebas no detectaron

### Configuración

La configuración de Infection se encuentra en `infection.json`:

```json
{
    "source": {
        "directories": [
            "app"
        ]
    },
    "logs": {
        "text": "infection.log",
        "html": "infection.html",
        "summary": "summary.log",
        "json": "infection-log.json",
        "perMutator": "per-mutator.md"
    },
    "mutators": {
        "@default": true,
        "@function_signature": false,
        "global-ignore": [
            "App\\Exceptions\\*"
        ]
    },
    "testFramework": "pest",
    "minMsi": 80,
    "minCoveredMsi": 90
}
```

### Interpretación de Resultados

1. **MSI > 80%**: Buena cobertura de mutación
2. **MSI 60-80%**: Cobertura moderada, necesita mejoras
3. **MSI < 60%**: Cobertura insuficiente, requiere atención

### Recomendaciones

1. Ejecutar las pruebas de mutación regularmente
2. Revisar los mutantes sobrevivientes
3. Mejorar las pruebas basándose en los resultados
4. Mantener un MSI mínimo del 80%
5. Documentar casos especiales o excepciones
