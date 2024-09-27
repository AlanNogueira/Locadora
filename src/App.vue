<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <ul>
    <li>
      <RouterLink :to="{name:'home'}">Home</RouterLink>
    </li>
    <li>
      <RouterLink :to="{name:'login'}">Login</RouterLink>
    </li>
    <li>
      <RouterLink :to="{name:'dashboard'}">Dashboard</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

<style scoped>

</style>
