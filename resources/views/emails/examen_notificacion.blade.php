<!DOCTYPE html>
<html>
<head>
    <title>Recordatorio de Examen Médico</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f4f4f4; padding: 10px; text-align: center; }
        .content { padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Recordatorio de Examen Médico</h1>
        </div>
        <div class="content">
            <p>Estimado/a {{ $nombrePaciente }},</p>
            
            <p>Le recordamos que tiene un próximo examen de <strong>{{ $tipoExamen }}</strong> programado para el <strong>{{ $fechaProxControl }}</strong>.</p>
            
            @if($fechaUltControl !== 'No registrada')
            <p>Su último control fue realizado el: {{ $fechaUltControl }}</p>
            @endif
            
            <p>Por favor, no olvide asistir a su cita. Si necesita reprogramar, comuníquese con nosotros.</p>
            
            <p>Saludos cordiales,<br>Equipo Médico</p>
        </div>
    </div>
</body>
</html>
