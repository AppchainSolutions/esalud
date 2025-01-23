<?php

namespace App\Repository;

use App\Models\Paciente;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use App\Repository\Repository;

class PacienteRepository extends Repository
{
    public function __construct(Paciente $model)
    {
        $this->model = $model;
    }

    /**
     * Buscar pacientes por criterios
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    /*  public function search(Request $request)
    {
        try {
            $criteria = $request->input('data', []);
            $relations = $request->input('relations', []);
            
            $query = $this->model->query();

            if (!empty($relations)) {
                $query->with($relations);
            }

            if (isset($criteria['nombre'])) {
                $query->where('nombre', 'ILIKE', '%' . $criteria['nombre'] . '%');
            }

            if (isset($criteria['apellido'])) {
                $query->where('apellido', 'ILIKE', '%' . $criteria['apellido'] . '%');
            }

            if (isset($criteria['dni'])) {
                $query->where('dni', 'ILIKE', '%' . $criteria['dni'] . '%');
            }

            return response()->json([
                'result' => $query->paginate(10)
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'result' => 'error',
                'message' => 'Error al procesar la búsqueda de pacientes',
                'error' => $e->getMessage()
            ], 500);
        }
    } */

    /**
     * Paginar y filtrar pacientes
     *
     * @param array $filters
     * @param int $perPage
     * @param array $relations
     * @return LengthAwarePaginator
     */
    /* public function paginateWithFilters(array $filters = [], int $perPage = 15, array $relations = []): LengthAwarePaginator
    {
        $query = $this->model->query();

        // Aplicar filtros
        if (!empty($filters['search'])) {
            $query->where(function($q) use ($filters) {
                $q->where('nombre', 'ilike', '%' . $filters['search'] . '%')
                  ->orWhere('apellido', 'ilike', '%' . $filters['search'] . '%')
                  ->orWhere('dni', 'ilike', '%' . $filters['search'] . '%');
            });
        }

        if (!empty($filters['empresa_id'])) {
            $query->where('empresa_id', $filters['empresa_id']);
        }

        if (!empty($filters['area_id'])) {
            $query->where('area_id', $filters['area_id']);
        }

        // Cargar relaciones
        if (!empty($relations)) {
            $query->with($relations);
        }

        return $query->orderBy('created_at', 'desc')->paginate($perPage);
    } */

    /**
     * Encuentra un paciente por ID o lanza una excepción
     *
     * @param int $id ID del paciente
     * @param array $relations Relaciones a cargar
     * @return \App\Models\Paciente
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    /*     public function findById($id, array $relations = [])
    {
        return $this->model->with($relations)->findOrFail($id);
    } */
}
