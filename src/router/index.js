import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/goods/goods'
import Assess from '@/components/assess/assess'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'*',
      redirect:'/goods'
    },
    {
      path:'/',
      redirect:'/goods'
    },
    {
      path:'/goods',
      component:Goods
    },
    {
      path:'/assess',
      component:Assess
    },
    {
      path:'/user',
      component:User
    }
  ]
})
