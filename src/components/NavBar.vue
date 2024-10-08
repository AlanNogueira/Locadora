<template>
    <v-app-bar flat class="border-b" v-if="auth.isAuthenticated">
        <v-app-bar-title><p><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>{{ auth.fullName }}</p></v-app-bar-title>
        <div class="d-flex justify-space-evenly">
            <li>
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
            </li>
            <li>
                <div><button @click="Logout"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg></button></div>
            </li>
        </div>
    </v-app-bar>
    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuth } from '@/stores/auth';

const auth = useAuth();

function Logout() {
    auth.clear();
}
</script>

<style scoped>
a {
    align-self: center;
    text-decoration: none;
}

li {
    padding-bottom: 0;
    display: flex;
    align-content: center;
    margin: 10px;
    list-style-type: none;
}

p {
    display: flex;
    align-content: center;
    align-self: center;
}

div {
    display: flex;
    align-content: center;
    align-self: center;
}

button {
    margin-top: 6px;
}
</style>