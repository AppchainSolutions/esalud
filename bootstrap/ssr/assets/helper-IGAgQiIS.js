import Swal from "sweetalert2/dist/sweetalert2.js";
import axios$1 from "axios";
import { useNotification } from "@kyvg/vue3-notification";
import { u as useDataStore } from "./store-BqtSnK9e.js";
import { nextTick } from "vue";
const get = async (url, data) => {
  try {
    const result = await axios$1.get(url, { params: { data } });
    return result;
  } catch (errors) {
    return errors;
  }
};
const post = async (endpoint, data) => {
  try {
    const result = await axios$1.post(endpoint, { data });
    return result;
  } catch (errors) {
    return errors;
  }
};
const put = async (endpoint, data) => {
  try {
    const result = await axios$1.put(endpoint, { data });
    if (result) {
      return result;
    }
  } catch (errors) {
    return errors;
  }
};
const remove = async (endpoint, id) => {
  try {
    const result = await axios$1.delete(endpoint, { params: { id } });
    if (result) {
      return result;
    }
  } catch (errors) {
    return errors;
  }
};
const search = async (searchUrl, searchQuery) => {
  try {
    const result = await axios$1.get(searchUrl, {
      params: {
        filters: searchQuery
      }
    });
    return result;
  } catch (errors) {
    return errors;
  }
};
const showItem = async (url, data) => {
  return await get(url, data);
};
const storeItem = async (endpoint, data) => {
  return await post(endpoint, data);
};
const updateItem = async (updateUrl, data) => {
  return await put(updateUrl, data);
};
const deleteItem = async (endpoint, id) => {
  return await remove(endpoint, id);
};
const editItem = async (updateUrl, item) => {
  return await updateItem(updateUrl, item);
};
const searchItem = async (updateUrl, item) => {
  return await search(updateUrl, item);
};
const store = useDataStore();
const { notify } = useNotification();
const fetchData = async (endpoints) => {
  const fetches = endpoints.map(async (endpoint) => {
    const endpointUrl = "/secundaria/" + endpoint;
    try {
      const response = await axios.get(endpointUrl);
      return {
        endpointUrl,
        data: response.data.result,
        endpoint
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
const handleStoreItem = async (state) => {
  try {
    const item = { ...state.editedItem };
    item.paciente_id = store.selected.id;
    await storeItem(state.urlStore, item);
    notify({ text: "Datos almacenados exitosamente.", type: "success" });
  } catch (error) {
    console.error(error);
    notify({
      text: "Se produjo un error, por favor revise que los datos sean correctos.",
      type: "error"
    });
  }
};
const handleEditItem = async (state) => {
  try {
    const itemToEdit = { ...state.editedItem };
    const url = state.urlUpdate;
    notify({
      title: "Informacion importante.",
      text: "El registro, ha sido correctamente actualizado.",
      type: "info"
    });
    return await editItem(url, itemToEdit);
  } catch (error) {
    notify({
      title: "Error.",
      text: "Error al actualizar el registro: ",
      type: "error"
    });
    console.error(error);
  }
};
const handleRemoveItem = async (state, item) => {
  try {
    Swal.fire({
      title: "Eliminación de registro",
      text: "Procederá a eliminar un registro permanentemente.",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "En otra ocasión",
      confirmButtonText: "Continuar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const id = item.id;
        const url = state.urlDelete;
        const result2 = await deleteItem(url, id);
        if (result2.status === 200) {
          state.editedIndex = state.tableItems.indexOf(item);
          state.editedItem = { ...item };
          state.tableItems.splice(state.editedIndex, 1);
          notify({
            text: "El registro ha sido eliminado.",
            type: "success"
          });
          nextTick(() => {
            state.editedItem = { ...state.defaultItem };
            state.editedIndex = -1;
          });
        } else {
          Swal.fire({
            title: "Error.",
            text: result2.response.data.message,
            icon: "error",
            showConfirmButton: false,
            timer: 2e3
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
};
const handleShowItem = async (state) => {
  const url = state.urlShow;
  const filter = state.searchQuery;
  state.loadingSearch = true;
  try {
    const result = await showItem(url, filter);
    setResponse(state, result);
  } catch (error) {
    notify({
      title: "Error.",
      text: error,
      type: "error"
    });
  }
  state.loadingSearch = false;
};
const handleSearchItem = async (state) => {
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
      type: "error"
    });
    console.error(error);
    state.tableItems = [];
  }
  state.loadingSearch = false;
};
async function setResponse(state, result) {
  const count = result.data.length;
  if (count > 0) {
    notify({
      title: "Aviso.",
      text: `Se encontraron ${count} registros.`,
      type: "success"
    });
    state.formItems = { ...result.data };
    console.log(state.formItems);
    if (state.endpoints) {
      state.tableItems = addValue(state, result.data);
    } else {
      state.tableItems = result.data;
    }
  } else {
    notify({
      title: "Aviso.",
      text: `No se encontraron registros.`,
      type: "warning"
    });
    state.tableItems = [];
  }
}
const addValue = (state, result) => {
  if (!result.length) {
    return null;
  }
  const getMatchingItem = (campo, id) => {
    const matchingItem = state.list[campo].find((col) => col.id === id);
    if (!matchingItem) return null;
    return { id: matchingItem.id, descripcion: matchingItem.descripcion };
  };
  const finalResult = result.map((item) => {
    const updatedItem = { ...item };
    state.endpoints.forEach((campo) => {
      if (state.list[campo] && updatedItem[campo]) {
        const matchingItemDescription = getMatchingItem(
          campo,
          updatedItem[campo]
        );
        if (matchingItemDescription) {
          updatedItem[campo] = matchingItemDescription;
        }
      }
    });
    return updatedItem;
  });
  return finalResult;
};
const closeForm = (state) => {
  state.dialog = false;
  nextTick(() => {
    state.editedItem = { ...state.defaultItem };
    state.editedIndex = -1;
  });
};
const openToCreate = (state) => {
  state.editedItem = { ...state.defaultItem };
  state.editedIndex = -1;
  state.dialog = true;
};
const openToEdit = (state, item) => {
  if (state.endpoints) {
    const recordsArray = Object.values(state.formItems);
    const record = recordsArray.find((rec) => rec.id === item.id);
    edit(record);
  } else {
    const record = item;
    edit(record);
  }
  function edit(record) {
    try {
      const index = state.tableItems.indexOf(item);
      const editedItemCopy = { ...record };
      state.editedIndex = index;
      state.editedItem = editedItemCopy;
      state.dialog = true;
    } catch (error) {
      console.error(error);
    }
  }
};
export {
  handleShowItem as a,
  handleStoreItem as b,
  closeForm as c,
  openToEdit as d,
  handleEditItem as e,
  fetchData as f,
  handleRemoveItem as g,
  handleSearchItem as h,
  openToCreate as o
};
//# sourceMappingURL=helper-IGAgQiIS.js.map
