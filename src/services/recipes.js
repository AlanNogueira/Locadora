import axios from '@/services/axios/httpRequestHandler.js'

const BASE_URL = '/Recipe';

export default {

    createRecipe(data) {
        return HttpRequestHandler.postRequestWithBody(`${BASE_URL}/CreateRecipe`, data);
    },
    
    GetRecipeById(id){
        return axios.getRequest(`${BASE_URL}/GetRecipeById/${id}`)
    },

    GetRecipes(){
        return axios.getRequest(`${BASE_URL}/GetRecipes`);
    },

    createRecipeEvaluation(data) {
        return HttpRequestHandler.postRequestWithBody(`${BASE_URL}/CreateRecipeEvaluation`, data);
    },

    GetRecipesByUser(){
        return axios.getRequest(`${BASE_URL}/GetRecipeByUser`);
    },

    updateRecipe(data) {
        return HttpRequestHandler.putRequestWithBody(`${BASE_URL}/UpdateRecipe`, data);
    },

    // getPage(parameters) {
    //     return HttpRequestHandler.getRequest(`${BASE_URL}?keyword=${parameters.search}&page=${parameters.page}&sort=${parameters.sort.field}&sortDirection=${parameters.sort.direction}`);
    // },

    // getById(id) {
    //     return HttpRequestHandler.getRequest(`${BASE_URL}/${id}`);
    // },

    // delete(id) {
    //     return HttpRequestHandler.deleteRequest(`${BASE_URL}/${id}`);
    // }
};