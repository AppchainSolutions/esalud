<?php

namespace App\Repository;

use App\Models\Area;


class AreaRepository extends Repository
{
    public function __construct(Area $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
