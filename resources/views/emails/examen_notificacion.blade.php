<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Recordatorio de Examen Próximo a Vencer</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Recordatorio de Examen Próximo a Vencer</h1>
        
        <p>Estimado/a {{ $nombrePaciente ?? 'Paciente' }},</p>
        
        <p>Le recordamos que tiene un examen próximo a vencer:</p>
        
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
            <h2 style="margin-top: 0;">Detalles del Examen</h2>
            <p><strong>Tipo de Examen:</strong> {{ $tipoExamen ?? 'No especificado' }}</p>
            <p><strong>Fecha de Próximo Control:</strong> {{ $fechaProxControl ?? 'No definida' }}</p>
        </div>
        
        <h3>Acciones Recomendadas:</h3>
        <ul>
            <li>Revise la vigencia de su examen</li>
            <li>Programe su renovación con anticipación</li>
            <li>Contacte a su profesional de referencia si necesita ayuda</li>
        </ul>
        
        <p>Por su seguridad, le sugerimos tomar las previsiones necesarias.</p>
        
        <p>Saludos cordiales,<br>[Nombre de la Institución]</p>
    </div>
</body>
</html>
