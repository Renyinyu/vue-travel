import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/Pages/home/Home'

const City = () => import('@/pages/city/City')
const Detail = () => import('@/pages/detail/Detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
