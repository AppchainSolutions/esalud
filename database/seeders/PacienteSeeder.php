<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\Paciente;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class PacienteSeeder extends Seeder
{
    public function run()
    {
       // User::truncate();
        //Paciente::truncate();
        // Seeders para tablas de referencia
        $this->seedTablasReferencia();

        // Primero crear registros base
        //$this->crearRegistrosBase();

        // Crear 10 pacientes sin asociar
        // $pacientesSinUser = Paciente::factory()->count(10)->create();
        // User::factory()->count(5)->create(
        //     [
        //         'isAdmin' => false,
        //         'rol' => 'staff'
        //     ]
        // );

        // $this->call(UserSeeder::class);

        // // Crear 3 pacientes con usuarios asociados
        // $pacientesConUser = Paciente::factory()->count(3)->create();

        // // Asociar usuario a cada paciente con usuario
        // $pacientesConUser->each(function ($paciente) {
        //     $user = User::create([
        //         'name' => $paciente->nombre,
        //         'lastname' => $paciente->apellidos,
        //         'rut' => $paciente->rut,
        //         'email' => $paciente->email,
        //         'password' => Hash::make('clave123'),
        //         'rol' => 'paciente', // Rol de paciente
        //         'isAdmin' => false
        //     ]);

        //     // Actualizar paciente con el user_id
        //     $paciente->update([
        //         'user_id' => $user->id
        //     ]);
        // });

        // Crear registros relacionados para cada paciente
        $this->crearRegistrosRelacionados(Paciente::all());
    }

    private function crearRegistrosRelacionados($pacientes)
    {
        // Lista de modelos con sus respectivos factories
        $modelos = [
            // AtencionDiaria::class => 4,

            Alergia::class => 4,
            Enfermedad::class => 4,
            Cirugia::class => 4,
            TrastornoCronico::class => 4,
            FactorRiesgo::class => 4,
            Medicamento::class => 4,
            Vacuna::class => 4,

            AntecedenteFamiliar::class => 4,

            //LicenciaMedica::class => 4,
            // Diat::class => 4,
            // Diep::class => 4,
            // Certificacion::class => 4,

            // ExAlcohol::class => 4,
            // ExAldehido::class => 4,
            // ExEquilibrio::class => 4,
            // ExEpo::class => 4,
            // ExHumoNegro::class => 4,
            // ExMetal::class => 4,
            // ExPsico::class => 4,
        ];

        // Iterar sobre cada modelo
        foreach ($modelos as $modelo => $cantidadRegistros) {
            // Para cada paciente
            $pacientes->each(function ($paciente) use ($modelo, $cantidadRegistros) {
                // Crear 4 registros para cada paciente
                $modelo::factory()->count($cantidadRegistros)->create([
                    'paciente_id' => $paciente->id
                ]);
            });
        }
    }

    private function seedTablasReferencia()
    {
        // Tablas de referencia a poblar
        $tablasReferencia = [

            Afp::class => [
                ['id' => 1, 'descripcion' => 'Habitat'],
                ['id' => 2, 'descripcion' => 'Provida'],
                ['id' => 3, 'descripcion' => 'Cuprum'],
                ['id' => 4, 'descripcion' => 'Capital'],
                ['id' => 5, 'descripcion' => 'Modelo']
            ],
            Area::class => [
                ['id' => 1, 'descripcion' => 'Recursos Humanos'],
                ['id' => 2, 'descripcion' => 'Producción'],
                ['id' => 3, 'descripcion' => 'Mantenimiento'],
                ['id' => 4, 'descripcion' => 'Administración'],
                ['id' => 5, 'descripcion' => 'Seguridad']
            ],
            Empresa::class => [
                ['id' => 1, 'descripcion' => 'Empresa A', 'rut' => '11.111.111-1'],
                ['id' => 2, 'descripcion' => 'Empresa B', 'rut' => '22.222.222-2'],
                ['id' => 3, 'descripcion' => 'Empresa C', 'rut' => '33.333.333-3']
            ],
            EstadoCivil::class => [
                ['id' => 1, 'descripcion' => 'Soltero/a'],
                ['id' => 2, 'descripcion' => 'Casado/a'],
                ['id' => 3, 'descripcion' => 'Divorciado/a'],
                ['id' => 4, 'descripcion' => 'Viudo/a']
            ],
            Genero::class => [
                ['id' => 1, 'descripcion' => 'Masculino'],
                ['id' => 2, 'descripcion' => 'Femenino'],
                ['id' => 3, 'descripcion' => 'Otro']
            ],
            SeguroSalud::class => [
                ['id' => 1, 'descripcion' => 'Fonasa'],
                ['id' => 2, 'descripcion' => 'Isapre Banmédica'],
                ['id' => 3, 'descripcion' => 'Isapre Consalud']
            ],
            NivelInstruccion::class => [
                ['id' => 1, 'descripcion' => 'Básica'],
                ['id' => 2, 'descripcion' => 'Media'],
                ['id' => 3, 'descripcion' => 'Técnica'],
                ['id' => 4, 'descripcion' => 'Universitaria']
            ],
            LeySocial::class => [
                ['id' => 1, 'descripcion' => 'Ley 16.744'],
                ['id' => 2, 'descripcion' => 'Código del Trabajo']
            ],
            Nacionalidad::class => [
                ['id' => 1, 'descripcion' => 'Chilena'],
                ['id' => 2, 'descripcion' => 'Extranjera']
            ],
            ModalidadAtencion::class => [
                ['id' => 1, 'descripcion' => 'Presencial'],
                ['id' => 2, 'descripcion' => 'Remoto'],
                ['id' => 3, 'descripcion' => 'Híbrido']
            ],
            PuebloOriginario::class => [
                ['id' => 1, 'descripcion' => 'Mapuche'],
                ['id' => 2, 'descripcion' => 'Aymara'],
                ['id' => 3, 'descripcion' => 'Otro']
            ],
            Religion::class => [
                ['id' => 1, 'descripcion' => 'Católica'],
                ['id' => 2, 'descripcion' => 'Evangélica'],
                ['id' => 3, 'descripcion' => 'Sin religión']
            ],
            Planta::class => [
                ['id' => 1, 'descripcion' => 'Planta A'],
                ['id' => 2, 'descripcion' => 'Planta B'],
                ['id' => 3, 'descripcion' => 'Planta C']
            ],
            Prevision::class => [
                ['id' => 1, 'descripcion' => 'AFP'],
                ['id' => 2, 'descripcion' => 'IPS']
            ],
            Unidad::class => [
                ['id' => 1, 'descripcion' => 'Unidad 1'],
                ['id' => 2, 'descripcion' => 'Unidad 2'],
                ['id' => 3, 'descripcion' => 'Unidad 3']
            ],
            GrupoSanguineo::class => [
                ['id' => 1, 'descripcion' => 'A+'],
                ['id' => 2, 'descripcion' => 'A-'],
                ['id' => 3, 'descripcion' => 'B+'],
                ['id' => 4, 'descripcion' => 'B-'],
                ['id' => 5, 'descripcion' => 'AB+'],
                ['id' => 6, 'descripcion' => 'AB-'],
                ['id' => 7, 'descripcion' => 'O+'],
                ['id' => 8, 'descripcion' => 'O-']
            ],

            AccidenteCondicion::class => [
                ['id' => 1, 'descripcion' => 'Leve'],
                ['id' => 2, 'descripcion' => 'Moderado'],
                ['id' => 3, 'descripcion' => 'Grave'],
                ['id' => 4, 'descripcion' => 'Crítico'],
                ['id' => 5, 'descripcion' => 'Potencialmente Mortal']
            ],
            ErrorCritico::class => [
                ['id' => 1, 'descripcion' => 'Sin Error Crítico'],
                ['id' => 2, 'descripcion' => 'Error Leve'],
                ['id' => 3, 'descripcion' => 'Error Moderado'],
                ['id' => 4, 'descripcion' => 'Error Grave'],
                ['id' => 5, 'descripcion' => 'Error Crítico']
            ],
            EstadoMental::class => [
                ['id' => 1, 'descripcion' => 'Alerta'],
                ['id' => 2, 'descripcion' => 'Confuso'],
                ['id' => 3, 'descripcion' => 'Desorientado']
            ],
            'lugar_atencion' => [
                ['id' => 1, 'descripcion' => 'Consultorio'],
                ['id' => 2, 'descripcion' => 'Emergencia'],
                ['id' => 3, 'descripcion' => 'Domicilio'],
                ['id' => 4, 'descripcion' => 'Área de Trabajo'],
                ['id' => 5, 'descripcion' => 'Otro']
            ],
            Accidente::class => [
                ['id' => 1, 'descripcion' => 'Caída'],
                ['id' => 2, 'descripcion' => 'Golpe'],
                ['id' => 3, 'descripcion' => 'Corte'],
                ['id' => 4, 'descripcion' => 'Quemadura'],
                ['id' => 5, 'descripcion' => 'Lesión por Esfuerzo Repetitivo'],
                ['id' => 6, 'descripcion' => 'Exposición a Sustancias Químicas'],
                ['id' => 7, 'descripcion' => 'Accidente de Tránsito'],
                ['id' => 8, 'descripcion' => 'Lesión por Máquina'],
                ['id' => 9, 'descripcion' => 'Otro']
            ],
            Derivacion::class => [
                ['id' => 1, 'descripcion' => 'Médico General'],
                ['id' => 2, 'descripcion' => 'Especialista'],
                ['id' => 3, 'descripcion' => 'Urgencias'],
                ['id' => 4, 'descripcion' => 'Rehabilitación'],
                ['id' => 5, 'descripcion' => 'Otro']
            ],
            Fuente::class => [
                ['id' => 1, 'descripcion' => 'Área de Trabajo'],
                ['id' => 2, 'descripcion' => 'Tránsito'],
                ['id' => 3, 'descripcion' => 'Hogar'],
                ['id' => 4, 'descripcion' => 'Otro']
            ],
            Responsable::class => [
                ['id' => 1, 'descripcion' => 'Empleado'],
                ['id' => 2, 'descripcion' => 'Empleador'],
                ['id' => 3, 'descripcion' => 'ART/Aseguradora'],
                ['id' => 4, 'descripcion' => 'Otro']
            ],
            'medio_derivacion' => [
                ['id' => 1, 'descripcion' => 'Teléfono'],
                ['id' => 2, 'descripcion' => 'Correo Electrónico'],
                ['id' => 3, 'descripcion' => 'Presencial'],
                ['id' => 4, 'descripcion' => 'Otro']
            ],
            'sistema_afectado' => [
                ['id' => 1, 'descripcion' => 'Musculoesquelético'],
                ['id' => 2, 'descripcion' => 'Nervioso'],
                ['id' => 3, 'descripcion' => 'Respiratorio'],
                ['id' => 4, 'descripcion' => 'Cardiovascular'],
                ['id' => 5, 'descripcion' => 'Otro']
            ],
            'tipo_atencion' => [
                ['id' => 1, 'descripcion' => 'Primera Vez'],
                ['id' => 2, 'descripcion' => 'Control'],
                ['id' => 3, 'descripcion' => 'Seguimiento'],
                ['id' => 4, 'descripcion' => 'Urgencia'],
                ['id' => 5, 'descripcion' => 'Otro']
            ],
            'turno' => [
                ['id' => 1, 'descripcion' => 'Mañana'],
                ['id' => 2, 'descripcion' => 'Tarde'],
                ['id' => 3, 'descripcion' => 'Noche'],
                ['id' => 4, 'descripcion' => 'Fin de Semana'],
                ['id' => 5, 'descripcion' => 'Otro']
            ],
            'tipo_licencia' => [
                ['id' => 1, 'descripcion' => 'Sin Licencia'],
                ['id' => 2, 'descripcion' => 'Licencia Parcial'],
                ['id' => 3, 'descripcion' => 'Licencia Total']
            ],
            'tipo_certificacion' => [
                ['id' => 1, 'descripcion' => 'Inicial'],
                ['id' => 2, 'descripcion' => 'Periódico'],
                ['id' => 3, 'descripcion' => 'Reintegro'],
                ['id' => 4, 'descripcion' => 'Seguimiento'],
                ['id' => 5, 'descripcion' => 'Especial']
            ],
            genero,
            afp,
            area,
            bateria, //baterias de examenes
            ceco, //centros de costo
            // Añade más tablas de referencia según sea necesario
        ];

        foreach ($tablasReferencia as $tabla => $datos) {
            // Verificar si la tabla existe antes de truncar
            if (Schema::hasTable($tabla)) {
                // Limpiar tabla antes de insertar
                DB::table($tabla)->truncate();

                // Insertar datos
                DB::table($tabla)->insert($datos);
            }
        }
    }

    // Método para crear registros base en tablas de referencia
    private function crearRegistrosBase(): void
    {
        // Definir registros base para cada tabla
        $registrosBase = [
            Afp::class => [
                ['id' => 1, 'descripcion' => 'Habitat'],
                ['id' => 2, 'descripcion' => 'Provida'],
                ['id' => 3, 'descripcion' => 'Cuprum'],
                ['id' => 4, 'descripcion' => 'Capital'],
                ['id' => 5, 'descripcion' => 'Modelo']
            ],
            Area::class => [
                ['id' => 1, 'descripcion' => 'Recursos Humanos'],
                ['id' => 2, 'descripcion' => 'Producción'],
                ['id' => 3, 'descripcion' => 'Mantenimiento'],
                ['id' => 4, 'descripcion' => 'Administración'],
                ['id' => 5, 'descripcion' => 'Seguridad']
            ],
            Empresa::class => [
                ['id' => 1, 'descripcion' => 'Empresa A', 'rut' => '11.111.111-1'],
                ['id' => 2, 'descripcion' => 'Empresa B', 'rut' => '22.222.222-2'],
                ['id' => 3, 'descripcion' => 'Empresa C', 'rut' => '33.333.333-3']
            ],
            EstadoCivil::class => [
                ['id' => 1, 'descripcion' => 'Soltero/a'],
                ['id' => 2, 'descripcion' => 'Casado/a'],
                ['id' => 3, 'descripcion' => 'Divorciado/a'],
                ['id' => 4, 'descripcion' => 'Viudo/a']
            ],
            Genero::class => [
                ['id' => 1, 'descripcion' => 'Masculino'],
                ['id' => 2, 'descripcion' => 'Femenino'],
                ['id' => 3, 'descripcion' => 'Otro']
            ],
            SeguroSalud::class => [
                ['id' => 1, 'descripcion' => 'Fonasa'],
                ['id' => 2, 'descripcion' => 'Isapre Banmédica'],
                ['id' => 3, 'descripcion' => 'Isapre Consalud']
            ],
            NivelInstruccion::class => [
                ['id' => 1, 'descripcion' => 'Básica'],
                ['id' => 2, 'descripcion' => 'Media'],
                ['id' => 3, 'descripcion' => 'Técnica'],
                ['id' => 4, 'descripcion' => 'Universitaria']
            ],
            LeySocial::class => [
                ['id' => 1, 'descripcion' => 'Ley 16.744'],
                ['id' => 2, 'descripcion' => 'Código del Trabajo']
            ],
            Nacionalidad::class => [
                ['id' => 1, 'descripcion' => 'Chilena'],
                ['id' => 2, 'descripcion' => 'Extranjera']
            ],
            ModalidadAtencion::class => [
                ['id' => 1, 'descripcion' => 'Presencial'],
                ['id' => 2, 'descripcion' => 'Remoto'],
                ['id' => 3, 'descripcion' => 'Híbrido']
            ],
            PuebloOriginario::class => [
                ['id' => 1, 'descripcion' => 'Mapuche'],
                ['id' => 2, 'descripcion' => 'Aymara'],
                ['id' => 3, 'descripcion' => 'Otro']
            ],
            Religion::class => [
                ['id' => 1, 'descripcion' => 'Católica'],
                ['id' => 2, 'descripcion' => 'Evangélica'],
                ['id' => 3, 'descripcion' => 'Sin religión']
            ],
            Planta::class => [
                ['id' => 1, 'descripcion' => 'Planta A'],
                ['id' => 2, 'descripcion' => 'Planta B'],
                ['id' => 3, 'descripcion' => 'Planta C']
            ],
            Prevision::class => [
                ['id' => 1, 'descripcion' => 'AFP'],
                ['id' => 2, 'descripcion' => 'IPS']
            ],
            Unidad::class => [
                ['id' => 1, 'descripcion' => 'Unidad 1'],
                ['id' => 2, 'descripcion' => 'Unidad 2'],
                ['id' => 3, 'descripcion' => 'Unidad 3']
            ],
            GrupoSanguineo::class => [
                ['id' => 1, 'descripcion' => 'A+'],
                ['id' => 2, 'descripcion' => 'A-'],
                ['id' => 3, 'descripcion' => 'B+'],
                ['id' => 4, 'descripcion' => 'B-'],
                ['id' => 5, 'descripcion' => 'AB+'],
                ['id' => 6, 'descripcion' => 'AB-'],
                ['id' => 7, 'descripcion' => 'O+'],
                ['id' => 8, 'descripcion' => 'O-']
            ]
        ];

        // Truncar y crear registros base para cada tabla
        foreach ($registrosBase as $modelo => $registros) {
            // Solo truncar si la tabla está vacía
            if ($modelo::count() === 0) {
                $modelo::truncate();
                foreach ($registros as $registro) {
                    $modelo::create($registro);
                }
            }
        }
    }
}
