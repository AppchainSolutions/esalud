<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Repository\PacienteRepository;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Collection;
use Clockwork\Clockwork;
use Illuminate\Support\Facades\DB;

class PacienteService
{
    private PacienteRepository $pacienteRepository;
    protected $clockwork;

    public function __construct(
        PacienteRepository $pacienteRepository,
        Clockwork $clockwork
    ) {
        $this->pacienteRepository = $pacienteRepository;
        $this->clockwork = $clockwork;
    }

    /**
     * Buscar pacientes por criterios
     * 
     * @param Request $request
     * @return Collection
     */
    public function search(Request $request) //: Collection
    {
        // Iniciar un evento personalizado en Clockwork
        $this->clockwork->event('Búsqueda de Pacientes')
            ->description('Realizando búsqueda con filtros')
            ->data($request->all());

        $inicio = microtime(true);

        try {
            $pacientesResponse = $this->pacienteRepository->search($request);

            // Extraer datos de la respuesta JSON
            $pacientes = $pacientesResponse->getData(true)['data'];
            $totalPacientes = $pacientesResponse->getData(true)['meta']['total'];

            $tiempoEjecucion = microtime(true) - $inicio;

            $this->clockwork->event('Búsqueda de Pacientes')
                ->duration($tiempoEjecucion * 1000) // Convertir a milisegundos
                ->data([
                    'total_pacientes' => $totalPacientes,
                    'tiempo_ejecucion' => $tiempoEjecucion
                ]);

            return $pacientes;
        } catch (\Throwable $e) {
            // Registrar errores en Clockwork y Log
            $this->clockwork->event('Error en Búsqueda de Pacientes')
                ->failed()
                ->data([
                    'mensaje_error' => $e->getMessage(),
                    'filtros' => $request->all()
                ]);

            Log::error('Error en búsqueda de pacientes', [
                'error' => $e->getMessage(),
                'filtros' => $request->all()
            ]);

            throw $e;
        }
    }

    /**
     * Mostrar un paciente específico con manejo de excepciones
     */
    public function show(Request $request)
    {
        // Ejemplo de tracking de creación de paciente
        $this->clockwork->event('Mostrar Paciente')
            ->description('Proceso de mostrar paciente')
            ->data($request->all());

        try {
            $paciente = $this->pacienteRepository->show($request);

            $this->clockwork->event('Mostrar Paciente')
                ->data([
                    'paciente_id' => $paciente->id,
                    'datos_mostrados' => $paciente
                ]);

            Log::info('Paciente mostrado exitosamente', [
                'paciente_id' => $paciente->id
            ]);

            return $paciente;
        } catch (\Exception $e) {
            $this->clockwork->event('Error al Mostrar Paciente')
                ->failed()
                ->data([
                    'mensaje_error' => $e->getMessage(),
                    'datos_intento' => $request->all()
                ]);

            Log::error('Error al mostrar paciente', [
                'error' => $e->getMessage(),
                'datos' => $request->all()
            ]);

            throw $e;
        }
    }

