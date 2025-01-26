<?php

namespace App\Repository;

use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class PacienteRepository extends Repository
{
    protected Model $model;

    public function __construct(Paciente $paciente)
    {
        $this->model = $paciente;
    }

    /**
     * Buscar pacientes con filtros dinámicos
     * 
     * @param Request $request
     * @return Collection
     */
    // public function search(Request $request): Collection
    // {
    //     Log::info('Búsqueda de pacientes en Repositorio', [
    //         'filters' => $request->all()
    //     ]);

    //     $query = $this->model->newQuery();

    //     // Filtros dinámicos
    //     if ($request->has('nombre')) {
    //         $query->where('nombre', 'ILIKE', '%' . $request->input('nombre') . '%');
    //     }

    //     if ($request->has('apellido')) {
    //         $query->where('apellido', 'ILIKE', '%' . $request->input('apellido') . '%');
    //     }

    //     // Más filtros según sea necesario
        
    //     return $query->get();
    // }
}
