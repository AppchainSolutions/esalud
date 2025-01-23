import Swal from "sweetalert2";
import { searchItemss, storeItem, deleteItem, editItem, showItem } from "@/crud";
import { useNotification } from "@kyvg/vue3-notification";
import { useDataStore } from "@/store.js";
import { nextTick } from "vue";
import axios from "axios";
import { debugHelpers as debug } from '@/utils/debug';

const store = useDataStore();
const { notify } = useNotification();

//**********\\\\ METHODS ////*************//

export const fetchData = async (endpoints) => {
    const fetches = endpoints.map(async (endpoint) => {
        const endpointUrl = "/secundaria/" + endpoint;
        try {
            const response = await axios.get(endpointUrl);
            return {
                endpointUrl,
                data: response.data.result,
                endpoint,
            };
        } catch (error) {
            debug('Error al obtener datos %O', { error: error.message, stack: error.stack });
            return { endpoint, data: null };
        }
    });

    let variable = [];

    return await Promise.allSettled(fetches).then((response) => {
        const dataByVariable = [];
        response.forEach(({ value }) => {
            variable = value.endpoint;
            dataByVariable[variable] = value.data;
        });
        return dataByVariable;
    });
};

export const handleStoreItem = async (state, mode) => {
    if (mode === "create") {
        try {
            const item = { ...state.editedItem };
            debug('Creando nuevo item %O', item);
            const response = await storeItem(state.urlStore, item);
            
            debug('Item creado exitosamente %O', response);
            notify({
                text: "Datos almacenados exitosamente.",
                type: "success",
            });

            return response;
        } catch (error) {
            debug('Error al crear item %O', error);
            throw error;
        }
    } else if (mode === "edit") {
        try {
            const item = state.editedItem;
            const url = state.urlUpdate;
            debug('Actualizando item %O', { item, url });
            
            if (state.endpoints) {
                state.endpoints.forEach((campo) => {
                    if (item?.[campo]?.id) {
                        item[campo] = item[campo].id;
                    }
                });
            }
            
            const result = await editItem(url, item);
            debug('Item actualizado exitosamente %O', result);
            
            notify({
                title: "Información importante.",
                text: "El registro, ha sido correctamente actualizado.",
                type: "success",
            });
            
            return result;
        } catch (error) {
            debug('Error al actualizar item %O', error);
            notify({
                title: "Error.",
                text: "Error al actualizar el registro: ",
                type: "error",
            });
        }
    }
};

export const handleEditItem = (state, item) => {};

/**
 * Handles the removal of an item.
 *
 * @param {string} route - The endpoint route.
 * @param {object} state - The state object.
 * @param {object} item - The item to be removed.
 * @returns {Promise<void>} - A promise that resolves when the item is successfully removed.
 */
