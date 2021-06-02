import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { useVant } from './hooks'

const app = useVant(createApp(App))

app.use(router).mount('#app')
