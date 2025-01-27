# language: es
Característica: Búsqueda de pacientes
  Como usuario del sistema
  Quiero poder buscar pacientes
  Para poder acceder a su información rápidamente

  Escenario: Búsqueda exitosa de paciente por nombre
    Dado que existen los siguientes pacientes en el sistema:
      | nombre  | apellido | dni      |
      | Juan    | Pérez    | 12345678 |
      | María   | González | 87654321 |
    Cuando busco pacientes con el criterio "Juan"
    Entonces debo ver 1 paciente en los resultados
    Y el paciente debe tener nombre "Juan" y apellido "Pérez"

  Escenario: Búsqueda sin resultados
    Dado que existen los siguientes pacientes en el sistema:
      | nombre  | apellido | dni      |
      | Juan    | Pérez    | 12345678 |
    Cuando busco pacientes con el criterio "Carlos"
    Entonces debo ver 0 pacientes en los resultados
