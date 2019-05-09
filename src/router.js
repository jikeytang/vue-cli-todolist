import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'all'
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('@/views/home')
    },
    {
      path: '/active',
      name: 'active',
      component: () => import('@/views/home')
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import('@/views/home')
    }
  ]
})
