import axios from "axios";
const enviroment = import.meta.env.VUE_APP_SERVER_BASE_URL;

console.log(enviroment)

const api = axios.create({
    baseUrl: 'https://livraria-api.altislabtech.com.br',
})

export default { api };