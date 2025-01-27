<?php

namespace App\Repository;

use App\Models\Paciente;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class PacienteRepository extends Repository
{
    protected Model $model;

    public function __construct(Paciente $paciente)
    {
        $this->model = $paciente;
    }

    public function createPaciente(Request $request)
    {
        $data = $request->all();
        Log::info($data);
        // try {
        //     $model = $this->model->create($data);
        //     $this->clearModelCache();
        //     return $model;
        // } catch (\Exception $e) {
        //     Log::error('Error creating model', [
        //         'error_message' => $e->getMessage(),
        //         'error_code' => $e->getCode(),
        //         'data' => $data
        //     ]);
        //     throw $e;
        // }
    }

}
