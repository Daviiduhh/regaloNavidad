import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})
export default router