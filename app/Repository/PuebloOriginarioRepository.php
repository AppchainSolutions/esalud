<?php

namespace App\Repository;

use App\Models\PueblosOriginarios;

class PuebloOriginarioRepository extends Repository
{
    public function __construct(PueblosOriginarios $model)
    {
        $this->model = $model;
    }
    // Add any necessary methods to the repository here
}
