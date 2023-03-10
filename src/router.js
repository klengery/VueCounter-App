import Vue from "vue";
import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from "vue-router"
    
// Vue.use(VueRouter)

import Counter from './components/Counter.vue';
import Indecision from './components/Indecision.vue';

const routes = [
    {
        path: "/counter",
        name: "counter",
        component: Counter
    },
    {
        path: "/indecision",
        name: "indecision",
        component: Indecision
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes,
});
  
  export default router;