import axios from "axios";
import auth from './auth.js';
const baseUrl = "https://api.sogcial.com/"

export default {
    getAllPool() {
        return axios.get(baseUrl + 'api-football/pools', { headers: auth.authHeader() });
    },
    getCurrency(){
        return axios.get(baseUrl + 'currencies', { headers: auth.authHeader() })
    },
    createPool(data){
        return axios.post(baseUrl + 'api-football/pools', data,  { headers: auth.authHeader() })
    }
}