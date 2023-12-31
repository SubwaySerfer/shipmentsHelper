import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from '../pages/home/HomePage.vue' 

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
  {
    path:'/',
    redirect: '/home'
  },
  { path:'/home',
    name:'home',
    component: HomePage
  }
]
})

export default router