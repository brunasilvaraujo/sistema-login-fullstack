import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import { api } from '@/lib/axios'
import type { User, UserRegistrationData, UserLoginData, AuthResponse, AuthState } from '@/types/auth'


const API_BASE_URL = 'http://localhost:3333/api/v1'

// Configurar axios para incluir token automaticamente
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoading: false,
    error: null as string | null,
    user: null as User | null,
    token: false,
    isAuthenticated: false,
  }),
  actions: {
    async register(user: UserRegistrationData) {
      this.isLoading = true
      this.isAuthenticated = false
      try {
        const response = await api.post('/register', user)
        if (response.data.userId) {
          this.isAuthenticated = true
          this.error = null
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          this.error = error.response?.data.message || 'Registration failed'
        }
      } finally {
        this.isLoading = false
      }
    },
    async login(login: UserLoginData) {
      try {
        //verrificar se o usuario existe
        const response = await api.post('/login', login)
        //pegar o token
        if (response.data.token) {
          //precistir o token localstorage
          localStorage.setItem('token', response.data.token)
          this.token = true
        }
        //redirecionar profile
      } catch (error) {
        if (error instanceof AxiosError) {
          this.error = error.response?.data.message || 'Login failed'
        }
      } finally {
        this.isLoading = false
      }
      
    },
    async profile() {
      this.isLoading = true
      try {
        const response = await api.get('/me')
          if (response.data.user) {
            this.user = response.data.user
          }
      } catch (error) {
        if (error instanceof AxiosError) {
          this.error = error.response?.data.message || 'Failed to fetch profile'
        }
      } finally {
        this.isLoading = false
      }
    }
  }
})  