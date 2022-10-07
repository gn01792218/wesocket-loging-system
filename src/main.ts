import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getMsgReCall } from './socketApi'
import './assets/style/style.css'
createApp(App).use(router).use(store).mount('#app')

window.addEventListener('onmessageWs',getMsgReCall)  //全局註冊wbSocket的訊息監聽