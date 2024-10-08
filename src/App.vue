<script setup>

import { useAuth } from '@/stores/auth';
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';

const auth = useAuth();

</script>
  
<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <HomeView></HomeView>
    </v-main>
  </v-app>
</template>

<style scoped>
  
</style>
