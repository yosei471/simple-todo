import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'


const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard }, // ← ここ追加
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router