import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import HelloWorld from "./components/HelloWorld.vue";

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: HelloWorld }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
