import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://api.sogcial.com/"
 

export default {
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
    return axios.post(baseUrl + "api/auth/login", user)
  },
  deleteUserLogged(){
    Cookies.remove("userLogged")
  }
}




// import state from './state'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

// const authModule = {
//     namespaced: true,
//     actions,
//     getters,
//     mutations,
//     state
// }

// export default authModule 