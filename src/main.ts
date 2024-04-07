import { createApp } from 'vue'
import '../node_modules/flowbite-vue/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './routes';

createApp(App).use(router).mount('#app')
