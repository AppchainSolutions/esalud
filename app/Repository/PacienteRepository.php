<?php

namespace App\Repository;

use App\Models\Pacientes;

class PacienteRepository extends Repository
{
    public function __construct(Pacientes $model)
    {
        $this->model = $model;
    }
}
