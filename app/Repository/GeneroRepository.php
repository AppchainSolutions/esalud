<?php

namespace App\Repository;

use App\Models\Genero;

class GeneroRepository extends Repository
{
    public function __construct(Genero $model)
    {
        $this->model = $model;
    }


    // Add any necessary methods to the repository here
}
