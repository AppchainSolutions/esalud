<?php

namespace App\Repository;

use App\Models\ExSilice;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Helpers\Tools;

class ExSiliceRepository extends Repository
{
    public function __construct(ExSilice $model)
    {
        $this->model = $model;
    }


    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('examen_pvmos as sil', 'sil.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->with('empresa', 'ceco', 'area', 'unidad', 'planta')
                ->get();
        }

        return Tools::filterData($filters, $query);
    }

    // Add any necessary methods to the repository here
}
