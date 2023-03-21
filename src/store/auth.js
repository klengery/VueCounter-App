import axios from "axios";

const baseUrl = "https://api.sogcial.com/"
 

export default {
  register(name, lastname, email, password, confirmPassword) {
    const user = { 
        name,
        lastname,
        email, 
        password,
        confirmPassword
    };
    return axios.post(baseUrl + "auth/signup");
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