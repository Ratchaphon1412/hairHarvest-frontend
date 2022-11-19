import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage";
import CreateHairStyleVue from '@/views/hairstyle/CreateHairStyle.vue';


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
    name:'LandingPage',
    component: function(){
      return LandingPage
    }
  },
  {
    path:'/CreateHairStyle',
    name:'CreateHairStyle',
    component:function(){
      return import('@/views/hairstyle/CreateHairStyle.vue')
    }
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
