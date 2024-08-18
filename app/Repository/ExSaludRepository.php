<?php

namespace App\Repository;

use App\Models\ExSalud;
use App\Models\Paciente;
use Illuminate\Http\Request;

class ExSaludRepository extends Repository
{
    public function __construct(ExSalud $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_salud as sal', 'sal.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->get();
        }

        return $result;
    }

    // Add any necessary methods to the repository here
}
