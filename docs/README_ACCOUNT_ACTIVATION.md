# Proceso de Activación de Cuenta de Pacientes

## Resumen

Este documento describe el flujo técnico de activación de cuentas de pacientes en el sistema e-Salud.

## Archivos Principales y sus Funciones:

### Inicio del Proceso: ActivacionPacienteMail.php
Genera y envía correo de activación
Contiene link con token único de activación
Función: Iniciar proceso de activación de cuenta
### Rutas: web.php
Define ruta /activar-cuenta
Mapea solicitud de activación al controlador
Función: Enrutamiento de la solicitud de activación
### Controlador: PacienteActivacionController.php
Método activarCuenta()
Coordina el proceso de activación
Función: Orquestador del flujo de activación
Llama al servicio de activación
Maneja redirección y respuestas
### Request: ActivacionPacienteRequest.php
Valida datos de entrada para activación
Reglas de validación para token y contraseña
Función: Validación de seguridad de datos de entrada
### Servicio: PacienteActivacionService.php
Método activarCuenta()
Lógica principal de activación
#### Pasos:
    - Validar token
    - Crear usuario
    - Vincular usuario con paciente
    - Registrar eventos
    - Manejar transacciones
#### Función: Implementación de la lógica de negocio de activación
### Frontend: Activacion.vue
- Formulario de activación
- Validación de contraseña en cliente
-Envío de datos al backend
Función: Interfaz de usuario para activación de cuenta

🔄 Flujo Completo de Activación:

1. Admin/Staff crea paciente sin usuario
2. Sistema genera token de activación
3. Envía correo con link de activación
4. Paciente accede al link
5. Muestra formulario de activación
6. Paciente ingresa contraseña
7. Frontend valida contraseña localmente
8. Envía datos al backend
9. Backend valida token y datos
10. Crea usuario vinculado al paciente
11. Marca cuenta como activada
12. Inicia sesión automático
13. Redirige a dashboard

✅ Características de Seguridad:

- Token único de 64 caracteres
- Expiración de token (24 horas)
- Validación de contraseña compleja
- Transacciones de base de datos
- Registro de eventos y logs
- Protección contra ataques

## Archivos Clave

- `PacienteActivacionService.php`: Lógica de negocio de activación
- `PacienteActivacionController.php`: Controlador de activación
- `ActivacionPacienteRequest.php`: Validaciones de entrada
- `Activacion.vue`: Formulario de activación en frontend

## Flujo Básico

1. Creación de Paciente
2. Generación de Token
3. Envío de Correo
4. Activación de Cuenta
5. Creación de Usuario

## Requisitos de Seguridad

### Contraseña
- Mínimo 12 caracteres
- Mayúsculas y minúsculas
- Números
- Caracteres especiales

### Token
- 64 caracteres
- Almacenamiento seguro (hash)
- Expiración en 24 horas

## Eventos

- `PacienteRegistrado`
- `CorreoActivacionEnviado`
- `CuentaActivada`

## Consideraciones

- Validación de token
- Protección contra ataques
- Logging de eventos
- Manejo de errores

## Mejoras Futuras

- Autenticación de dos factores
- Integración de CAPTCHA
- Sistema de notificaciones mejorado
