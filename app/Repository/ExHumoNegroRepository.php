<?php

namespace App\Repository;

use App\Models\ExHumoNegro;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;

class ExHumoNegroRepository extends Repository
{
    public function __construct(ExHumoNegro $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvmohn as hn', 'hn.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }

    // Add any necessary methods to the repository here
}
