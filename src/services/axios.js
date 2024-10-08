import axios from "axios";
const environment = import.meta.env.VITE_APP_SERVER_BASE_URL;

const api = axios.create({
    baseURL: environment,
})

api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.common["Access-Control-Allow-Headers"] = "*";
api.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
api.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")

export default api;