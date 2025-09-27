import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
// import { useAuthStore } from './service/auth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Inicializar autenticação após montar a app
// const authStore = useAuthStore()
// authStore.initializeAuth()

app.mount('#app')