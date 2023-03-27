import axios from "axios";
import auth from './auth.js';
const baseUrl = "https://api.sogcial.com/"

export default {
    getAllPool() {
        return axios.get(baseUrl + 'api-football/pools', { headers: auth.authHeader() });
    }
}