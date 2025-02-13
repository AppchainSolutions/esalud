Basado en tu requerimiento, te propongo la siguiente solución:

Estructura de Base de Datos:
Mantener las dos tablas (users y patients) pero establecer una relación opcional entre ellas
Agregar un campo role en la tabla users para distinguir entre roles (admin, staff, patient)
Los paciente que no necesitan autenticación simplemente no tendrán un user_id asociado
Proceso de Activación:
Cuando un administrador crea un paciente, inicialmente solo se crea el registro en patients
Si se requiere dar acceso al paciente, se genera un link de activación
El paciente usa este link para crear su cuenta (registro en users)
Se vincula automáticamente el user_id con el registro existente en patients
Control de Acceso:
Usar middleware personalizado para verificar el rol de paciente
Implementar políticas de Laravel para restringir acceso solo a información propia
Usar Gates para definir permisos específicos por rol
Interfaz de Usuario:
Vista personalizada para paciente con solo las opciones permitidas
Menú dinámico según el rol del usuario
Formularios específicos para el registro de paciente
La ventaja de esta estructura es que:

Mantiene la separación entre paciente y usuarios del sistema
Permite una activación gradual (no todos los paciente necesitan acceso)
Proporciona una capa de seguridad robusta
Es flexible para futuros cambios en los requerimientos