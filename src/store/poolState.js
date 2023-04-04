import { createStore } from "vuex";


const storage = createStore({
    state:{
        pools: []
    },
    mutations:{
        setPool(state, value){
            state.pools = value
        }
    }
})

export default storage