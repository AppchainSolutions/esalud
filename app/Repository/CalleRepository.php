<?php

namespace App\Repository;

use App\Models\Calles;


class CalleRepository extends Repository
{
    public function __construct(Calles $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}