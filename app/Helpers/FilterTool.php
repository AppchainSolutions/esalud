<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class FilterTool
{
    /**
     * Mapeo de tipos de columnas de la base de datos a tipos genéricos
     */
    private static $typeMap = [
        // Tipos numéricos
        'integer' => 'numeric',
        'bigint' => 'numeric',
        'decimal' => 'numeric',
        'float' => 'numeric',
        'double' => 'numeric',

        // Tipos de texto
        'string' => 'text',
        'char' => 'text',
        'text' => 'text',
        'varchar' => 'text',

        // Tipos de fecha
        'date' => 'date',
        'datetime' => 'date',
        'timestamp' => 'date',

        // Tipos booleanos
        'boolean' => 'boolean',
        'bool' => 'boolean',

        // Array
        'array' => 'array',
    ];

    /**
     * Aplica filtros a una consulta de base de datos basándose en los tipos de datos
     * 
     * @param array $data Array con los valores de filtro y el mapeo de campos
     * @param string $modelClass Nombre de la clase del modelo
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function filterData(Request $request, string $modelClass)
    {
        try {

            $filters = $request->input('searchQuery.filters');
            $model = new $modelClass;
            $query = $modelClass::query();
            $fieldMap = $request->input('searchQuery.fieldMap');
            $relations   = $request->input('endpoints');

            // Si no hay filtros, retornar todos los registros
            if (empty($filters)) {
                return $query->get();
            }

            foreach ($filters as $field => $value) {
                if (empty($value)) continue;

                // Convertir valores de cadena a booleano
                if (is_string($value)) {
                    $value = filter_var($value, FILTER_VALIDATE_BOOLEAN);
                }

                //Verificar si es un campo específico mapeado
                // Priorizar mapeo si existe
                if (isset($fieldMap[$field])) {
                    // Si está mapeado, usar configuración personalizada
                    self::applyMappedFilter($query, $field, $value, $fieldMap[$field]);
                } else {
                    // Si no está mapeado, intentar inferir tipo de columna
                    try {
                        $columnType = Schema::getColumnType($model->getTable(), $field);
                        $genericType = self::$typeMap[$columnType] ?? 'text';

                        // Aplicar filtro genérico basado en tipo de columna
                        self::applyFilterByType($query, $field, $value, $genericType);
                    } catch (\Exception $e) {
                        // Fallback: filtro directo si no se puede inferir el tipo
                        $query->where($field, $value);

                        Log::warning('No se pudo inferir tipo de columna', [
                            'field' => $field,
                            'value' => $value,
                            'error' => $e->getMessage()
                        ]);
                    }
                }

            }
            if (!empty($relations)) {
                $query->with($relations);
            }
            Log::info('Consulta generada', [
                'sql' => $query->toSql(),
                'bindings' => $query->getBindings()
            ]);
            return $query->get();
        } catch (\Exception $e) {
            Log::error('Error en FilterTool::filterData', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            throw $e;
        }
    }

    /**
     * Aplica filtros para campos específicamente mapeados
     */
    private static function applyMappedFilter($query, string $field, $value, array $config): void
    {

        switch ($config['type']) {
            case 'text':
                if ($config['operator'] === 'like') {
                    $query->where($field, 'like', "%{$value}%");
                } elseif ($config['operator'] === 'equals') {
                    $query->where($field, '=', $value);
                } else {
                    $query->where($field, $value);
                }
                break;

            case 'array':
                if ($config['operator'] === 'contains') {
                    if (is_array($value)) {
                        $query->where(function($q) use ($field, $value) {
                            foreach ($value as $val) {
                                $jsonArray = json_encode([$val]);
                                // Buscar el valor tanto en arrays como en arrays más grandes
                                $q->orWhere($field, 'like', "%{$val}%");
                            }
                        });
                    } else {
                        $query->where($field, 'like', "%{$value}%");
                    }
                }
                break;

            case 'numeric':
                if ($config['relation']) {
                    if (is_array($value)) {
                        $query->whereIn("{$field}_id", $value);
                    } else {
                        $query->where("{$field}_id", $value);
                    }
                } else {
                    if (is_array($value)) {
                        $query->whereIn($field, $value);
                    } else {
                        $query->where($field, $value);
                    }
                }
                break;

            case 'boolean':
                $query->where($field, (bool)$value);
                break;

            case 'date':
                if (isset($config['operator']) && $config['operator'] === 'between') {
                    $query->whereBetween($field, $value);
                } else {
                    $query->where($field, $value);
                }
                break;

            default:
                $query->where($field, $value);
                break;
        }
    }

    /**
     * Aplica filtros basados en el tipo de dato
     */
    private static function applyFilterByType($query, string $field, $value, string $type): void
    {
        switch ($type) {
            case 'numeric':
                if (is_array($value)) {
                    $query->whereIn($field, $value);
                } else {
                    $query->where($field, $value);
                }
                break;

            case 'text':
                if (is_array($value)) {
                    $query->where(function ($q) use ($field, $value) {
                        foreach ($value as $term) {
                            $q->orWhere($field, 'like', "%{$term}%");
                        }
                    });
                } else {
                    $query->where($field, 'like', "%{$value}%");
                }
                break;

            case 'date':
                if (is_array($value) && isset($value['start'], $value['end'])) {
                    $query->whereBetween($field, [$value['start'], $value['end']]);
                } else {
                    $query->whereDate($field, $value);
                }
                break;

            case 'boolean':
                $query->where($field, (bool)$value);
                break;
        }
    }
}
