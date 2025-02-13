#!/bin/bash

# Cambiar al directorio del proyecto
cd /home/omar/workspace/proyectos/esalud

# Limpiar colas y trabajos anteriores
php artisan queue:clear
php artisan queue:flush

# Generar notificaciones con rango de días
echo "Generando notificaciones de exámenes con rango de 30 a 37 días..."
php artisan tinker << 'EOF'
use App\Services\ExamenNotificationService;

$service = app(ExamenNotificationService::class);

// Generar notificaciones con rango de 30 a 37 días
$notificaciones = $service->generarNotificacionesVencimiento(false, [30, 37]);

echo "Notificaciones generadas: {$notificaciones->count()}\n";

// Verificar notificaciones
$pendientes = App\Models\Notificacion::where('estado', 'pendiente')->get();
echo "Notificaciones pendientes: {$pendientes->count()}\n";

foreach ($pendientes as $notificacion) {
    $examen = $notificacion->examinable;
    $diasHastaControl = now()->diffInDays($examen->fecha_prox_control, false);
    
    echo "Notificación ID: {$notificacion->id}\n";
    echo "Estado: {$notificacion->estado}\n";
    echo "Tipo de Examen: {$notificacion->tipo_examen}\n";
    echo "Examen ID: {$notificacion->examinable_id}\n";
    echo "Días hasta control: {$diasHastaControl}\n";
}
EOF

# Mostrar trabajos en cola
echo "Trabajos en cola:"
php artisan queue:work --tries=3 --timeout=300 &
QUEUE_PID=$!

# Esperar un momento para que se procesen los trabajos
sleep 10

# Detener el worker de colas
kill $QUEUE_PID

# Verificar notificaciones enviadas
echo "Verificando notificaciones enviadas:"
php artisan tinker << 'EOF'
use App\Models\Notificacion;

$enviadas = Notificacion::where('estado', 'enviada')->get();
echo "Notificaciones enviadas: {$enviadas->count()}\n";

foreach ($enviadas as $notificacion) {
    $examen = $notificacion->examinable;
    $diasHastaControl = now()->diffInDays($examen->fecha_prox_control, false);
    
    echo "Notificación ID: {$notificacion->id}\n";
    echo "Estado: {$notificacion->estado}\n";
    echo "Tipo de Examen: {$notificacion->tipo_examen}\n";
    echo "Examen ID: {$notificacion->examinable_id}\n";
    echo "Días hasta control: {$diasHastaControl}\n";
}
EOF

# Mostrar los últimos logs relacionados con notificaciones
echo "Últimos logs de notificaciones:"
tail -n 50 storage/logs/laravel.log | grep -E "Notificación|exámenes|dias_hasta_control"
