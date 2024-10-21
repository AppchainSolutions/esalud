<?php

namespace App\Repository;

use App\Models\FactorRiesgo;

class FactorRiesgoRepository extends Repository
{
    public function __construct(FactorRiesgo $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
