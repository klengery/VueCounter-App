import { createRouter, createWebHistory } from "vue-router"

// Auth
const Auth = () => import("@/layouts/AuthLayout.vue")
const Login = () => import("@/views/auth/Login.vue")
const Register = () => import("@/views/auth/Register.vue")

// Content
const Main = () => import("@/views/Main.vue")
const Counter = () => import("@/views/Counter.vue")
const Indecision = () => import("@/views/Indecision.vue")
const Countries = () => import("@/views/Countries.vue")
const Pools = () => import("@/views/Pools.vue")


const routes = [
    {
        name: "auth",
        component: Auth,
        children: [
            {
                path: "/login",
                name: "login",
                component: Login
            },
            {
                path: "/register",
                name: "register",
                component: Register
            }
        ]
    },
    {
        path: "/main",
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
            },
            {
                path: "/pools",
                name: "pools",
                component: Pools
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