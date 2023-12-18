import { createRouter, createWebHistory } from 'vue-router'
import Contador from '../components/Contador.vue'

const routes = [
  {
    path: '/users/:id',
    name: 'User',
    component: Contador,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router