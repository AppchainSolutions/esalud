# Guía de Desarrollo - Salud Laboral

## Estructura del Proyecto

### Organización de Directorios

```text
/
├── app/          # Lógica principal de Laravel
├── resources/    # Frontend Vue.js y assets
├── database/     # Migraciones y seeders
├── tests/        # Tests unitarios y e2e
├── routes/       # Definición de rutas API
├── config/       # Archivos de configuración
├── scripts/      # Scripts de utilidad
├── docs/         # Documentación técnica
└── docker/       # Configuración de contenedores
```

## Convenciones de Commits

### Formato de Commits

```bash
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[nota de pie opcional]
```

### Tipos de Commits y su Impacto en Versiones

1. **Incrementan PATCH (1.0.X)**:

    ```bash
    # Corrección de bugs
    fix: corregir error en login
    fix(auth): corregir validación de token

    # Mejoras de rendimiento
    perf: optimizar consultas SQL
    ```

2. **Incrementan MINOR (1.X.0)**:

    ```bash
    # Nueva funcionalidad
    feat: implementar exportación a PDF
    feat(reports): añadir gráficos estadísticos

    # Refactorización significativa
    refactor: reorganizar estructura de servicios
    ```

3. **Incrementan MAJOR (X.0.0)**:

    ```bash
    # Breaking Changes
    feat!: cambiar API de autenticación

    BREAKING CHANGE: Nueva estructura de tokens JWT
    ```

4. **No incrementan versión**:

    ```bash
    # Documentación
    docs: actualizar manual de usuario

    # Formato
    style: mejorar formato de código

    # Tests
    test: añadir pruebas de integración

    # Mantenimiento
    chore: actualizar dependencias
    ```

### Proceso de Versionado

1. Los commits determinan el tipo de cambio
2. El script version.sh analiza los commits
3. Se incrementa la versión según el tipo más significativo
4. Se genera entrada en CHANGELOG
5. Se crea tag y se publica

### Comandos Principales

```bash
# Actualizar versión
./scripts/version.sh bump 1.2.3

# Crear rama release
./scripts/version.sh release 1.2.3

# Finalizar release
./scripts/version.sh finish 1.2.3
```

## Estándares de Código

### PHP

1. Seguir PSR-12
2. Usar tipado estricto
3. Documentar clases y métodos
4. Implementar tests unitarios

### JavaScript/TypeScript

1. Usar ESLint con configuración estándar
2. Preferir TypeScript sobre JavaScript
3. Documentar componentes Vue
4. Implementar tests unitarios con Vitest

## Documentación API

### Estándares API REST

1. Usar verbos HTTP correctamente
2. Implementar versionado en URL
3. Usar códigos HTTP apropiados
4. Documentar con OpenAPI/Swagger

### Ejemplos de Endpoints

```http
# Obtener recursos
GET /api/v1/users

# Crear recurso
POST /api/v1/users

# Actualizar recurso
PUT /api/v1/users/{id}

# Eliminar recurso
DELETE /api/v1/users/{id}
```

## Base de Datos

### Migraciones

1. Usar migraciones para todos los cambios
2. Nombrar archivos descriptivamente
3. Incluir métodos up() y down()
4. Documentar cambios importantes

### Ejemplo de Migración

```php
public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->timestamp('email_verified_at')->nullable();
        $table->string('password');
        $table->rememberToken();
        $table->timestamps();
    });
}
```

## Despliegue

### Entornos

1. Desarrollo (dev)
2. Pruebas (staging)
3. Producción (prod)

### Proceso de Despliegue

```bash
# 1. Preparar release
./scripts/version.sh release 1.2.3

# 2. Ejecutar tests
composer test
npm run test

# 3. Construir assets
npm run build

# 4. Desplegar
./scripts/deploy.sh staging
```

## Referencias

- [Laravel Best Practices](https://github.com/alexeymezenin/laravel-best-practices)
- [Vue.js Style Guide](https://vuejs.org/style-guide)
- [Conventional Commits](https://www.conventionalcommits.org)
- [Keep a Changelog](https://keepachangelog.com)
- [Semantic Versioning](https://semver.org)
  