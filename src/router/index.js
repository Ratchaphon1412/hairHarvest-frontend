import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage";


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path:'/Login',
    name:'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path:'/Register',
    name:'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path:'/LandingPage',
    name:'',
    component: function(){
      return LandingPage
    }
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
