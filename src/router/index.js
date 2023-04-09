import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import PersonalAccessClient from '../views/admin//PersonalAccessClient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/personal-access-client',
      component: Dashboard,
      children: [
        {
          component: PersonalAccessClient,
          path: 'personal-access-client',
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

export default router
