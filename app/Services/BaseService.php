<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Repository\Repository;
use Illuminate\Support\Facades\Log;
use Clockwork\Clockwork;
use App\Services\Contracts\ServiceInterface;

abstract class BaseService implements ServiceInterface
{
    protected Repository $repository;
    protected Clockwork $clockwork;
    protected string $resourceName;

    public function __construct(Repository $repository, Clockwork $clockwork)
    {
        $this->repository = $repository;
        $this->clockwork = $clockwork;
        $this->resourceName = $this->getResourceName();
    }

    /**
     * @inheritDoc
     */
    abstract public function getResourceName(): string;

    /**
     * @inheritDoc
     */
    public function search(Request $request)
    {
        // Iniciar un evento personalizado en Clockwork
        $this->clockwork->event("Búsqueda de {$this->resourceName}")
            ->description('Realizando búsqueda con filtros')
            ->data($request->all());

        $inicio = microtime(true);

        try {
            $response = $this->repository->search($request);
            
            // Extraer datos de la respuesta JSON
            $data = $response->getData(true)['data'];
            $total = $response->getData(true)['meta']['total'];

            $tiempoEjecucion = microtime(true) - $inicio;

            $this->clockwork->event("Búsqueda de {$this->resourceName}")
                ->duration($tiempoEjecucion * 1000)
                ->data([
                    'total_registros' => $total,
                    'tiempo_ejecucion' => $tiempoEjecucion
                ]);

            return $data;

        } catch (\Throwable $e) {
            // Registrar errores en Clockwork y Log
            $this->clockwork->event("Error en Búsqueda de {$this->resourceName}")
                ->failed()
                ->data([
                    'mensaje_error' => $e->getMessage(),
                    'filtros' => $request->all()
                ]);

            Log::error("Error en búsqueda de {$this->resourceName}", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'filtros' => $request->all()
            ]);

            throw $e;
        }
    }
}
