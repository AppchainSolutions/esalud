<?php

namespace App\Repository;

use App\Helpers\Tools;
use App\Models\LicenciaMedica;
use App\Models\Paciente;
use Illuminate\Http\Request;

class LicenciaMedicaRepository extends Repository
{
    public function __construct(LicenciaMedica $model)
    {
        $this->model = $model;
    }

    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('licencia_medica as sec', 'sec.paciente_id', '=', 'paciente.id');

        return Tools::filterData($filters, $query);
    }
}
