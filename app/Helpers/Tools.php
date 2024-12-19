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
     * This function applies various filters to a database query based on the provided filter array.
     * It handles special cases for date and full-text search, and applies default filtering for other fields.
     *
     * @param array $filters An associative array of filters where keys are field names and values are filter criteria.
     * @param object $query The query object to apply the filters to.
     *
     * @return mixed Returns the filtered query results as a collection if successful,
     *               or a string error message if an exception occurs during filtering.
     */
    public static function filterData(array $filters, object $query)
    {
        if (empty($filters)) {
            return $query->all()->get();
        }


        try {
            foreach ($filters as $field => $criteria) {
                switch ($field) {
                    case 'fecha':
                        self::applyDateFilter($query, $field, $criteria);
                        break;
                    case 'exposicion':
                        self::applyExposicionFilter($query, $field, $criteria);
                        break;
                    default:
                        $query->where($field, $criteria);
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
