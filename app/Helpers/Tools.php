<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use \Illuminate\Database\QueryException;
use \Illuminate\Support\Collection;

class Tools
{
    /**
     * Filters data based on provided criteria.
     *
     * Esta función aplica filtros a una consulta de base de datos con soporte especial para campos booleanos.
     * Maneja diferentes formatos de valores booleanos para garantizar compatibilidad entre bases de datos.
     *
     * Ejemplos de uso de filtros booleanos:
     * - ['activo' => true]     // Booleano PHP
     * - ['activo' => 'true']   // Cadena 'true'
     * - ['activo' => 1]        // Entero 1
     * - ['activo' => '1']      // Cadena '1'
     *
     * @param array $filters Un array asociativo de filtros donde las claves son nombres de campos y los valores son criterios de filtrado.
     * @param object $query El objeto de consulta al que se aplicarán los filtros.
     *
     * @return mixed Devuelve los resultados de la consulta filtrada como una colección.
     * @throws QueryException Si ocurre un error durante el filtrado.
     */
    public static function filterData(array $filters, object $query)
    {
        if (empty($filters)) {
            return $query->get();
        }

        try {
            foreach ($filters as $field => $criteria) {
                Log::info($criteria);
                switch ($field) {
                    case 'fecha':
                        self::applyDateFilter($query, $field, $criteria);
                        break;
                    case 'exposicion':
                        self::applyExposicionFilter($query, $field, $criteria);
                        break;
                    default:
                        // Manejo especial para campos booleanos
                        if (is_bool($criteria) || in_array(strtolower($criteria), ['true', 'false', '1', '0'])) {
                            $boolValue = filter_var($criteria, FILTER_VALIDATE_BOOLEAN);
                            $query->where($field, $boolValue ? 1 : 0);
                        } else {
                            $query->where($field, $criteria);
                        }
                        break;
                }
            }
            return $query->get();
        } catch (QueryException $exception) {
            Log::error($exception);
            return 'Error filtering data: ' . $exception->getMessage();
        }
    }
    /**
     * Applies a date filter to the given query.
     *
     * This function filters the query based on a date range specified in the $dates array.
     * It expects 'desde' (from) and 'hasta' (to) keys in the $dates array to define the range.
     *
     * @param object $query The query object to apply the filter to.
     * @param string $field The name of the date field in the database to filter on.
     * @param array $dates An associative array containing 'desde' and 'hasta' keys with corresponding date values.
     *
     * @return mixed Returns the modified query object if successful, a string error message if dates are missing,
     *               or an error message if there's an issue with the date format.
     */
    private static function applyDateFilter(object $query, $field, $dates)
    {
        try {
            if (isset($dates['desde']) && isset($dates['hasta'])) {
                return $query->whereBetween($field, [$dates['desde'], $dates['hasta']]);
            } else {
                return "Falta una fecha";
            }
        } catch (QueryException $e) {
            return 'Formato de fecha incorrecto ';
        }
    }
    /**
     * Applies a full-text search filter for the 'exposicion' field.
     *
     * This function performs a full-text search on the specified field using the provided criteria.
     * It applies both exact phrase matching and individual term matching for each search term.
     *
     * @param object $query The query object to apply the filter to.
     * @param string $field The name of the field in the database to apply the full-text search on.
     * @param array $criteria An array of search terms to be used in the full-text search.
     *
     * @return mixed Returns the modified query object if successful, or a string error message if an exception occurs.
     */
    private static function applyExposicionFilter(object $query, $field, $criteria)
    {
        try {
            foreach ($criteria as $term) {
                $query->whereFullText($field, '"' . $term . '\"');
                return $query->orWhereFullText($field, $term);
            }
        } catch (QueryException $e) {
            return 'Error al aplicar filtro de exposición';
        }
    }
}
