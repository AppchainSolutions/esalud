<?php

namespace App\Repository;

use App\Models\Responsable;


class ResponsableRepository extends Repository
{
    public function __construct(Responsable $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
