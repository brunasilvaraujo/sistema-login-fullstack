<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Login</h2>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Digite seu email"
            required
            :disabled="authStore.isLoading"
          />
        </div>

        <div class="form-group">
          <label for="password">Senha:</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Digite sua senha"
            required
            :disabled="authStore.isLoading"
          />
        </div>

        <button type="submit" :disabled="authStore.isLoading" class="auth-button">
          {{ authStore.isLoading ? "Entrando..." : "Entrar" }}
        </button>
      </form>

      <div v-if="authStore.error" class="error-message">
        {{ authStore.error }}
      </div>

      <p class="auth-link">
        Não tem uma conta?
        <router-link to="/register">Cadastre-se</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useAuthStore } from "@/service/auth";
import type { UserLoginData } from "@/types/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const formData = reactive<UserLoginData>({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await authStore.login(formData);
  if (authStore.token) {
    router.push({ name: "profile" });
  }
};

onMounted(() => {
  if (localStorage.getItem("token")) {
    router.push({ name: "profile" });
  }
})

</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.profile-header-2 {
  display: flex;
  width: 100%;
  max-width: 400px;
  background: #fff;
}

.auth-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(143, 142, 142, 0.1);
  width: 100%;
  max-width: 400px;
}

.auth-card h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #555;
  font-weight: 600;
  font-size: 0.95rem;
}

input {
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background-color: white;
  transform: translateY(-1px);
}

input::placeholder {
  color: #999;
}

.auth-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.auth-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.auth-button:active:not(:disabled) {
  transform: translateY(-1px);
}

.auth-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  background: #fee;
  border: 1px solid #fcc;
  color: #c33;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
}

.auth-link {
  text-align: center;
  color: #666;
  margin-top: 2rem;
}

.auth-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.auth-link a:hover {
  color: #764ba2;
  text-decoration: underline;
}

/* Responsividade melhorada */
@media (max-width: 768px) {
  .auth-container {
    padding: 1rem;
  }

  .auth-card {
    padding: 2rem;
    margin: 1rem;
    max-width: none;
  }

  .auth-card h2 {
    font-size: 1.5rem;
  }

  input {
    padding: 0.875rem;
    font-size: 0.95rem;
  }

  .auth-button {
    padding: 0.875rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .auth-container {
    padding: 0.5rem;
  }

  .auth-card {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .auth-card h2 {
    font-size: 1.25rem;
  }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  input:focus,
  .auth-button:hover:not(:disabled),
  .auth-button:active:not(:disabled) {
    transform: none;
  }
}

/* Alto contraste */
@media (prefers-contrast: high) {
  .auth-card {
    border: 2px solid #000;
    box-shadow: none;
  }

  input {
    border: 2px solid #000;
  }

  input:focus {
    border: 2px solid #0066cc;
    box-shadow: 0 0 0 2px #0066cc;
  }

  .auth-button {
    background: #000;
    border: 2px solid #000;
  }

  .auth-button:hover:not(:disabled) {
    background: #333;
  }

  .auth-link a {
    color: #0066cc;
  }

  .error-message {
    background: #fff;
    border: 2px solid #cc0000;
    color: #cc0000;
  }
}

/* Otimizações de performance */
@media (max-width: 768px) {
  .auth-container {
    background-attachment: scroll;
  }
}

/* Navegação por teclado */
input:focus-visible,
.auth-button:focus-visible,
.auth-link a:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

/* Suporte a touch devices */
@media (hover: none) and (pointer: coarse) {
  .auth-button:hover {
    transform: none;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  input:focus {
    transform: none;
  }
}
</style>
