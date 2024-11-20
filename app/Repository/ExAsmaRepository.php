<?php

namespace App\Repository;

use App\Models\ExAsma;
use App\Models\Paciente;
use Illuminate\Http\Request;

class ExAsmaRepository extends Repository
{
    public function __construct(ExAsma $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_asma as a', 'a.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->get();
        }

        return $result;
    }

    // Add any necessary methods to the repository here
}
