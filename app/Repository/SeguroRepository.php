<?php

namespace App\Repository;

use App\Models\Seguro;


class SeguroRepository extends Repository
{
    public function __construct(Seguro $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
