import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../views/Auth.vue';
import Profile from '../views/Profile.vue';


const routes = [
  {
    path: '/login',
    name: 'login',
    component: Auth
  },
  {
    path: '/',
    name: 'profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
