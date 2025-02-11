<!DOCTYPE html>
<html>
<head>
    <title>Próximo Control Médico</title>
</head>
<body>
    <h1>Recordatorio de Próximo Control Médico</h1>
    
    <p>Estimado/a {{ $nombre_paciente }},</p>
    
    <p>Le recordamos que tiene un próximo control médico programado para el {{ $fecha_proximo_control }}.</p>
    
    <p>Tipo de Examen: {{ $tipo_examen }}</p>
    
    <p>Faltan {{ $dias_restantes }} días para su próximo control.</p>
    
    <p>Por favor, confirme o reagende su cita si es necesario.</p>
    
    <p>Saludos cordiales,<br>
    Equipo de Salud</p>
</body>
</html>
