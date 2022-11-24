import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage";


const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import(/* webpackChunkName: "home" */ '../views/LandingPage.vue')
  },
  {
    path:'/Home',
    name:'Home',
    component: function(){
      return import('@/views/Home.vue')
    }
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
    path:'/CreateHairStyle',
    name:'CreateHairStyle',
    component:function(){
      return import('@/views/hairstyle/CreateHairStyle.vue')
    }
  },
  {
    path:'/post/:id',
    name:'post.show',
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
      return import("@/views/mypost/MyPostView.vue")
    }
  },
  {
    path: '/SavePost',
    name: 'SavePost',
    component: function (){
      return import("@/views/mypost/SavePostView.vue")
    }
  },
  {
    path: '/AllStore',
    name: 'AllStore',
    component: function (){
      return import("@/views/store/AllStore")
    }
  },
  {
    path: '/ViewStore',
    name: 'ViewStore',
    component: function (){
      return import("@/views/store/ViewStore")
    }
  },
  {
    path: '/AllStore_',
    name: 'AllStore_',
    component: function (){
      return import("@/views/store/AllStore_")
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
