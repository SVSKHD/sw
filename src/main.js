import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import { createHead } from "@vueuse/head"
import { createPinia } from 'pinia'
import quasarUserOptions from './quasar-user-options'
import "./assets/app.css"

const SW = createApp(App)
const Pinia = createPinia()
const Head = createHead()

SW
    .use(Head)
    .use(Pinia)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .mount('#app')
