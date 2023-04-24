import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/style.css'
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css'


createApp(App).use(store).use(router).mount('#app')
