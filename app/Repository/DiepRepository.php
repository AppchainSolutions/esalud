<?php

namespace App\Repository;

use App\Models\Diep;
use App\Helpers\FilterTool;
use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class DiepRepository extends Repository
{
    public function __construct(Diep $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('diep as sec', 'sec.paciente_id', '=', 'paciente.id');
        $results = FilterTool::filterData($filters, $query);
        return Response::json($results);
    }



    // Add any necessary methods to the repository here
}
