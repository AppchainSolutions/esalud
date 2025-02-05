@component('mail::message')
# Bienvenido a E-Salud

Estimado/a {{ $nombrePaciente }},

Has sido registrado en nuestro sistema de salud. Para acceder a tu información médica, necesitas activar tu cuenta.

@component('mail::button', ['url' => $urlActivacion])
Activar mi cuenta
@endcomponent

Este enlace de activación expirará en 24 horas por seguridad.

Si no solicitaste esta cuenta, puedes ignorar este correo.

Saludos,<br>
{{ config('app.name') }}
@endcomponent
