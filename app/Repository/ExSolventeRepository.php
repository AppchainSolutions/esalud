<?php

namespace App\Repository;

use App\Models\ExSolvente;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;

class ExSolventeRepository extends Repository
{
    public function __construct(ExSolvente $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvmosol as sol', 'sol.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->with('empresa', 'ceco', 'area', 'unidad', 'planta')
                ->get();
        }

        return FilterTool::filterData(  $filters, $result);
    }

    // Add any necessary methods to the repository here
}
