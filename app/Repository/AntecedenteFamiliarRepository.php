<?php

namespace App\Repository;

use App\Models\AntecedenteFamiliar;

class AntecedenteFamiliarRepository extends Repository
{
    public function __construct(AntecedenteFamiliar $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
