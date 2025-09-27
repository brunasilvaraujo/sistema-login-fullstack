import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Profile from '@/components/Profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true, role: 'user' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router