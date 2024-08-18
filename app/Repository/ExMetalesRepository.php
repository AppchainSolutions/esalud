<?php

namespace App\Repository;

use App\Models\ExMetales;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\Tools;

class ExMetalesRepository extends Repository
{
    public function __construct(ExMetales $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvmom as r', 'r.paciente_id', '=', 'paciente.id');
        return Tools::filterData($filters, $query);
    }

    // Add any necessary methods to the repository here
}
