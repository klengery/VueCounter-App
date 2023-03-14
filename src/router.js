import { createRouter, createWebHistory } from "vue-router"

const Main = () => import("@/views/Main.vue")
const Counter = () => import("@/views/Counter.vue")
const Indecision = () => import("@/views/Indecision.vue")
const Countries = () => import("@/views/Countries.vue")

const routes = [
    {
        path: "/",
        name: "main",
        component: Main,
        children: [
            {
                path: "/counter",
                name: "counter",
                component: Counter
            },
            {
                path: "/indecision",
                name: "indecision",
                component: Indecision
            },
            {
                path: "/countries",
                name: "countries",
                component: Countries
            }
        ]
    }
]

const history = createWebHistory(process.env.BASE_URL)

const router = createRouter({
    history,
    routes,
});
  
export default router;