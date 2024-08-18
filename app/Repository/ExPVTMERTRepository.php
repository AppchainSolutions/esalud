<?php

namespace App\Repository;

use App\Models\ExPVTMERT;
use App\Models\Paciente;
use Illuminate\Http\Request;

class ExPVTMERTRepository extends Repository
{
    public function __construct(ExPVTMERT $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvt as pvt', 'pvt.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->get();
        }

        return $result;
    }


    // Add any necessary methods to the repository here
}
