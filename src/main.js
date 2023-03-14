import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue'
import router from './router'

import './css/styles.css'

const app = createApp(App);
app.use(router);

app.component('HeaderMain', defineAsyncComponent(() => import("@/components/HeaderMain.vue")));

app.mount("#app");