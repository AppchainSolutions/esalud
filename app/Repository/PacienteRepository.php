<?php

namespace App\Repository;

use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class PacienteRepository extends Repository
{
    protected Model $model;

    public function __construct(Paciente $paciente)
    {
        $this->model = $paciente;
    }

}
