import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('@/views/Home.vue')
  },
  {
    path: '/LogingPage',
    name: 'LogingPage',
    component:()=>import('@/views/LogingPage.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  history:createWebHashHistory(import.meta.env.VITE_APP_BASE_URL as string),
  routes
})
export default router
