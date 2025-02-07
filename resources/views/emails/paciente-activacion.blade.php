@extends('vendor.mail.html.layout')

@section('content')
    <div>
        <h3>Activación de Cuenta eSalud</h3>

        @php
            $nombreCompleto = $paciente->nombre . ' ' . $paciente->apellidos;
            $tokenActivacion = $token;
            $urlActivacion = $activationUrl;
            $horasExpiracion = $expiracionHoras;
        @endphp

        <p>Estimado/a {{ $nombreCompleto }},</p>

        <p>Hemos recibido una solicitud para activar su cuenta en eSalud.</p>

        <h4>Detalles de Activación</h4>

        <table>
            <tr>
                <td><strong>Token de Activación:</strong></td>
                <td><code>{{ $tokenActivacion }}</code></td>
            </tr>
            <tr>
                <td><strong>Enlace de Activación:</strong></td>
                <td><a href="{{ $urlActivacion }}">Activar Cuenta</a></td>
            </tr>
            <tr>
                <td><strong>Válido por:</strong></td>
                <td>{{ $horasExpiracion }} horas</td>
            </tr>
        </table>

        <p><strong>Importante:</strong></p>
        <ul>
            <li>Este enlace de activación es único y solo se puede usar una vez.</li>
            <li>El token es confidencial, no lo comparta con nadie.</li>
            <li>Si no ha solicitado esta activación, ignore este correo o contacte con soporte.</li>
        </ul>

        <p><strong>Medidas de Seguridad:</strong></p>
        <ul>
            <li>Verifique que el enlace provenga de nuestro dominio oficial.</li>
            <li>No haga clic en enlaces de correos sospechosos.</li>
            <li>Si tiene dudas, contacte con nuestro equipo de soporte.</li>
        </ul>

        <p>Si tiene problemas para activar su cuenta, por favor contacte con nuestro soporte técnico.</p>

        <p>Saludos cordiales,<br>
        Equipo eSalud</p>
    </div>
@endsection
