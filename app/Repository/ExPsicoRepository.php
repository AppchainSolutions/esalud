<?php

namespace App\Repository;

use App\Models\ExPsico;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;


class ExPsicoRepository extends Repository
{
    public function __construct(ExPsico $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_psm as psm', 'psm.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }
}
