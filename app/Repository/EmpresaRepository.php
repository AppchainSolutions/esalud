<?php

namespace App\Repository;

use App\Models\Empresa;

class EmpresaRepository extends Repository {

    public function __construct(Empresa $model) {
        $this->model = $model;
    }
}
