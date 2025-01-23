<?php

namespace App\Repository;

use App\Models\ExAlcohol;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;

class ExAlcoholRepository extends Repository
{
    public function __construct(ExAlcohol $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_ayd as r', 'r.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }

    // Add any necessary methods to the repository here
}
