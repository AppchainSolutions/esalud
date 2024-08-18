<?php

namespace App\Repository;

use App\Models\Exposicion;


class ExposicionRepository extends Repository
{
    public function __construct(Exposicion $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}

