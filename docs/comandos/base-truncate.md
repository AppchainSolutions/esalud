# Comando Base Truncate

## Descripción
El comando `base:truncate` permite truncar (vaciar) tablas de la base de datos de manera flexible y segura.

## Uso

### Truncar todas las tablas
```bash
php artisan base:truncate --all
```

### Truncar tablas específicas
```bash
php artisan base:truncate --tables=users,pacientes
```

### Truncar todas las tablas excepto algunas
```bash
php artisan base:truncate --except=migrations,users
```

## Opciones

| Opción | Descripción | Ejemplo |
|--------|-------------|---------|
| `--all` | Trunca todas las tablas de la base de datos | `php artisan base:truncate --all` |
| `--tables` | Lista de tablas específicas a truncar (separadas por coma) | `php artisan base:truncate --tables=users,pacientes` |
| `--except` | Lista de tablas a excluir del truncado (separadas por coma) | `php artisan base:truncate --except=migrations,users` |

## Características

- Desactiva temporalmente las restricciones de clave foránea
- Maneja errores de truncado de manera graciosa
- Proporciona información detallada del proceso
- Altamente configurable

## Precauciones

⚠️ **Advertencia**: Este comando eliminará permanentemente todos los datos de las tablas seleccionadas. Úselo con precaución.

## Ejemplos en Código

### En un Seeder
```php
public function run()
{
    Artisan::call('base:truncate', ['--all' => true]);
    
    // Resto del código de seeding
}
```

### En un Test
```php
public function testDatabaseReset()
{
    Artisan::call('base:truncate', ['--all' => true]);
    
    // Realizar pruebas con base de datos limpia
}
```

## Consideraciones de Seguridad

- No se puede usar en entornos de producción sin configuración adicional
- Recomendado para desarrollo y testing
- Implementa verificaciones de seguridad antes de ejecutar en entornos sensibles
