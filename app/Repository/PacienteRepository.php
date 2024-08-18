<?php

namespace App\Repository;

use App\Models\Paciente;

class PacienteRepository extends Repository
{
    public function __construct(Paciente $model)
    {
        $this->model = $model;
    }
}
