<?php

namespace App\Repository;

use App\Models\Derivacion;

class DerivacionRepository extends Repository
{
    public function __construct(Derivacion $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
