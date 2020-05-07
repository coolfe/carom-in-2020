import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
import Home from '@/pages/Home'
import Vip from '@/pages/Vip'
import Shop from '@/pages/Shop'
import Search from '@/pages/Search'
import NewsList from '@/pages/List'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
