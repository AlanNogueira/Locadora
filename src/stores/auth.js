import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import auth from '@/services/auth.js'
import router from '@/router'

export const useAuth = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'));
  const user = ref(JSON.parse(localStorage.getItem('user')));

  function setToken(tokenValue){
    localStorage.setItem('token', tokenValue);
    token.value = tokenValue;
  }

  function setUser(userData){
    console.log(userData)
    localStorage.setItem('user', JSON.stringify(userData));
    user.value = userData;
  }

  const isAuthenticated = computed(() => {
    return token.value && user.value;
  })

  const fullName = computed(() => {
    return user.value.username;
  })

  function clear(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    token.value = '';
    user.value = '';
    router.push('/login');
  }

  async function checkToken(){
    try{
        const { data } = await auth.checkToken();
        console.log(data)
        return data;
    }catch(error){
        console.log(error.response.data)
    }
  }

  return {
    token,
    user,
    setToken,
    setUser,
    checkToken,
    isAuthenticated,
    fullName,
    clear
  }
})