    /**
     * Crear un nuevo paciente con transacción
     */
    public function store(Request $request)
    {
        // Validar datos específicos de negocio
        $this->validatePacienteData($request);

        // Ejemplo de tracking de creación de paciente
        $this->clockwork->event('Crear Paciente')
            ->description('Creando nuevo paciente')
            ->data($request->all());

        $inicio = microtime(true);

        try {
            // Iniciar transacción
            DB::beginTransaction();

            // Validar datos del paciente
            $data = $this->validatePacienteData($request);

            // Crear paciente usando repositorio
            $paciente = $this->pacienteRepository->store($request);

            // Commit de transacción
            DB::commit();

            $tiempoEjecucion = microtime(true) - $inicio;

            // Registrar evento en Clockwork
            $this->clockwork->event('Crear Paciente')
                ->duration($tiempoEjecucion * 1000)
                ->data([
                    'paciente_id' => $paciente->id,
                    'tiempo_ejecucion' => $tiempoEjecucion
                ]);

            return $paciente;

        } catch (\Exception $e) {
            // Rollback en caso de error
            DB::rollBack();

            // Registrar error
            Log::error('Error al crear paciente: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Crear un nuevo paciente
     */
    public function storePaciente($data)
    {
        try {
            // Iniciar un evento personalizado en Clockwork
            $this->clockwork->event('Crear Paciente')
                ->description('Creando nuevo paciente')
                ->data($data);

            $inicio = microtime(true);

            // Crear paciente usando el repositorio
            $paciente = $this->pacienteRepository->store($data);

            $tiempoEjecucion = microtime(true) - $inicio;

            $this->clockwork->event('Crear Paciente')
                ->duration($tiempoEjecucion * 1000) // Convertir a milisegundos
                ->data([
                    'paciente_id' => $paciente->id,
                    'nombre' => $paciente->nombre
                ]);

            Log::info('Paciente creado exitosamente', [
                'paciente_id' => $paciente->id,
                'nombre' => $paciente->nombre
            ]);

            return $paciente;
        } catch (\Exception $e) {
            Log::error('Error al crear paciente', [
                'error' => $e->getMessage(),
                'datos' => $data
            ]);

            throw $e;
        }
    }

    /**
     * Actualizar información del paciente
     */
    public function update(Request $request)
    {
        // Ejemplo de tracking de actualización de paciente
        $this->clockwork->event('Actualizar Paciente')
            ->description('Proceso de actualización de paciente')
            ->data($request->all());

        try {
            $paciente = $this->pacienteRepository->update($request);

            // $this->clockwork->event('Actualizar Paciente')
            //     ->data([
            //         'paciente_id' => $paciente->id,
            //         'datos_actualizados' => $request->all()
            //     ]);

            // Log::info('Paciente actualizado exitosamente', [
            //     'paciente_id' => $paciente->id
            // ]);

            return $paciente;
        } catch (\Exception $e) {
            $this->clockwork->event('Error al Actualizar Paciente')
                ->failed()
                ->data([
                    'mensaje_error' => $e->getMessage(),
                    'datos_intento' => $request->all()
                ]);

            Log::error('Error al actualizar paciente', [
                'error' => $e->getMessage(),
                'datos' => $request->all()
            ]);

            throw $e;
        }
    }

    /**
     * Eliminar un paciente
     */
    public function destroy(Request $request)
    {
        // Ejemplo de tracking de eliminación de paciente
        $this->clockwork->event('Eliminar Paciente')
            ->description('Proceso de eliminación de paciente')
            ->data($request->all());

        try {
            $paciente = $this->pacienteRepository->delete($request);

            // $this->clockwork->event('Eliminar Paciente')
            //     ->data([
            //         'paciente_id' => $paciente->id,
            //         'datos_eliminados' => $request->all()
            //     ]);

            // Log::info('Paciente eliminado exitosamente', [
            //     'paciente_id' => $paciente->id
            // ]);

            return $paciente;
        } catch (\Exception $e) {
            $this->clockwork->event('Error al Eliminar Paciente')
                ->failed()
                ->data([
                    'mensaje_error' => $e->getMessage(),
                    'datos_intento' => $request->all()
                ]);

            Log::error('Error al eliminar paciente', [
                'error' => $e->getMessage(),
                'datos' => $request->all()
            ]);

            throw $e;
        }
    }

    /**
     * Validar datos del paciente
     */
    private function validatePacienteData(Request $request): array
    {
        return $request->validate([
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'rut' => 'required|string|unique:pacientes,rut',
            'email' => 'required|email|unique:pacientes,email',
            'telefono' => 'required|string|max:20',
            'fecha_nacimiento' => 'nullable|date',
            'genero' => 'nullable|in:M,F,O',
            'direccion' => 'nullable|string|max:255',
            'empresa_id' => 'nullable|exists:empresas,id',
            'area_id' => 'nullable|exists:areas,id',
            'tipo_sangre' => 'nullable|string|max:5',
            'alergias' => 'nullable|array',
        ]);
    }

    /**
     * Validaciones específicas de negocio para creación de paciente
     * 
     * @param array $data Datos del paciente a validar
     * @throws \InvalidArgumentException Si los datos no cumplen las reglas de negocio
     */
    private function validatePacienteDataBusiness(Request $request): void
    {
        // Validar que no exista un paciente con datos similares
        // if ($this->pacienteRepository->existsPacienteWithSimilarData($request)) {
        //     throw new \InvalidArgumentException('Ya existe un paciente con datos similares');
        // }

        // Validar edad mínima si se proporciona fecha de nacimiento
        if (!empty($request->fecha_nacimiento)) {
            $edad = \Carbon\Carbon::parse($request->fecha_nacimiento)->age;
            
            // Ejemplo de regla de negocio: paciente debe ser mayor de 18
            if ($edad < 18) {
                throw new \InvalidArgumentException('El paciente debe ser mayor de edad');
            }
        }

        // Validar formato de RUT chileno si está presente
        if (!empty($request->rut) && !$this->validateRut($request->rut)) {
            throw new \InvalidArgumentException('El RUT ingresado no es válido');
        }

        // Validar formato de teléfono
        if (!empty($request->telefono1) && !$this->validatePhoneNumber($request->telefono1)) {
            throw new \InvalidArgumentException('El número de teléfono no tiene un formato válido');
        }
    }

    /**
     * Validar RUT chileno
     * 
     * @param string $rut RUT a validar
     * @return bool
     */
    private function validateRut(string $rut): bool
    {
        // Eliminar puntos y guión
        $rut = preg_replace('/[.-]/', '', $rut);
        
        // Separar dígitos verificadores
        $body = substr($rut, 0, -1);
        $dv = substr($rut, -1);
        
        // Calcular dígito verificador
        $suma = 0;
        $multiplo = 2;
        
        for ($i = strlen($body) - 1; $i >= 0; $i--) {
            $suma += $body[$i] * $multiplo;
            $multiplo = $multiplo == 7 ? 2 : $multiplo + 1;
        }
        
        $dvCalculado = 11 - ($suma % 11);
        $dvCalculado = $dvCalculado == 11 ? 0 : ($dvCalculado == 10 ? 'K' : $dvCalculado);
        
        return strtoupper($dv) === strtoupper($dvCalculado);
    }

    /**
     * Validar formato de número de teléfono
     * 
     * @param string $phone Número de teléfono a validar
     * @return bool
     */
    private function validatePhoneNumber(string $phone): bool
    {
        // Ejemplo de validación para teléfonos chilenos
        // +56 9 1234 5678 o 912345678
        return preg_match('/^(\+?56)?[ -]?9[ -]?[0-9]{4}[ -]?[0-9]{4}$/', $phone) === 1;
    }
}
