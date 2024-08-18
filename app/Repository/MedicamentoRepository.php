<?php

namespace App\Repository;

use App\Models\Medicamento;


class MedicamentoRepository extends Repository
{
    public function __construct(Medicamento $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
