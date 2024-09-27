import axios from "axios";
const environment = import.meta.env.VITE_APP_SERVER_BASE_URL;

const api = axios.create({
    baseURL: environment,
})

export default api;