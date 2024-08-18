<?php

namespace App\Repository;

use App\Models\Bateria;


class BateriaRepository extends Repository
{
    public function __construct(Bateria $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
