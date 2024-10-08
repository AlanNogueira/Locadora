import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        auth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta:{
        auth:true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  ///Aqui vai inserir em todas as rotas o que estiver aqui dentro
  if(to.meta?.auth){
    const auth = useAuth();
    if(auth.token && auth.user){
      const autorized = auth.checkToken();
      if(autorized){
        next();
      }
      else{
        next({name:'login'});
      }
    }
    else{
      next({name:'login'});
    }
  }
  else{
    next();
  }
})

export default router
