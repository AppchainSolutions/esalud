@component('mail::message')
# Activación de Cuenta eSalud

Estimado/a {{ $paciente->nombres }} {{ $paciente->apellidos }},

Hemos creado tu cuenta en eSalud. Para activarla, haz clic en el siguiente botón:

@component('mail::button', ['url' => $activationUrl])
Activar Cuenta
@endcomponent

Este enlace de activación expirará en {{ $expiracionHoras }} horas.

Si no solicitaste esta cuenta, puedes ignorar este correo.

Saludos cordiales,  
Equipo eSalud

@endcomponent
