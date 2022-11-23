import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage";
import MyPostView from "@/views/mypost/MyPostView";
import SavePostView from "@/views/mypost/SavePostView";
import CreateStoreView from "@/views/mypost/CreateStoreView";


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
  {
    path:'/ShowHairStyle',
    name:'ShowHairStyle',
    component:function(){
      return import('@/views/hairstyle/HairStyleShow.vue')
    }
  },
  {
    path:'/CreateStore',
    name:'CreateStore',
    component: function(){
      return import("@/views/mypost/CreateStoreView")
    }
  },
  {
    path: '/MyPost',
    name:'MyPost',
    component: function(){
      return import("@/views/mypost/MyPostView")
    }
  },
  {
    path: '/SavePost',
    name: 'SavePost',
    component: function (){
      return import("@/views/mypost/SavePostView")
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
