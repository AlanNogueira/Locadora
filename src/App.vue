<script setup>

import { useAuth } from '@/stores/auth';
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import SideBar from './components/SideBar.vue';

const auth = useAuth();

</script>

<template>
  <v-app theme="dark">
    <NavBar></NavBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
