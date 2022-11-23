import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "./assets/styles.css"
import Vue3TagsInput from 'vue3-tags-input';
const pinia = createPinia()


createApp(App).use(router).use(pinia).use(Vue3TagsInput).mount('#app')
