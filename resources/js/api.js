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
        const result = await axios.post(endpoint, {
            ...data,
            _method: "PUT",
        });
        if (result) {
            return result;
        }
    } catch (errors) {
        return errors;
    }
};

export const remove = async (endpoint, id) => {
    try {
        const result = await axios.post(endpoint, {
            params: {
                id,
                _method: "DELETE",
            },
        });
        if (result) {
            return result;
        }
    } catch (errors) {
        return errors;
    }
};

/**
 * Makes a GET request to the specified URL with the given search query.
 * @param {string} searchUrl - The URL to send the request to.
 * @param {object} searchQuery - The query parameters to filter the results.
 * @returns {Promise<object>} - The response data or an error object.
 */
export const search = async (searchUrl, searchQuery) => {
    if (typeof searchUrl !== "string" || !searchUrl) {
        throw new Error("Invalid search URL");
    }
    if (typeof searchQuery !== "object" || searchQuery === null) {
        throw new Error("Invalid search query");
    }
    try {
        const response = await axios.get(searchUrl, {
            params: { filters: searchQuery },
        });
        return response.data; // Return only the data portion of the response
    } catch (error) {
        console.error("Error during search:", error); // Log the error for debugging
        throw new Error("Search request failed"); // Throw a new error with a custom message
    }
};