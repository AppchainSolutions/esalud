<?php

namespace App\Repository;

use App\Models\Medicamentos;

class MedicamentoRepository extends Repository
{
    public function __construct(Medicamentos $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
