import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import CarsView from '@/views/CarsView.vue'
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/cars',
      name: 'CarsView',
      component: CarsView,
      beforeEnter: () => {
        const authStore = useAuthStore()
        if (!authStore.isAuthorized) return { name: 'SignIn' }
      }
    }
  ]
})

export default router
