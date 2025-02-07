@component('mail::message')
# Activación de Cuenta eSalud

Estimado/a {{ $paciente->nombre }} {{ $paciente->apellidos }},

Hemos recibido una solicitud para activar su cuenta en eSalud. 

## Detalles de Activación

- **Token de Activación:** `{{ $token }}`
- **Enlace de Activación:** {{ $activationUrl }}
- **Válido por:** {{ $expiracionHoras }} horas

Para completar el proceso de activación, haga clic en el siguiente botón o copie y pegue el enlace en su navegador:

@component('mail::button', ['url' => $activationUrl])
Activar Cuenta
@endcomponent

**Importante:**
- Este enlace de activación es único y solo se puede usar una vez.
- El token es confidencial, no lo comparta con nadie.
- Si no ha solicitado esta activación, ignore este correo o contacte con soporte.

**Medidas de Seguridad:**
- Verifique que el enlace provenga de nuestro dominio oficial.
- No haga clic en enlaces de correos sospechosos.
- Si tiene dudas, contacte con nuestro equipo de soporte.

Si tiene problemas para activar su cuenta, por favor contacte con nuestro soporte técnico.

Saludos cordiales,
Equipo eSalud

@endcomponent
