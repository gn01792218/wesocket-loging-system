import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Home',
    name: 'Home',
    component:()=>import('../views/Home.vue')
    // component: BaccaratGame
  },
]

const router = createRouter({
  history: createWebHistory(),
  // history:createWebHashHistory(),
  routes
})
export default router
