import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import auth from './store/auth'

import './css/styles.css'


router.beforeEach((to, from, next) => {
    if (to.path != '/login' && auth.getUserLogged()) {
        next();
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//       if (store.state.auth) {
//         next();
//       } else {
//         next({ name: "login" });
//       }
//     } else {
//       next();
//     }
// });

const app = createApp(App);
app.use(router);

app.component('HeaderMain', defineAsyncComponent(() => import("@/components/HeaderMain.vue")));

app.mount("#app");