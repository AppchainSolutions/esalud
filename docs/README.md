# eSalud - Sistema de Gestión de Pacientes

## Características de Filtrado de Datos

### Filtros Booleanos Flexibles

La clase `Tools` proporciona una funcionalidad de filtrado de datos que soporta múltiples formatos para campos booleanos. Esto garantiza la compatibilidad entre diferentes sistemas de bases de datos como SQLite y PostgreSQL.

#### Ejemplos de Uso

```php
// Filtrar pacientes activos
$pacientesActivos = Tools::filterData(['activo' => true], Paciente::query());
$pacientesActivos = Tools::filterData(['activo' => 'true'], Paciente::query());
$pacientesActivos = Tools::filterData(['activo' => 1], Paciente::query());
$pacientesActivos = Tools::filterData(['activo' => '1'], Paciente::query());

// Filtrar pacientes inactivos
$pacientesInactivos = Tools::filterData(['activo' => false], Paciente::query());
$pacientesInactivos = Tools::filterData(['activo' => 'false'], Paciente::query());
$pacientesInactivos = Tools::filterData(['activo' => 0], Paciente::query());
$pacientesInactivos = Tools::filterData(['activo' => '0'], Paciente::query());
```

#### Detalles Técnicos

- Soporta valores booleanos nativos de PHP
- Convierte cadenas como 'true', 'false', '1', '0' a valores booleanos
- Almacena valores como 1 (verdadero) o 0 (falso) para máxima compatibilidad
- Implementado en `app/Helpers/Tools.php`
- Probado exhaustivamente en `tests/Feature/PacienteFilterTest.php`

### Consideraciones

- Útil para consultas que requieren filtrado por campos de estado
- Reduce la complejidad del manejo de booleanos entre diferentes bases de datos
- Mantiene la consistencia en la lógica de filtrado

## Pruebas

Para verificar la funcionalidad de filtrado, ejecuta:

```bash
php artisan test tests/Feature/PacienteFilterTest.php
```
