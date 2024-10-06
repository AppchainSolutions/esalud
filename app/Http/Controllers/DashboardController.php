<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Models\Enfermedad;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function personasPorEmpresa()
    {
        $companyIds = [22, 6, 8];

        return Paciente::join('empresa', 'paciente.empresa', '=', 'empresa.id')
            ->groupBy('empresa.descripcion')
            ->orderBy('empresa.descripcion', 'ASC')
            ->where(function ($query) use ($companyIds) {
                $query->where('paciente.activo', '=', 'true')
                    ->whereIn('paciente.empresa', $companyIds);
            })
            ->select('empresa.descripcion', DB::raw('count(*) as total'))
            ->get();
    }

    public function personasPorUnidad()
    {
        return Paciente::join('unidad', 'paciente.unidad', '=', 'unidad.id')
            ->groupBy(['unidad.descripcion'])
            ->orderBy('unidad.descripcion', 'ASC')
            ->where('paciente.activo', '=', 'true')
            ->select('unidad.descripcion', DB::raw('count(*) as total'))
            ->get();
    }

    public function personasPorPlanta()
    {
        return Paciente::join('planta', 'paciente.planta', '=', 'planta.id')
            ->groupBy(['planta.descripcion'])
            ->orderBy('planta.descripcion', 'ASC')
            ->where('paciente.activo', '=', 'true')
            ->select('planta.descripcion', DB::raw('count(*) as total'))
            ->get();
    }

    public function personasPorCeco()
    {
        return Paciente::join('ceco', 'paciente.ceco', '=', 'ceco.id')
            ->groupBy(['ceco.descripcion'])
            ->orderBy('ceco.descripcion', 'ASC')
            ->where('paciente.activo', '=', 'true')
            ->select('ceco.descripcion', DB::raw('count(*) as total'))
            ->get();
    }

    public function personasPorExpo()
    {
        $personas = Paciente::where('activo', 'true')
            ->select('exposicion')
            ->get()
            ->toArray();
        $preparedData = $this->prepare($personas);
        $claves = array_keys($preparedData);
        $valores = array_values($preparedData);
        return ['descripcion' => $claves, 'total' => $valores];
    }

    public function expo_empresa(Request $id)
    {
        $empresa = $id->input('id');
        $personas = Paciente::where('activo', 'true')
            ->where('empresa', $empresa)
            ->select('exposicion')
            ->get()
            ->toArray();
        $preparedData = $this->prepare($personas);
        $claves = array_keys($preparedData);
        $valores = array_values($preparedData);
        return ['descripcion' => $claves, 'total' => $valores];
    }

    public function expo_planta(Request $id)
    {
        $planta = $id->input('id');
        $personas = Paciente::where('activo', 'true')
            ->where('planta', $planta)
            ->select('exposicion')
            ->get()
            ->toArray();
        $preparedData = $this->prepare($personas);
        $claves = array_keys($preparedData);
        $valores = array_values($preparedData);
        return ['descripcion' => $claves, 'total' => $valores];
    }

    /**
     * Get the number of patients by each chronic illness for a given company.
     *
     * @param Request $request The HTTP request object.
     * @return \Illuminate\Database\Eloquent\Collection The collection of chronic illnesses and counts.
     */
    public function enfermedad_empresa(Request $request)
    {
        // Validar el input para asegurar que 'id' está presente y es válido
        $request->validate([
            'id' => 'required|integer|exists:paciente,empresa',
        ]);

        $empresaId = $request->input('id');

        // Utilizar Eloquent para realizar la consulta
        $enfermedades = Enfermedad::join('paciente', 'enfermedad.paciente_id', '=', 'paciente.id')
        ->join('trastorno_cronico', 'enfermedad.trastorno_cronico', '=', 'trastorno_cronico.id')
        ->where('paciente.empresa', $empresaId)
            ->groupBy('trastorno_cronico.descripcion')
            ->select('trastorno_cronico.descripcion', DB::raw('count(*) as total'))
        ->get();

        // Transformar el resultado en un array asociativo
        $result = $enfermedades->mapWithKeys(function ($item) {
            return [$item->descripcion => $item->total];
        });

        return response()->json([
            'descripcion' => $result->keys(),
            'total' => $result->values(),
        ]);
    }
    public function enfermedad_planta(Request $request)
    {
        // Validar el input para asegurar que 'id' está presente y es válido
        $request->validate([
            'id' => 'required|integer|exists:paciente,planta',
        ]);

        $plantaId = $request->input('id');

        // Utilizar Eloquent para realizar la consulta
        $enfermedades = Enfermedad::join('paciente', 'enfermedad.paciente_id', '=', 'paciente.id')
        ->join('trastorno_cronico', 'enfermedad.trastorno_cronico_id', '=', 'trastorno_cronico.id')
        ->where('paciente.planta', $plantaId)
        ->groupBy('trastorno_cronico.descripcion')
        ->select('trastorno_cronico.descripcion', DB::raw('count(*) as total'))
        ->get();

        // Transformar el resultado en un array asociativo
        $result = $enfermedades->mapWithKeys(function ($item) {
            return [$item->descripcion => $item->total];
        });

        return response()->json([
            'descripcion' => $result->keys(),
            'total' => $result->values(),
        ]);
    }
 
    /**
     * Prepares the data for the personasPorExpo function.
     *
     * This function takes the array of personasPorExpo and prepares the
     * data for further analysis. It counts the occurrences of each
     * exposicion value and returns the result as an associative array.
     *
     * @param array $personasPorExpo The array of personasPorExpo data.
     * @return array The array of exposicion counts.
     */
    private function prepare($personasPorExpo)
    {
        // Initialize the itemCounts array
        $itemCounts = [];

        // Loop through each value in personasPorExpo
        foreach ($personasPorExpo as $value) {
            // Check if exposicion is not null
            if ($value['exposicion'] !== null) {
                // Explode exposicion string into an array
                $exposicionArray = explode(',', $value['exposicion']);

                // Loop through each item in the exposicion array
                foreach ($exposicionArray as $item) {
                    // Trim the item and remove any leading/trailing square brackets
                    $item1 = trim($item);
                    $item2 = str_replace(['[', ']'], '', $item1);

                    // Increment the count for the item in itemCounts
                    // or initialize it to 1 if it doesn't exist
                    if (array_key_exists($item2, $itemCounts)) {
                        $itemCounts[$item2]++;
                    } else {
                        $itemCounts[$item2] = 1;
                    }
                }
            }
        }

        // Return the itemCounts array
        return $itemCounts;
    }
}
