<?php

namespace App\Repository;

use App\Models\ExSomnolencia;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;
use Log;

class ExSomnolenciaRepository extends Repository
{
    public function __construct(ExSomnolencia $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_somnolencia as som', 'som.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }



    // Add any necessary methods to the repository here
}
