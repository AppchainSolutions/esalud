# Pruebas de Activación de Pacientes en Producción

## Checklist para Pruebas

### 1. Preparación Previa
- [ ] Respaldar base de datos antes de las pruebas
- [ ] Tener un usuario de prueba sin cuenta activa
- [ ] Verificar configuración de correo electrónico

### 2. Pruebas de Generación de Token
- [ ] Verificar que se genere un token único
- [ ] Comprobar que el token se hashea correctamente
- [ ] Validar tiempo de expiración (24 horas)

### 3. Pruebas de Correo Electrónico
- [ ] Confirmar que llega el correo de activación
- [ ] Verificar que el enlace sea firmado y seguro
- [ ] Probar enlace de activación

### 4. Pruebas de Activación
- [ ] Intentar activar con token correcto
- [ ] Intentar activar con token expirado
- [ ] Probar validaciones de contraseña
- [ ] Verificar creación de usuario asociado

### 5. Consideraciones de Seguridad
- [ ] Probar límite de intentos de activación
- [ ] Verificar protección contra ataques
- [ ] Comprobar que no se exponga información sensible

## Comandos Útiles para Verificación

### Verificación de Configuración
```bash
# Verificar configuración de correo
php artisan config:show mail

# Revisar logs de activación
tail -f storage/logs/laravel.log

# Verificar rutas relacionadas
php artisan route:list | grep activacion
```

## Recomendaciones Adicionales
- Usar un entorno de staging lo más similar a producción
- Realizar pruebas incrementales
- Documentar cada paso y resultado
- Tener un plan de rollback

## Registro de Pruebas

### Fecha de Prueba: 
### Responsable:
### Entorno:
### Resultados:

## Notas Adicionales
- Documentar cualquier incidencia o comportamiento inesperado
- Tomar capturas de pantalla de los procesos
- Registrar tiempos de respuesta y cualquier latencia

## Control de Versiones
- Versión: 1.0
- Fecha de Creación: 2025-02-09
- Última Actualización: 2025-02-09
