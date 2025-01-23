<?php

namespace App\Repository;

use App\Models\ExAldehido;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;

class ExAldehidoRepository extends Repository
{
    public function __construct(ExAldehido $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvmoal as al', 'al.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }

    // Add any necessary methods to the repository here
}
