<?php

namespace App\Services;

use App\Repository\PacienteRepository;
use Clockwork\Clockwork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Paciente;

class PacienteService extends BaseService
{
    protected PacienteRepository $pacienteRepository;

    public function __construct(PacienteRepository $pacienteRepository, Clockwork $clockwork)
    {
        parent::__construct($pacienteRepository, $clockwork);
        $this->pacienteRepository = $pacienteRepository;
    }

    /**
     * @inheritDoc
     */
    public function getResourceName(): string
    {
        return 'Pacientes';
    }

    /**
     * Validaciones específicas de negocio para pacientes
     * 
     * @param Request $request
     * @throws \InvalidArgumentException
     */
    protected function validateBusinessRules(Request $request): void
    {
        // Validar edad mínima si se proporciona fecha de nacimiento
        if ($request->has('fecha_nacimiento')) {
            $edad = \Carbon\Carbon::parse($request->fecha_nacimiento)->age;
            if ($edad < 18) {
                throw new \InvalidArgumentException('El paciente debe ser mayor de edad');
            }
        }

        // Validar RUT chileno
        if ($request->has('rut') && !$this->validateRut($request->rut)) {
            throw new \InvalidArgumentException('El RUT ingresado no es válido');
        }

        // Validar teléfono
        if ($request->has('telefono') && !$this->validatePhoneNumber($request->telefono)) {
            throw new \InvalidArgumentException('El formato del teléfono no es válido');
        }
    }

    /**
     * Validar RUT chileno
     */
    private function validateRut(string $rut): bool
    {
        $rut = preg_replace('/[.-]/', '', $rut);
        $body = substr($rut, 0, -1);
        $dv = substr($rut, -1);
        
        $suma = 0;
        $multiplo = 2;
        
        for ($i = strlen($body) - 1; $i >= 0; $i--) {
            $suma += $body[$i] * $multiplo;
            $multiplo = $multiplo == 7 ? 2 : $multiplo + 1;
        }
        
        $dvCalculado = 11 - ($suma % 11);
        $dvCalculado = $dvCalculado == 11 ? 0 : ($dvCalculado == 10 ? 'K' : $dvCalculado);
        
        return strtoupper($dv) === strtoupper($dvCalculado);
    }

    /**
     * Validar formato de teléfono chileno
     */
    private function validatePhoneNumber(string $phone): bool
    {
        return preg_match('/^(\+?56)?[ -]?9[ -]?[0-9]{4}[ -]?[0-9]{4}$/', $phone) === 1;
    }

    /**
     * Crea un nuevo paciente
     *
     * @param array $data
     * @return Paciente
     */
    public function store(array $data)
    {
        // Validar datos
        $validator = Validator::make($data, [
            'rut' => 'required|string|unique:pacientes,rut',
            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'fecha_nacimiento' => 'nullable|date',
            'genero' => 'nullable|string|in:M,F',
            'empresa' => 'nullable|exists:empresas,id',
            'area' => 'nullable|exists:areas,id',
            'exposicion' => 'nullable|array',
            'activo' => 'nullable|boolean',
            'protocolo_minsal' => 'nullable|boolean',
            'email' => 'nullable|email|max:255',
            'telefono' => 'nullable|string|max:20'
        ]);

        if ($validator->fails()) {
            throw new \Illuminate\Validation\ValidationException($validator);
        }

        // Si hay exposiciones, convertirlas a JSON
        if (isset($data['exposicion'])) {
            $data['exposicion'] = json_encode($data['exposicion']);
        }

        // Crear el paciente
        return Paciente::create($data);
    }
}
