<?php

namespace App\Repository;

use App\Models\Calle;


class CalleRepository extends Repository
{
    public function __construct(Calle $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}