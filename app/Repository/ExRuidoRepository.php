<?php

namespace App\Repository;

use App\Models\ExRuido;
use App\Models\Paciente;
use Illuminate\Http\Request;

class ExRuidoRepository extends Repository
{
    public function __construct(ExRuido $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvmor as r', 'r.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->get();
        }

        return $result;
    }

    // Add any necessary methods to the repository here
}
