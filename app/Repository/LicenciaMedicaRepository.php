<?php

namespace App\Repository;

use App\Helpers\FilterTool;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Models\LicenciaMedica;
use Illuminate\Support\Facades\Response;

class LicenciaMedicaRepository extends Repository
{
    public function __construct(LicenciaMedica $model)
    {
        $this->model = $model;
    }

    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('licencia_medica as sec', 'sec.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }
}
