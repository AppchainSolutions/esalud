<?php

namespace App\Repository;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Response;
use App\Helpers\FilterTool;
use Illuminate\Support\Facades\Cache;

    /**
     * Clase abstracta que implementa los metodos basicos para operar con un modelo.
     * 
     * Los metodos que se implementan son:
     * 
     * - all(): Obtiene todos los registros de un modelo.
     * - store(Request $request): Crea un nuevo registro con los datos de la solicitud.
     * - update(Request $request): Actualiza un registro existente con los datos de la solicitud.
     * - delete(Request $request): Borra un registro existente.
     * - search(Request $request): Realiza una busqueda en el modelo.
     * - show(Request $request): Obtiene un registro existente.
     * - create(array $data): Crea un nuevo registro con los datos pasados como parametro.
     */
abstract class Repository implements RepositoryInterface
{

    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        $class = get_class($this->model);
        $cacheKey = $this->getCacheKey('all');

        try {
            $data = Cache::tags($class)->remember($cacheKey, 3600, function () {
                return $this->model->all();
            });

            return Response::json([
                'result' => $data,
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'result' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    protected function getCacheKey($method, $params = null)
    {
        $class = get_class($this->model);
        return $class . '_' . $method . ($params ? '_' . md5(json_encode($params)) : '');
    }

    protected function clearModelCache()
    {
        $class = get_class($this->model);
        Cache::tags($class)->flush();
    }

    public function store(Request $request)
    {
        $query = $request->get('data');
        Log::info($query);
        try {
            $query = array_map(function ($value) {
                return is_array($value) ? implode(',', $value) : $value;
            }, $query);

            $model = $this->model->create($query);
            $this->clearModelCache();
            return $model;
        } catch (QueryException $e) {
            Log::error('store', [$e]);
            throw $e;
        }
    }

    public function update(Request $request)
    {
        // Extract the 'id' from the incoming request data
        $id = $request->input('data.id');
        Log::info('Attempting to update model with ID: ' . $id);

        // Retrieve the data to update and log it
        $dataToUpdate = $request->input('data');
        Log::info('Incoming data for update: ', $dataToUpdate);

        // Remove the 'id' key to prepare for updating the model
        unset($dataToUpdate['id']);

        // Log the data that will be used for the update
        Log::info('Data prepared for update: ', $dataToUpdate);

        try {
            // Retrieve the model instance or fail if not found
            $model = $this->model->findOrFail($id);

            // Update the model instance with the new data
            $model->fill($dataToUpdate);
            $model->save();

            Log::info('Model updated successfully with ID: ' . $id);
            $this->clearModelCache();
            return response()->json(['message' => 'Model updated successfully.'], 200);
        } catch (ModelNotFoundException $e) {
            Log::error('Model not found for ID: ' . $id);
            return response()->json(['error' => 'Model not found.'], 404);
        } catch (\Exception $e) {
            Log::error('Error updating model with ID: ' . $id . '. Error: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while updating the model.'], 500);
        }
    }

    public function delete(Request $request)
    {
        $id = $request->get('id');
        try {
            $this->model->destroy($id);
            $this->clearModelCache();
            return Response::json([
                'message' => 'Registro borrado con exito',
            ], 200);
        } catch (QueryException $e) {
            return Response::json([
                'result' => "500",
                'message' => 'Error al borrar el registro',
                'error' => $e,
            ], 500);
        }
    }

    public function search(Request $request)
    {
        try {
            $class = get_class($this->model);
            $results = FilterTool::filterData($request, $class);
            Log::info('Búsqueda completada exitosamente (Repo)', [
                'results_count' => is_countable($results) ? count($results) : 0,    
            ]);

            return response()->json([
                'data' => $results,
                'meta' => [
                    'total' => is_countable($results) ? count($results) : 0,
                    'page' => $request->input('page', 1),
                    'per_page' => $request->input('per_page', 15)
                ]
            ], 200);
        } catch (QueryException $e) {
            Log::error('Error en búsqueda', [
                'error_message' => $e->getMessage(),
                'error_code' => $e->getCode(),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);
            return response()->json([
                'error' => true,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function show(Request $request)
    {
        $id = $request->get('id');
        try {
            return $this->model->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'result' => 'error',
                'message' => 'Model not found',
            ], 404);
        }
    }

    /**
     * Crear un nuevo registro
     *
     * @param array $data
     * @return Model
     */
    public function create($request)
    {
        return $this->model->create($request->all());
    }
}
