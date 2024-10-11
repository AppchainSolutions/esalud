<?php

namespace App\Repository;

use App\Models\SeguroSalud;


class SeguroSaludRepository extends Repository
{
    public function __construct(SeguroSalud $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
