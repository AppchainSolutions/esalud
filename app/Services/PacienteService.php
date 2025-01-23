<?php

namespace App\Services;

use App\Exceptions\PacienteNotFoundException;
use App\Exceptions\PacienteRutDuplicadoException;
use App\Exceptions\ValidationException;
use App\Models\Paciente;
use App\Repository\PacienteRepository;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

class PacienteService
{
    protected $pacienteRepository;

    /**
     * Create a new PacienteService instance.
     */
    public function __construct(PacienteRepository $pacienteRepository)
    {
        $this->pacienteRepository = $pacienteRepository;
    }

    /**
     * Mostrar un paciente específico con manejo de excepciones
     */
    public function show(Request $request)
    {
        try {
            $request->validate([
                'id' => 'required|exists:$request->id'
            ]);

            $paciente = $this->pacienteRepository->search($request);

            return $paciente;
        } catch (ValidationException $e) {
            Log::warning('Error de validación en show paciente: ' . $e->getMessage());
            throw $e;
        } catch (Throwable $e) {
            Log::error('Error al mostrar paciente: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Crear un nuevo paciente con transacción
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $validated = $this->validatePacienteData($request);
            
            try {
                $paciente = $this->pacienteRepository->create($validated);
            } catch (UniqueConstraintViolationException $e) {
                throw new PacienteRutDuplicadoException($validated['rut']);
            }

            // Crear registros relacionados si existen
            if ($request->has('historial_medico')) {
                $this->createHistorialMedico($paciente, $request->historial_medico);
            }

            DB::commit();
            return $paciente;
        } catch (PacienteRutDuplicadoException $e) {
            DB::rollBack();
            throw $e;
        } catch (Throwable $e) {
            DB::rollBack();
            Log::error('Error al crear paciente: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Actualizar información del paciente
     */
    public function update(Request $request)
    {
        // Validar el request
        $validated = $request->validate([
            'id' => 'required|exists:pacientes,id',
            'nombre' => 'sometimes|string|max:255',
            'apellido' => 'sometimes|string|max:255',
            'rut' => 'sometimes|string|unique:pacientes,rut,' . $request->id,
            'email' => 'sometimes|email|unique:pacientes,email,' . $request->id,
            'empresa_id' => 'sometimes|exists:empresas,id',
            'area_id' => 'sometimes|exists:areas,id',
            // Agregar más validaciones según tus campos
        ]);

        return $this->pacienteRepository->update($request->id, $validated);
    }

    /**
     * Actualizar estado de certificación del paciente
     * @param Request $request
     * @return mixed
     * @throws PacienteNotFoundException
     */
   /*  public function updateEstadoCertificacion(Request $request)
    {
        try {
            $pacienteId = $request->input('paciente_id');
            $estado = $request->input('estado');
            
            return DB::transaction(function () use ($pacienteId, $estado) {
                $paciente = $this->pacienteRepository->findById($pacienteId);
                if (!$paciente) {
                    throw new PacienteNotFoundException("Paciente no encontrado con ID: {$pacienteId}");
                }

                return $this->pacienteRepository->update($pacienteId, [
                    'estado_certificacion' => $estado,
                    'fecha_actualizacion_certificacion' => Carbon::now()
                ]);
            });
        } catch (Throwable $e) {
            Log::error('Error al actualizar estado de certificación: ' . $e->getMessage());
            throw $e;
        }
    } */

    /**
     * Eliminar un paciente
     */
    public function destroy(Request $request)
    {
        // Validar el request
        $request->validate([
            'id' => 'required|exists:pacientes,id'
        ]);

        return $this->pacienteRepository->delete($request->id);
    }

    /**
     * Agregar documento médico al paciente
     */
   /*  public function addDocumentoMedico(int $pacienteId, array $documentoData): void
    {
        try {
            DB::transaction(function () use ($pacienteId, $documentoData) {
                $paciente = $this->pacienteRepository->findById($pacienteId);
                if (!$paciente) {
                    throw new PacienteNotFoundException("Paciente no encontrado con ID: {$pacienteId}");
                }

                $paciente->documentos()->create($documentoData);
            });
        } catch (Throwable $e) {
            Log::error('Error al agregar documento médico: ' . $e->getMessage());
            throw $e;
        }
    } */

    /**
     * Programar cita médica
     */

     /*  public function programarCita(int $pacienteId, array $citaData): void
    {
        try {
            DB::transaction(function () use ($pacienteId, $citaData) {
                $paciente = $this->pacienteRepository->findById($pacienteId);
                if (!$paciente) {
                    throw new PacienteNotFoundException("Paciente no encontrado con ID: {$pacienteId}");
                }

                // Validar disponibilidad de horario
                $this->validarDisponibilidadCita($citaData);

                $paciente->citas()->create($citaData);
            });
        } catch (Throwable $e) {
            Log::error('Error al programar cita: ' . $e->getMessage());
            throw $e;
        }
    } */

    /**
     * Obtener estadísticas del paciente
     */
    /* public function getEstadisticas(int $pacienteId): array
    {
        try {
            $paciente = $this->pacienteRepository->findById($pacienteId, [
                'citas',
                'atenciones',
                'certificaciones'
            ]);

            if (!$paciente) {
                throw new PacienteNotFoundException("Paciente no encontrado con ID: {$pacienteId}");
            }

            return [
                'total_citas' => $paciente->citas->count(),
                'total_atenciones' => $paciente->atenciones->count(),
                'certificaciones_vigentes' => $paciente->certificaciones->where('vigente', true)->count(),
                'ultima_atencion' => $paciente->atenciones->sortByDesc('fecha')->first(),
                'proxima_cita' => $paciente->citas->where('fecha', '>', Carbon::now())->first()
            ];
        } catch (Throwable $e) {
            Log::error('Error al obtener estadísticas: ' . $e->getMessage());
            throw $e;
        }
    } */

    /**
     * Obtener pacientes con sus certificaciones
     */
    /* public function getPacientesConCertificaciones(): Collection
    {
        return $this->pacienteRepository->with(['certificacion', 'estado_certificacion'])->get();
    } */

    /**
     * Obtener pacientes con sus atenciones médicas
     */
    /* public function getPacientesConAtenciones(): Collection
    {
        return $this->pacienteRepository->with(['atenciones'])->get();
    } */

    /**
     * Obtener historial médico completo del paciente
     */
    /* public function getHistorialMedico(int $id): ?Paciente
    {
        return $this->pacienteRepository->findById($id, [
            'alergia',
            'enfermedad',
            'cirugia',
            'medicamento',
            'vacuna',
            'familiar',
            'exasma',
            'exalcohol',
            'exepo'
        ]);
    } */

    /**
     * Buscar pacientes por criterios
     */
    public function search(Request $request): Object
    {
        return $this->pacienteRepository->search($request);
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

    /**
     * Validar disponibilidad de horario para cita
     */
    private function validarDisponibilidadCita(array $citaData): void
    {
        $existeCita = DB::table('citas')
            ->where('medico_id', $citaData['medico_id'])
            ->where('fecha', $citaData['fecha'])
            ->where('hora', $citaData['hora'])
            ->exists();

        if ($existeCita) {
            throw new ValidationException('El horario seleccionado no está disponible');
        }
    }

    /**
     * Crear historial médico inicial
     */
    private function createHistorialMedico(Paciente $paciente, array $historialData): void
    {
        $paciente->historialMedico()->create($historialData);
    }
}
