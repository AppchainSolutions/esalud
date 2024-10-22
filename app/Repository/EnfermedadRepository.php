<?php

namespace App\Repository;

use App\Models\Enfermedades;

class EnfermedadRepository extends Repository
{
    public function __construct(Enfermedades $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
