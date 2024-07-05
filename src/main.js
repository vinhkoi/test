import './assets/main.css'
// import 'primevue/resources/themes/aura-light-green/theme.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'primeicons/primeicons.css'
import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
import "@egjs/vue3-flicking/dist/flicking.css";
import router from './routes.js';

import "@egjs/vue3-flicking/dist/flicking-inline.css";

import PrimeVue from 'primevue/config';
   
import { createApp } from 'vue'
import App from './App.vue'
import Lara from './presets/Lara';
const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});
app.use(ElementPlus)
app.component("Flicking", Flicking);

app.use(router).mount('#app')


