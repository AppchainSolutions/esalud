<?php

namespace App\Repository;

use App\Models\AntecedentesFamiliares;

class AntecedenteFamiliarRepository extends Repository
{
    public function __construct(AntecedentesFamiliares $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
