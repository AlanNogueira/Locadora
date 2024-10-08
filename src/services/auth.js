import axios from '@/services/axios/httpRequestHandler.js'

const BASE_URL = '/auth';

export default {

    login(user){
        return axios.postRequestWithBody(`${BASE_URL}/CreateToken`, user);
    },

    checkToken(token){
        console.log(token)
        return axios.postRequest(`${BASE_URL}/ValidateToken`)
    }



    // getPage(parameters) {
    //     return HttpRequestHandler.getRequest(`${BASE_URL}?keyword=${parameters.search}&page=${parameters.page}&sort=${parameters.sort.field}&sortDirection=${parameters.sort.direction}`);
    // },

    // getById(id) {
    //     return HttpRequestHandler.getRequest(`${BASE_URL}/${id}`);
    // },

    // create(data) {
    //     return HttpRequestHandler.postRequestWithBody(BASE_URL, data);
    // },

    // update(data) {
    //     return HttpRequestHandler.putRequestWithBody(BASE_URL, data);
    // },

    // delete(id) {
    //     return HttpRequestHandler.deleteRequest(`${BASE_URL}/${id}`);
    // }
};