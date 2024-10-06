<?php

namespace App\Repository;

use App\Models\Alergia;


class AlergiaRepository extends Repository
{
    public function __construct(Alergia $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
