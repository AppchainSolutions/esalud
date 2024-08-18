<?php

namespace App\Repository;

use App\Models\ExEquilibrio;
use App\Models\Paciente;
use Illuminate\Http\Request;


class ExEquilibrioRepository extends Repository
{
    public function __construct(ExEquilibrio $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_equilibrio as psm', 'psm.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->get();
        }

        return $result;
    }


    // Add any necessary methods to the repository here
}
