<?php

namespace App\Repository;

use App\Models\Diat;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\FilterTool;
use Illuminate\Support\Facades\Log;

class DiatRepository extends Repository
{
    public function __construct(Diat $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        Log::info("dfil", $filters);
        $query = Paciente::join('diat as sec', 'sec.paciente_id', '=', 'paciente.id');
        return FilterTool::filterData($filters, $query);
    }

    // Add any necessary methods to the repository here
}
