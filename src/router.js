import { createRouter, createWebHistory } from "vue-router"
import auth from "./store/auth"

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
const PoolState = () => import("@/views/PoolState.vue")
const CreatePool = () => import("@/views/CreatePool")


const routes = [
    // {
    //     path: "/",
    //     redirect: to => {
    //         return { path: "/login"}
    //     }
    // },
    {
        name: "auth",
        component: Auth,
        children: [
            {
                path: "/login",
                name: "login",
                component: Login,
                alias: "/"
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
        meta: {requiresAuth: true},
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
            },
            {
                path: "/poolState",
                name: "poolState",
                component: PoolState
            },
            {
                path: "/createPool",
                name: "createPool",
                component: CreatePool
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