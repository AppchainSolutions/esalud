<?php

namespace App\Http\Controllers;

use App\Repository\PacienteRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\FormBuilder;
use Illuminate\Support\Facades\Cache;


class PacienteController extends Controller
{
    protected $pacienteRepository;

    /**
     * Class constructor.
     *
     * @param  PacienteRepository  $pacienteRepository  The patient repository instance.
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
     * @param  Request  $request  The request containing the patient ID to be displayed.
     * @return mixed Patient data from the repository.
     */
    public function search(Request $request)
    {
        return $this->pacienteRepository->search($request);
    }

    public function create(Request $request)
    {
        // Get the title and id from the request
        $title = $request->input('form_title');
        $id = $request->input('form_id');

        // Use cache to store the results of the query
        $response = Cache::remember("form-builder-{$id}", now()->addMinutes(120), function () use ($id) {
            return FormBuilder::where('form_id', $id)->get();
        });

        // Render the view with the cached data
        return Inertia::render('SubPages/FormSchemaPage', [
            'data' => $response,
            'title' => $title,
        ]);
    }

    public function show(Request $request) {
        //code here
    }
    /**
     * Update patient data.
     *
     * @param  Request  $request  The request containing patient data to be updated.
     * @return mixed Updated patient data from the repository.
     */
    public function update(Request $request)
    {
        return $this->pacienteRepository->update($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->pacienteRepository->store($request);
    }

    /**
     * Delete a patient from the system.
     *
     * @param  Request  $request  The request containing the patient ID to be deleted.
     * @return mixed Returns true if the patient was deleted successfully, and false otherwise.
     */
    public function destroy(Request $request)
    {
        return $this->pacienteRepository->delete($request);
    }
}
