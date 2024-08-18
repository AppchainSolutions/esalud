<?php

namespace App\Repository;

use App\Models\Afp;


class AfpRepository extends Repository
{
    public function __construct(Afp $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
