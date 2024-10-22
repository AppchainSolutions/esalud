<?php

namespace App\Repository;

use App\Models\FactoresRiesgo;

class FactorRiesgoRepository extends Repository
{
    public function __construct(FactoresRiesgo $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
