<?php

namespace App\Repository;

use App\Helpers\Tools;
use App\Models\Paciente;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Models\AtencionDiaria;
use App\Repository\Repository;
use Illuminate\Support\Facades\Response;

class AtencionDiariaRepository extends Repository
{

    public function __construct(AtencionDiaria $model)
    {
        $this->model = $model;
    }

    public function search(Request $request)
    {
        try {
            $filters = $request->input('filters');
            $query = Paciente::join('atencion_diaria as sec', 'sec.paciente_id', '=', 'paciente.id');
            return Tools::filterData($filters, $query);
        } catch (QueryException $e) {
            return Response::json([
                'result' => 'error',
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
