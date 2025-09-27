<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-header">
        <h2>Perfil do Usuário</h2>
        <button @click="handleLogout" class="logout-button">Sair</button>
      </div>
      <div class="profile-welcome">
        <h3>Bem-vindo(a), {{ authStore.user?.name }}!</h3>
        <p>
          Esta é uma página protegida que só usuários autenticados podem
          acessar.
        </p>
      </div>
      
      <div v-if="authStore.isLoading" class="loading">
        <div class="loading-spinner"></div>
        <span>Carregando perfil...</span>
      </div>

      <div v-else-if="authStore.user" class="profile-content">
        <div class="profile-avatar">
          <div class="avatar-circle">
            {{ authStore.user?.name.charAt(0).toUpperCase() }}
          </div>
        </div>

        <div class="profile-info">
          <h3>Informações do Usuário</h3>
          <p class="info-item"><strong>ID:</strong> {{ authStore.user?.id }}</p>
          <p class="info-item"><strong>Nome:</strong> {{ authStore.user?.name }}</p>
          <p class="info-item"><strong>Email:</strong> {{ authStore.user?.email }}</p>
          <p class="info-item" v-if="authStore.user?.created_at">
            <strong>Cadastrado em:</strong>
            {{ new Date(authStore.user?.created_at).toLocaleDateString("pt-BR") }}
          </p>
        </div>

      </div>

      <div v-if="authStore.error" class="error-message">
        {{ authStore.error }}
      </div>  
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/service/auth";
// import { useAuth } from "@/composables/useAuth";

const router = useRouter();
const authStore = useAuthStore();

if (!localStorage.getItem("token")) {
  router.push({ name: "login" });
}

onMounted(() => {
  authStore.profile();
})

const handleLogout = () => {
  localStorage.removeItem("token");
  router.push({ name: "login" });
};

</script>

<style scoped>
.profile-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.profile-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  padding-bottom: 0.8rem;
}

.profile-header h2 {
  color: #333;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.logout-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.logout-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
}

.logout-button:active {
  transform: translateY(-1px);
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e1e5e9;
  border-top: 3px solid #667eea;
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

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  margin-top: 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e1e5e9;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.info-item:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.info-item label {
  color: #555;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-item span {
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
}

.profile-welcome {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #e1e5e9;
}

.profile-welcome h3 {
  color: #333;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.profile-welcome p {
  color: #666;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
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

/* Responsividade melhorada */
@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;
  }

  .profile-card {
    padding: 2rem;
    margin: 1rem;
    max-width: none;
  }

  .profile-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .profile-header h2 {
    font-size: 1.5rem;
  }

  .avatar-circle {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }

  .info-item {
    padding: 1rem;
  }

  .profile-welcome {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .profile-container {
    padding: 0.5rem;
  }

  .profile-card {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .profile-header h2 {
    font-size: 1.25rem;
  }

  .avatar-circle {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }

  .info-item {
    padding: 1rem;
  }

  .profile-welcome {
    padding: 1.5rem;
  }

  .profile-welcome h3 {
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

  .info-item:hover,
  .logout-button:hover,
  .logout-button:active {
    transform: none;
  }
}

/* Alto contraste */
@media (prefers-contrast: high) {
  .profile-card {
    border: 2px solid #000;
    box-shadow: none;
  }

  .info-item {
    border: 2px solid #000;
  }

  .info-item:hover {
    border: 2px solid #0066cc;
  }

  .logout-button {
    background: #cc0000;
    border: 2px solid #cc0000;
  }

  .logout-button:hover {
    background: #990000;
  }

  .profile-welcome {
    border: 2px solid #000;
  }

  .error-message {
    background: #fff;
    border: 2px solid #cc0000;
    color: #cc0000;
  }
}

/* Otimizações de performance */
@media (max-width: 768px) {
  .profile-container {
    background-attachment: scroll;
  }
}

/* Navegação por teclado */
.logout-button:focus-visible {
  outline: 2px solid #dc3545;
  outline-offset: 2px;
}

/* Suporte a touch devices */
@media (hover: none) and (pointer: coarse) {
  .logout-button:hover,
  .info-item:hover {
    transform: none;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
}
</style>
