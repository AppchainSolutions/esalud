<?php

namespace App\Repository;

use App\Models\ExRespirador;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;

class ExRespiradorRepository extends Repository
{
    public function __construct(ExRespirador $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_epo as epo', 'epo.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }
}
