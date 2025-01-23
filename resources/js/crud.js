import { get, put, remove, search, post } from './api';

export const showItem = async (url, data) => {
    return await get(url, data);
}

export const storeItem = async (endpoint, data) => {
    return await post(endpoint, data)
}

export const updateItem = async (updateUrl, data) => {
    return await put(updateUrl, data)
}

export const deleteItem = async (endpoint, id) => {
    return await remove(endpoint, id)
}

export const editItem = async (updateUrl, item) => {
    return await updateItem(updateUrl, item)
}

export const searchItemss = async (updateUrl, item) => {
    return await search(updateUrl, item)
}


