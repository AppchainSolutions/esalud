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
        $data = $request->input('data');
        $id = $data['id'];

        // Remove the 'id' key from the data array
        $dataNoId = $data;
        unset($dataNoId['id']);

        try {
            // Retrieve the model instance
            $model = $this->model->findOrFail($id);

            // Log the retrieved model instance
            Log::info($model);

            // Update the model instance
            $model->fill($dataNoId);
            $model->save();

            // Return a successful response
            return Response::json(['message' => 'Model updated successfully']);
        } catch (ModelNotFoundException $e) {
            // Log the error
            Log::error($e);

            // Return a 404 response
            return Response::json(['error' => 'Model not found'], 404);
        } catch (QueryException $e) {
            // Log the error
            Log::error($e);

            // Return a 500 response
            return Response::json(['error' => 'Database error'], 500);
        }
    }

    public function show(Request $request)
    {
        try {
            $filters = $request->input('data');
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
