import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const pinia = createPinia()


createApp(App).use(router).use(pinia).mount('#app')
