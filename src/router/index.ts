import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('@/views/Home.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history:createWebHashHistory(),
  routes
})
export default router
