import axios from '@/services/axios.js';

const BASE_URL = import.meta.env.VUE_APP_SERVER_BASE_URL;

export default {
    BASE_URL,

    getRequest: (urlSuffix) => {
        return axios.get(urlSuffix);
    },

    getRequestWithSignal: (urlSuffix, signal) => {
        return axios.get(urlSuffix, {
            signal
        });
    },

    getRequestWithBody: (urlSuffix, body) => {
        return axios.get(urlSuffix, body);
    },

    getBlobRequest: async (urlSuffix) => {
        try {
            return await axios.get(urlSuffix, { responseType: 'blob' });
        } catch (error) {
            return Promise.reject(JSON.parse(await error.text()));
        }
    },

    patchRequest: (urlSuffix) => {
        return axios.patch(urlSuffix);
    },

    patchRequestWithBody: (urlSuffix, body) => {
        return axios.patch(urlSuffix, body);
    },

    patchRequestWithFormData: (urlSuffix, formData) => {
        return axios.patch(urlSuffix, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    postRequestWithBodyToGetToken: (urlSuffix, body) => {
        return axios.post(urlSuffix, body);
    },

    postRequest: (urlSuffix) => {
        return axios.post(urlSuffix);
    },

    postRequestWithBody: (urlSuffix, body) => {
        return axios.post(urlSuffix, body);
    },

    postRequestWithFormData: (urlSuffix, formData) => {
        return axios.post(urlSuffix, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    putRequest: (urlSuffix) => {
        return axios.put(urlSuffix);
    },

    putRequestWithBody: (urlSuffix, body) => {
        return axios.put(urlSuffix, body);
    },
    
    putRequestWithFormData: (urlSuffix, formData) => {
        return axios.put(urlSuffix, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    deleteRequest: (urlSuffix) => {
        return axios.delete(urlSuffix);
    },

    deleteRequestWithBody: (urlSuffix, body) => {
        return axios.delete(urlSuffix, { data: body });
    }
};