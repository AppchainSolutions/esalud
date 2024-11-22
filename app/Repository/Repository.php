<?php

namespace App\Repository;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Response;
use App\Helpers\Tools;

abstract class Repository implements RepositoryInterface
{

    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        try {
            $query = $this->model->all();
            return Response::json([
                'result' => $query
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'result' => "500",
                'message' => 'Se produjo un error.',
                'error' => $e,
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $query = $request->get('data');
        Log::info($request);

        try {
            $query = array_map(function ($value) {
                return is_array($value) ? implode(',', $value) : $value;
            }, $query);

            $request = $this->model->create($query);
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
        
        return response()->json(['message' => 'Model updated successfully.'], 200);
    } catch (ModelNotFoundException $e) {
        Log::error('Model not found for ID: ' . $id);
        return response()->json(['error' => 'Model not found.'], 404);
    } catch (\Exception $e) {
        Log::error('Error updating model with ID: ' . $id . '. Error: ' . $e->getMessage());
        return response()->json(['error' => 'An error occurred while updating the model.'], 500);
    }
}

    public function show(Request $request)
    {
        try {
            $filters = $request->input('data');
            Log::info($request);
            $query = $this->model->query()
            ->select("*");
            return Tools::filterData($filters, $query);
        } catch (QueryException $e) {
            return response()->json([
                'result' => 'error',
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function delete(Request $request)
    {
        $id = $request->get('id');
        try {
            $this->model->destroy($id);
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
}
