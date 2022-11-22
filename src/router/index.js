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
      return import(CreateStoreView)
    }
  },
  {
    path: '/MyPost',
    name:'MyPost',
    component: function(){
      return import(MyPostView)
    }
  },
  {
    path: '/SavePost',
    name: 'SavePost',
    component: function (){
      return import(SavePostView)
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
