<template>
  <h2>Login</h2>

  <form @submit.prevent="login">
    <input type="text" placeholder="Seu email" v-model="user.username">
    <input type="password" placeholder="Sua senha" v-model="user.password">
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import auth from '@/services/auth.js'
import { reactive } from 'vue'

const user = reactive({
  username:'',
  password:''
})

async function login() {
  try {
    console.log(user);
    const {data} = await auth.login(user);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
</style>