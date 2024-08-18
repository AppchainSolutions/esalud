<?php

namespace App\Repository;

use App\Models\Planta;

class PlantaRepository extends Repository
{
    public function __construct(Planta $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
