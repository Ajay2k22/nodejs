import { createRouter, createWebHistory } from 'vue-router'

import Product from '../views/Productcatalog.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },

  ]
})

export default router
