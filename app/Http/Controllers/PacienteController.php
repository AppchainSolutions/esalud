<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\PacienteService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class PacienteController extends Controller
{
    protected PacienteService $pacienteService;

    public function __construct(PacienteService $pacienteService)
    {
        $this->pacienteService = $pacienteService;
    }

    /**
     * Muestra la página principal de pacientes
     * 
     * Esta función es responsable únicamente de la renderización de la vista
     * utilizando Inertia.js. La lógica de negocio y datos se manejan 
     * a través de endpoints separados.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('PacientePage');
    }

    /**
     * Busca pacientes según los criterios especificados
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'searchQuery' => 'required|array',
                'searchQuery.filters' => 'present|array',
                'searchQuery.fieldMap' => 'present|array',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error de validación',
                    'errors' => $validator->errors()
                ], 422);
            }

            // Validación de tipos de campos
            $fieldMap = $request->input('searchQuery.fieldMap', []);
            $filters = $request->input('searchQuery.filters', []);

            foreach ($fieldMap as $field => $config) {
                if (isset($filters[$field]) && isset($config['type'])) {
                    $value = $filters[$field];
                    $type = $config['type'];

                    if ($type === 'boolean' && !is_bool($value) && $value !== null) {
                        return response()->json([
                            'success' => false,
                            'message' => 'Error de validación',
                            'errors' => [
                                "searchQuery.filters.$field" => ["El campo debe ser de tipo booleano"]
                            ]
                        ], 422);
                    }
                }
            }

            $data = $this->pacienteService->search($request);

            return response()->json([
                'success' => true,
                'data' => $data,
            ]);
        } catch (\Exception $e) {
            Log::error('Error en búsqueda de pacientes', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al buscar pacientes',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Crea un nuevo paciente
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $paciente = $this->pacienteService->store($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Paciente creado exitosamente',
                'data' => $paciente
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error al crear paciente', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al crear paciente',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
