<?php

namespace App\Repository;

use App\Helpers\Tools;
use App\Models\Vacuna;
use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class VacunaRepository extends Repository
{
    public function __construct(Vacuna $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('vacuna as sec', 'sec.paciente_id', '=', 'paciente.id');
        $results = Tools::filterData($filters, $query);
        return Response::json($results);
    }



    // Add any necessary methods to the repository here
}
