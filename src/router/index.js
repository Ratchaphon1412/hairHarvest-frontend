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
      return import("@/views/store/ViewStore.vue")
    }
  },
  {
    path: "/StoreView",
    name: "StoreView",
    component: function(){
      return import("@/views/store/StoreView.vue")
    }
  },
  {
    path: '/Wiki',
    name: 'Wiki',
    component: function (){
      return import("@/views/Wiki")
    }
  },
  {
    path: "/AllStore_",
    name: "AllStore_",
    component: function(){
      return import("@/views/store/AllStore_.vue")
    }
  },
  {
    path: "/ViewWiki1",
    name: "ViewWiki1",
    component: function(){
      return import("@/views/ViewWiki1.vue")
    }
  },
  {
    path: "/ViewWiki2",
    name: "ViewWiki2",
    component: function(){
      return import("@/views/ViewWiki2.vue")
    }
  },
  {
    path: "/ViewWiki3",
    name: "ViewWiki3",
    component: function(){
      return import("@/views/ViewWiki3.vue")
    }
  },
  {
    path: "/ViewWiki4",
    name: "ViewWiki4",
    component: function(){
      return import("@/views/ViewWiki4.vue")
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
