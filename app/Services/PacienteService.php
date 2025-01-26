<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Repository\PacienteRepository;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Collection;
use Clockwork\Clockwork;

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
        // Ejemplo de tracking de creación de paciente
        $this->clockwork->event('Crear Paciente')
            ->description('Proceso de creación de nuevo paciente')
            ->data($request->all());

        try {
            $paciente = $this->pacienteRepository->create($request);

            $this->clockwork->event('Crear Paciente')
                ->data([
                    'paciente_id' => $paciente->id,
                    'datos_creados' => $request->all()
                ]);

            Log::info('Paciente creado exitosamente', [
                'paciente_id' => $paciente->id
            ]);

            return $paciente;
        } catch (\Exception $e) {
            $this->clockwork->event('Error al Crear Paciente')
                ->failed()
                ->data([
                    'mensaje_error' => $e->getMessage(),
                    'datos_intento' => $request->all()
                ]);

            Log::error('Error al crear paciente', [
                'error' => $e->getMessage(),
                'datos' => $request->all()
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
            'fecha_nacimiento' => 'required|date',
            'genero' => 'required|in:M,F,O',
            'direccion' => 'required|string|max:255',
            'empresa_id' => 'required|exists:empresas,id',
            'area_id' => 'required|exists:areas,id',
            'tipo_sangre' => 'nullable|string|max:5',
            'alergias' => 'nullable|array',
            'contacto_emergencia' => 'required|array',
            'contacto_emergencia.nombre' => 'required|string|max:255',
            'contacto_emergencia.telefono' => 'required|string|max:20',
            'contacto_emergencia.relacion' => 'required|string|max:50',
        ]);
    }
}
