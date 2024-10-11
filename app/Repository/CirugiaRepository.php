<?php

namespace App\Repository;

use App\Models\Cirugia;


class CirugiaRepository extends Repository
{
    public function __construct(Cirugia $model)
    {
        $this->model = $model;
    }



    // Add any necessary methods to the repository here
}
