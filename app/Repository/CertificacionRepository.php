<?php

namespace App\Repository;

use App\Models\Certificacion;
use App\Models\Paciente;
use Illuminate\Http\Request;

class CertificacionRepository extends Repository
{
    public function __construct(Certificacion $model)
    {
        $this->model = $model;
    }
    public function search(Request $request)
    {
        $filters = $request->get('filters');
        $query = Paciente::join('certificacion as cert', 'cert.paciente_id', '=', 'paciente.id');
        foreach ($filters as $key => $value) {
            $result = $query->where($key, $value)
                ->get();
        }

        return $result;
    }
}
