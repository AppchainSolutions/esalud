<?php

namespace App\Repository;

use App\Models\SeguroSalud;


class SeguroRepository extends Repository
{
    public function __construct(SeguroSalud $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
