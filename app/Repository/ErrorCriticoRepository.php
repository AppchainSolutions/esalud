<?php

namespace App\Repository;

use App\Models\ErrorCritico;


class ErrorCriticoRepository extends Repository
{
    public function __construct(ErrorCritico $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}