import Vue from "vue";
import VueRouter from 'vue-router'
    
Vue.use(VueRouter)

import Counter from './components/Counter.vue';

const routes = [
    {
        path: "/counter",
        name: "counter",
        component: Counter
    }
]