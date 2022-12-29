import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '../components/Test.vue'
import Signup from '../components/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path:'/signup',
      name:'signup',
      component:Signup
    }
  ]
})

export default router
