import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import { createHead } from "@vueuse/head"
import quasarUserOptions from './quasar-user-options'

const SW = createApp(App)
const Head = createHead()

SW
    .use(Head)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .mount('#app')
