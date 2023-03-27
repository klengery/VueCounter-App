import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://api.sogcial.com/"
const token = null
 

export default {
  authHeader() {
    let user = JSON.parse(this.getUserLogged())

    if (user && user.access_token) {
      return { Authorization: 'Bearer ' + user.access_token };
    } else {
      return {};
    }
  },
  setUserLogged(userLogged){
    Cookies.set("userLogged", userLogged)
  },
  getUserLogged(){
    return Cookies.get("userLogged")
  },
  register(user) {
    return axios.post(baseUrl + 'api/auth/signup', {
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      rol_id: 1,
      token: user.token,
      language: 'en'
    });
  },
  login(email, password){
    const user = {
      email,
      password
    }
    return axios.post(baseUrl + "api/auth/login", user);
  },
  deleteUserLogged(){
    Cookies.remove("userLogged")
  }
}

