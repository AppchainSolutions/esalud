import axios from "axios";

export const get = async (url, data) => {
    try {
        const result = await axios.get(url, { params: { data } });
        return result;
    } catch (errors) {
        return errors;
    }
};

export const post = async (endpoint, data) => {
    try {
        const result = await axios.post(endpoint, { data });
        return result;
    } catch (errors) {
        return errors;
    }
};

export const put = async (endpoint, data) => {
    try {
        const result = await axios.put(endpoint, { data });
        if (result) {
            return result;
        }
    } catch (errors) {
        return errors;
    }
};

export const remove = async (endpoint, id) => {
    try {
        const result = await axios.delete(endpoint, { params: { id } });
        if (result) {
            return result;
        }
    } catch (errors) {
        return errors;
    }
};

export const search = async (searchUrl, searchQuery) => {
    try {
        const result = await axios.get(searchUrl, {
            params: {
                filters: searchQuery,
            },
        });
        return result;
    } catch (errors) {
        return errors;
    }
};
