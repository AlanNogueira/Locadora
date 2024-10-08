<template>
  <div class="page">
    <form @submit.prevent="login" class="formLogin">
      <h1>Login</h1>
      <label for="email">E-mail</label>
      <input type="email" placeholder="Seu email" v-model="user.email">
      <label for="password">Senha</label>
      <input type="password" placeholder="Sua senha" v-model="user.password">
      <button type="submit">Login</button>
  </form>
  </div>
</template>

<script setup>
import auth from '@/services/auth.js'
import { reactive } from 'vue'
import { useAuth } from '@/stores/auth';
import router from '@/router/index.js';

const authStore = useAuth();

const user = reactive({
  email: 'admin@email.com',
  password: 'Qwe123*'
})

async function login() {
  try {
    const { data } = await auth.login(user);
    authStore.setToken(data.token);
    authStore.setUser({ username: data.userName, role: data.role })
    router.push('/');
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    color: #023047
}

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}

.formLogin {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    padding: 40px;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    gap: 5px
}

.areaLogin img {
    width: 420px;
}

.formLogin h1 {
    color: hsla(160, 100%, 37%, 1);
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 2.3em;
}

.formLogin p {
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-bottom: 25px;
}

.formLogin input {
    padding: 15px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 4px;
    transition: all linear 160ms;
    outline: none;
}


.formLogin input:focus {
    border: 1px solid #f72585;
}

.formLogin label {
  color: hsla(160, 100%, 37%, 1);
    font-size: 14px;
    font-weight: 600;
}

.formLogin a {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 13px;
    color: #555;
    transition: all linear 160ms;
}

.formLogin a:hover {
    color: #f72585;
}

.btn {
    background-color: #f72585;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border: none !important;
    transition: all linear 160ms;
    cursor: pointer;
    margin: 0 !important;

}

.btn:hover {
    transform: scale(1.05);
    background-color: #ff0676;
}
</style>