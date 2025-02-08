# Flujo de Activación de Pacientes en eSalud

## Descripción General

El flujo de activación de pacientes es un proceso seguro y controlado que permite a los pacientes crear su cuenta de manera segura después de ser registrados por un administrador o personal del sistema.

## Componentes del Flujo

### Backend (Laravel)

1. **Modelo Paciente**
   - Campos adicionales:
     * `token_activacion`: Token único para activación
     * `token_activacion_expira`: Fecha de expiración del token

2. **Servicio PacienteActivacionService**
   - Métodos principales:
     * `generarTokenActivacion()`: Genera token único
     * `enviarCorreoActivacion()`: Envía correo de activación
     * `activarCuenta()`: Procesa la activación de cuenta
     * `validarToken()`: Valida la vigencia del token

3. **Controlador PacienteActivacionController**
   - Rutas:
     * `/activar/{token}`: Muestra formulario de activación
     * `/activar`: Procesa la activación de cuenta

4. **Validaciones**
   - `ActivacionPacienteRequest`: 
     * Valida complejidad de contraseña
     * Confirma coincidencia de contraseñas

### Frontend (Vue.js)

1. **PasswordStrengthMeter.vue**
   - Componente de medición de fortaleza de contraseña
   - Calcula seguridad basada en:
     * Longitud
     * Uso de mayúsculas/minúsculas
     * Números
     * Caracteres especiales

2. **Activacion.vue**
   - Formulario de activación de cuenta
   - Características:
     * Validación en tiempo real
     * Medidor de fortaleza de contraseña
     * Integración con Inertia.js

3. **ActivacionError.vue**
   - Página de manejo de errores de activación

## Flujo Detallado

1. **Creación por Admin/Staff**
   - Admin crea paciente en el sistema
   - Paciente se crea sin usuario asociado
   - Se genera token de activación único

2. **Envío de Correo**
   - Correo enviado con link de activación
   - Link contiene token único
   - Token válido por 24 horas

3. **Activación por Paciente**
   - Paciente accede al link de activación
   - Formulario para crear contraseña
   - Validaciones de complejidad de contraseña

4. **Creación de Usuario**
   - Usuario vinculado al paciente
   - Rol 'paciente' asignado
   - Cuenta marcada como activa
   - Token de activación eliminado

## Consideraciones de Seguridad

- Tokens únicos y con expiración
- Hash de contraseñas
- Validación de complejidad de contraseña
- Protección contra intentos múltiples
- Uso de HTTPS
- Validaciones en frontend y backend

## Mejoras Futuras

- Implementar rate limiting
- Añadir registro de intentos de activación
- Mejorar mensajes de error
- Implementar autenticación de dos factores
- Incluir validaciones biometricas como huella dactilar y/o facial

## Tecnologías Utilizadas

- Backend: Laravel 10
- Frontend: Vue.js 3 (Composition API)
- ORM: Eloquent
- Autenticación: Laravel Fortify
- Validación: Laravel Validation
