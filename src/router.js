import { createRouter, createWebHistory } from "vue-router"

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

const history = createWebHistory(process.env.BASE_URL)

const router = createRouter({
    history,
    routes,
});
  
export default router;