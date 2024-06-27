
import { createApp } from 'vue';
import App from './App.vue';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import router from './router'; 
import './index.css';

createApp(App).use(router).use(ToastPlugin).mount('#app');