export const handleRemoveItem = async (state, item) => {
    try {
        debug('Iniciando proceso de eliminación %O', { itemId: item.id });
        
        Swal.fire({
            title: "Eliminación de registro",
            text: "Procederá a eliminar un registro permanentemente.",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "En otra ocasión",
            confirmButtonText: "Continuar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const id = item.id;
                const url = state.urlDelete;
                debug('Ejecutando eliminación %O', { id, url });
                
                const result = await deleteItem(url, id);
                if (result.status === 200) {
                    state.editedIndex = state.tableItems.indexOf(item);
                    state.editedItem = { ...item };
                    state.tableItems.splice(state.editedIndex, 1);
                    
                    debug('Item eliminado exitosamente %O', { id });
                    notify({
                        text: "El registro ha sido eliminado.",
                        type: "success",
                    });
                    
                    nextTick(() => {
                        state.editedItem = { ...state.defaultItem };
                        state.editedIndex = -1;
                    });
                } else {
                    debug('Error en la respuesta del servidor %O', { result });
                    Swal.fire({
                        title: "Error.",
                        text: result.response.data.message,
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            }
        });
    } catch (error) {
        debug('Error al eliminar item %O', { error: error.message, stack: error.stack });
        console.error(error);
    }
};

/**
 * Retrieves an item from the specified endpoint using the provided ID.
 *
 * @returns {Promise<any>} - A promise that resolves to the retrieved item.
 * @param state
 */
export const searchItemsss = async (url, searchFilters, endpoints) => {
    debug('Iniciando búsqueda %O', { url, searchFilters, endpoints });
    /* try {
        const result = await axios.get(url, { params: { searchFilters } });
        debug('Resultado de búsqueda obtenido %O', { result });
        //setResponse(result.data, endpoints);
    } catch (error) {
        debug('Error en búsqueda %O', { error: error.message });
        notify({
            title: "Error.",
            text: error,
            type: "error",
        });
    } */
};

/**
 * Handles the search for an item.
 *
 * @param {string} searchUrl - The URL for the search.
 * @param {string} searchQuery - The query to search for.
 * @returns {Promise} - A promise that resolves with the search response.
 * @throws {Error} - If an error occurs during the search.
 */
export const handlesearchItemss = async (state) => {
    const filter = state.searchQuery;
    const url = state.urlSearch;
    state.loadingSearch = true;
    try {
        const result = await searchItemss(url, filter);
        setResponse(state, result);
    } catch (error) {
        debug('Error al buscar item %O', { error: error.message, stack: error.stack });
        notify({
            title: "Error.",
            text: "Se produjo un error.",
            type: "error",
        });
        console.error(error);
        state.tableItems = [];
    }
    state.loadingSearch = false;
};

/**
 * Updates the application state based on the provided result and endpoints.
 *
 * If the result contains items, it triggers a success notification and updates
 * the state with the result data. If endpoints are provided, it processes the
 * result using the `addValue` function to enrich the data before updating the
 * state. If no items are found in the result, it triggers a warning notification
 * and clears the state table items.
 *
 * @param {Array} result - The array of result items to be processed.
 * @param {Object} endpoints - Optional endpoints object used to enrich the result data.
 */
function setResponse(result, endpoints) {
    const count = result.length;
    if (count > 0) {
        notify({
            title: "Aviso.",
            text: `Se encontraron ${count} registros.`,
            type: "success",
        });
        state.formItems = { ...result };
        state.tableItems = endpoints ? addValue(endpoints, result) : result;
    } else {
        notify({
            title: "Aviso.",
            text: `No se encontraron registros.`,
            type: "warning",
        });
        state.tableItems = [];
    }
}

/**
 * Adds matching item descriptions to the given result data.
 *
 * @param {Object} state - The state object containing a `list` property with endpoint arrays and an `endpoints` property with endpoint names.
 * @param {Object} result - The result object containing a `data` property with an array of items.
 * @returns {Array|null} - The final result with matching item descriptions added, or null if the result data is empty.
 */
export const addValue = (endpoints, result) => {
    // Check if the result data is empty
    if (!result.length) {
        return null;
    }

    // Helper function to get matching item description
    const getMatchingItem = (campo, id) => {
        const matchingItem = endpoints[campo].find((col) => col.id === id);
        if (!matchingItem) return null;
        return { id: matchingItem.id, descripcion: matchingItem.descripcion };
    };

    // Map over each item in the result data
    return result.map((item) => {
        // Create a copy of the item using the spread operator
        const updatedItem = { ...item };
        // Iterate over each endpoint in the state object
        endpoints.forEach((campo) => {
            // Check if the endpoint exists in the state object and if the item has a value for that endpoint
            if (endpoints[campo] && updatedItem[campo]) {
                // Get the matching item's description
                const matchingItemDescription = getMatchingItem(
                    campo,
                    updatedItem[campo],
                );
                // If a matching item's description is found, update the item's property value with the description
                if (matchingItemDescription) {
                    updatedItem[campo] = matchingItemDescription;
                }
            }
        });
        // Return the updated item
        return updatedItem;
    });
    // Return the final result with all items updated
};

/**
 * Closes the form dialog and resets the edited item and index.
 *
 * @param {Object} state - The state object containing the dialog, editedItem, and editedIndex properties.
 */
export const closeForm = (state) => {
    state.dialog = false;
    nextTick(() => {
        state.editedItem = { ...state.defaultItem };
        state.editedIndex = -1;
    });
};

export const openToCreate = (state) => {
    state.editedItem = { ...state.defaultItem };
    state.editedIndex = -1;
    state.dialog = true;
    console.log(state);

};

export const openToEdit = (state, item) => {
    /* const record = state.endpoints
     ? Object.values(state.formItems).find((rec) => rec.id === item.id)
     : item;
     console.log(record); */
    state.editedIndex = state.tableItems.indexOf(item);
    state.editedItem = item;
    state.dialog = true;
};

export const validationRules = (value) => {
    const rutRules = [
        (value) => (value ? true : "Se necesita el rut."),

        (value) =>
            value.length <= 10
                ? true
                : "El rut no puede ser mayor a 11 caracteres",

        (value) => {
            const regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            if (!regex.test(value)) {
                return false;
            }

            // Separar el número y el dígito verificador
            let [num, dv] = value.split("-");

            // Calcular el dígito verificador esperado
            let m = 0,
                s = 1;
            for (; num; num = Math.floor(num / 10)) {
                s = (s + (num % 10) * (9 - (m++ % 6))) % 11;
            }
            let dvEsperado = s ? s - 1 : "k";

            return dv == dvEsperado ? true : "El rut es incorrecto";
        },
    ];

    return { rutRules };
};
