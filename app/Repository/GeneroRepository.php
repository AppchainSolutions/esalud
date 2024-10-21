<?php

namespace App\Repository;

use App\Models\Generos;

class GeneroRepository extends Repository
{
    public function __construct(Generos $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
