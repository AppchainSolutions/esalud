<?php

namespace App\Repository;

use App\Models\Enfermedad;

class EnfermedadRepository extends Repository
{
    public function __construct(Enfermedad $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
