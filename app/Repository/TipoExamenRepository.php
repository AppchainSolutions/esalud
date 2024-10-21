<?php

namespace App\Repository;

use App\Models\TipoExamen;

class TipoExamenRepository extends Repository
{
    public function __construct(TipoExamen $model)
    {
        $this->model = $model;
    }

    // Add any necessary methods to the repository here
}
