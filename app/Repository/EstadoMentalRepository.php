<?php

namespace App\Repository;

use App\Models\EstadoMental;


class EstadoMentalRepository extends Repository
{
    public function __construct(EstadoMental $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
