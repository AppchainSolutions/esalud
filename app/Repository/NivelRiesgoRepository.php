<?php

namespace App\Repository;

use App\Models\NivelRiesgo;

class NivelRiesgoRepository extends Repository
{
    public function __construct(NivelRiesgo $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
