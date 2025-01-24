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

abstract class Repository implements RepositoryInterface
{

    protected $model;

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

            $request = $this->model->create($query);
            $this->clearModelCache();
            return response()->json([
                'message' => 'Registro creado con éxito',
            ], 200);
        } catch (QueryException $e) {
            Log::error('store', [$e]);
            return response()->json([
                'message' => 'Se produjo un error: ',
                'error' => $e->getMessage(),
            ], 500);
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
        Log::info('Búsqueda en Repositorio', [
            'filters' => $request->all(),
            'timestamp' => now()->toDateTimeString()
        ]);
        try {
            Log::info($request);
            $class = get_class($this->model);
            $cacheKey = $this->getCacheKey('search', $request->all());
            
            return Cache::tags($class)->remember($cacheKey, 3600, function () use ($request) {
                $filters = $request->input('data');
                $query = $this->model->query()
                    ->select("*");
                return FilterTool::filterData($filters, $query);
            });
        } catch (QueryException $e) {
            return response()->json([
                'result' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Crear un nuevo registro
     *
     * @param array $data
     * @return Model
     */
    public function create(array $data)
    {
        return $this->model->create($data);
    }


    /**
     * Encontrar un registro por su ID
     *
     * @param int $id
     * @param array $relations
     * @return Model
     */
    public function find($id, array $relations = [])
    {
        return $this->model->with($relations)->findOrFail($id);
    }

    /**
     * Obtener registros con paginación
     *
     * @param int $perPage
     * @param array $relations
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public function paginate($perPage = 15, array $relations = [])
    {
        return $this->model->with($relations)->paginate($perPage);
    }
}
