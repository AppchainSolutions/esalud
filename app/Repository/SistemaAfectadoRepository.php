<?php

namespace App\Repository;

use App\Models\SistemaAfectado;


class SistemaAfectadoRepository extends Repository
{
    public function __construct(SistemaAfectado $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
