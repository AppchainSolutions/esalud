# Diagrama de Flujo: Sistema de Notificaciones de Exámenes

```mermaid
flowchart TD
    A[Inicio: Verificación de Exámenes] --> B{Exámenes próximos a vencer?}
    B -->|Sí| C[Crear Notificación]
    B -->|No| J[Fin del Proceso]
    
    C --> D{Validar Datos del Paciente}
    D -->|Válido| E[Guardar Notificación como Pendiente]
    D -->|Inválido| F[Registrar Error en Logs]
    
    E --> G[Programar Envío de Notificación]
    F --> J
    
    G --> H[Ejecutar Job de Notificaciones]
    H --> I{Envío Exitoso?}
    
    I -->|Sí| K[Actualizar Estado a 'Enviada']
    I -->|No| L[Registrar Error, Reintentar]
    
    K --> M[Registrar Log de Envío]
    L --> N{Intentos < Máximo?}
    
    N -->|Sí| H
    N -->|No| O[Marcar como Fallida]
    
    M --> P[Fin: Notificación Completada]
    O --> P
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style J fill:#bbf,stroke:#333,stroke-width:2px
    style P fill:#bbf,stroke:#333,stroke-width:2px
```

## Descripción del Diagrama

### Proceso Principal
1. **Verificación de Exámenes**: Se revisan los exámenes próximos a vencer
2. **Creación de Notificación**: Si hay exámenes por vencer, se crea una notificación
3. **Validación de Datos**: Se verifican los datos del paciente
4. **Programación de Envío**: Se programa el job de notificaciones
5. **Envío y Actualización**: Se envía la notificación y se actualiza su estado

### Manejo de Errores
- Validación de datos del paciente
- Control de intentos de envío
- Registro de logs para seguimiento

### Estados de Notificación
- Pendiente
- Enviada
- Fallida

## Componentes Involucrados
- ExamenNotificationService
- GenerarNotificacionesExamenesJob
- Modelo de Notificación
- Sistema de Colas de Laravel

## Consideraciones
- Procesamiento asíncrono
- Tolerancia a fallos
- Registro detallado de eventos
