import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'

import './css/styles.css'

// const auth = Vue.createApp(App)
// app.use(VueAxios, axios)

const app = createApp(App);
app.use(router);

app.component('HeaderMain', defineAsyncComponent(() => import("@/components/HeaderMain.vue")));

app.mount("#app");