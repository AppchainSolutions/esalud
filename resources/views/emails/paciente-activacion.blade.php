@component('mail::message')
# Activación de Cuenta eSalud

Estimado/a {{ $paciente->nombre }} {{ $paciente->apellidos }},

Hemos recibido una solicitud para activar su cuenta en eSalud. Para completar el proceso de activación, haga clic en el siguiente botón:

@component('mail::button', ['url' => $activationUrl])
Activar Cuenta
@endcomponent

**Importante:**
- Este enlace de activación es válido por {{ $expiracionHoras }} horas.
- Si no ha solicitado esta activación, puede ignorar este correo.

Si tiene problemas para activar su cuenta, por favor contacte con nuestro soporte técnico.

Saludos cordiales,
Equipo eSalud

@endcomponent
