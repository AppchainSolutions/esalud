<?php

namespace App\Repository;

use App\Models\ExEpo;
use App\Helpers\Tools;
use App\Models\Paciente;
use Illuminate\Http\Request;


class ExEpoRepository extends Repository
{
    public function __construct(ExEpo $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_epo as sec', 'sec.paciente_id', '=', 'paciente.id');
        return Tools::filterData($filters, $query);
    }
    // Add any necessary methods to the repository here
}
