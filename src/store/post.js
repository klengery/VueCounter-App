import axios from "axios";
import auth from './auth.js';
const baseUrl = "https://jsonplaceholder.typicode.com"

export default {
    getPost(){
        return axios.get(baseUrl + '/posts')
    }
}