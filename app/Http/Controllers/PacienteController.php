<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\PacienteRepository;


class PacienteController extends Controller
{
    protected $pacienteRepository;

    /**
     * Class constructor.
     *
     * @param PacienteRepository $pacienteRepository The patient repository instance.
     */
    public function __construct(PacienteRepository $pacienteRepository)
    {
        $this->pacienteRepository = $pacienteRepository;
    }
    
    /**
     * Render the Paciente Page.
     *
     * @return \Inertia\Response Rendered Inertia response object containing the PacientePage component.
     */
    public function index()
    {
        return Inertia::render('PacientePage');
    }

    public function all()
    {
        return $this->pacienteRepository->all();
    }

    /**
     * Display the specified patient.
     *
     * @param Request $request The request containing the patient ID to be displayed.
     * @return mixed Patient data from the repository.
     */
    public function show(Request $request)
    {
        return $this->pacienteRepository->show($request);
    }

    /**
     * Update patient data.
     *
     * @param Request $request The request containing patient data to be updated.
     * @return mixed Updated patient data from the repository.
     */
    public function update(Request $request)
    {
        return $this->pacienteRepository->update($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->pacienteRepository->store($request);
    }

    /**
     * Delete a patient from the system.
     *
     * @param Request $request The request containing the patient ID to be deleted.
     * @return mixed Returns true if the patient was deleted successfully, and false otherwise.
     */
    public function destroy(Request $request)
    {
        return $this->pacienteRepository->delete($request);
    }
}
