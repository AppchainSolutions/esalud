import Swal from "sweetalert2/dist/sweetalert2.js";
import { searchItem, storeItem, deleteItem, editItem, showItem } from "@/crud";
import { useNotification } from "@kyvg/vue3-notification";
import { useDataStore } from "@/store.js";
import { nextTick } from "vue";

const store = useDataStore();
const { notify } = useNotification();

//**********\\\\ METHODS ////*************/

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
        item.paciente_id = store.selected.id;
        notify({ text: "Datos almacenados exitosamente.", type: "success" });
        return await storeItem(state.urlStore, item);
    } catch (error) {
        console.error(error);
        notify({
            text: "Se produjo un error, por favor revise que los datos sean correctos.",
            type: "error",
        });
    }
} else {
    try {
        const item = { ...state.editedItem };
        console.log(item);
        const url = state.urlUpdate;
        notify({
            title: "Informacion importante.",
            text: "El registro, ha sido correctamente actualizado.",
            type: "info",
        });
        return await editItem(url, item);
    } catch (error) {
        notify({
            title: "Error.",
            text: "Error al actualizar el registro: ",
            type: "error",
        });
        console.error(error);
    }
}
};
/**
 * Handles the editing of an item.
 *
 * @param {string} route - The route to update the item.
 * @param {object} editedItem - The edited item.
 * @returns {Promise} - A promise that resolves with the updated item.
 * @throws {Error} - If there is an error updating the item.
 */
export const handleEditItem = async (state) => {
    try {
        const item = { ...state.editedItem };
        console.log(item);
        const url = state.urlUpdate;
        notify({
            title: "Informacion importante.",
            text: "El registro, ha sido correctamente actualizado.",
            type: "info",
        });
        return await editItem(url, item);
    } catch (error) {
        notify({
            title: "Error.",
            text: "Error al actualizar el registro: ",
            type: "error",
        });
        console.error(error);
    }
};
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
                const result = await deleteItem(url, id);
                if (result.status === 200) {
                    state.editedIndex = state.tableItems.indexOf(item);
                    state.editedItem = { ...item };
                    state.tableItems.splice(state.editedIndex, 1);
                    notify({
                        text: "El registro ha sido eliminado.",
                        type: "success",
                    });
                    nextTick(() => {
                        state.editedItem = { ...state.defaultItem };
                        state.editedIndex = -1;
                    });
                } else {
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
        console.error(error);
    }
};
/**
 * Retrieves an item from the specified endpoint using the provided ID.
 *
 * @param {string} route - The endpoint to retrieve the item from.
 * @param {number} id - The ID of the item to retrieve.
 * @returns {Promise<any>} - A promise that resolves to the retrieved item.
 */
export const handleShowItem = async (state) => {
    const url = state.urlShow;
    const filter = state.searchQuery;
    state.loadingSearch = true;
    try {
        const result = await showItem(url, filter);
        console.log(result);
        setResponse(state, result.data);
    } catch (error) {
        notify({
            title: "Error.",
            text: error,
            type: "error",
        });
    }
    state.loadingSearch = false;
};
/**
 * Handles the search for an item.
 *
 * @param {string} searchUrl - The URL for the search.
 * @param {string} searchQuery - The query to search for.
 * @returns {Promise} - A promise that resolves with the search response.
 * @throws {Error} - If an error occurs during the search.
 */
export const handleSearchItem = async (state) => {
    const filter = state.searchQuery;
    const url = state.urlSearch;
    state.loadingSearch = true;
    try {
        const result = await searchItem(url, filter);
        setResponse(state, result);
    } catch (error) {
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

async function setResponse(state, result) {
    const count = result.length;
    console.log(result);    
    
    if (count > 0) {
        notify({
            title: "Aviso.",
            text: `Se encontraron ${count} registros.`,
            type: "success",
        });
        state.formItems = { ...result };
        if (state.endpoints) {
            state.tableItems = addValue(state, result);
        } else {
            state.tableItems = result;
        }
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
export const addValue = (state, result) => {
    // Check if the result data is empty
    if (!result.length) {
        return null;
    }

    // Helper function to get matching item description
    const getMatchingItem = (campo, id) => {
        const matchingItem = state.list[campo].find((col) => col.id === id);
        if (!matchingItem) return null;
        return { id: matchingItem.id, descripcion: matchingItem.descripcion };
    };

    // Map over each item in the result data
    const finalResult = result.map((item) => {
        // Create a copy of the item using the spread operator
        const updatedItem = { ...item };

        // Iterate over each endpoint in the state object
        state.endpoints.forEach((campo) => {
            // Check if the endpoint exists in the state object and if the item has a value for that endpoint
            if (state.list[campo] && updatedItem[campo]) {
                // Get the matching item's description
                const matchingItemDescription = getMatchingItem(
                    campo,
                    updatedItem[campo]
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
    return finalResult;
};

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
