import Vue from 'vue'
import Router from 'vue-router'

// 页面header footer
const layout = () => import('@/views/layout/index')

// 首页
const home = () => import('@/views/home/index')
// 需求池
const apply = () => import('@/views/apply/index')
// 发单管理
const sendOrder = () => import('@/views/sendOrder/index')
// 接单管理
const acceptOrder = () => import('@/views/acceptOrder/index')
// 积分购买
const payScore = () => import('@/views/payScore/index')
// 关于自由
const about = () => import('@/views/about/index')
// 个人中心
const my = () => import('@/views/my/index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: 'home',
      children: [
        {
          name: 'home',
          path: '/home',
          component: home
        },
        {
          name: 'apply',
          path: '/apply',
          component: apply
        },
        {
          name: 'acceptOrder',
          path: '/acceptOrder',
          component: acceptOrder
        },
        {
          name: 'sendOrder',
          path: '/sendOrder',
          component: sendOrder
        },
        {
          name: 'payScore',
          path: '/payScore',
          component: payScore
        },
        {
          name: 'about',
          path: '/about',
          component: about
        },
        {
          name: 'my',
          path: '/my',
          component: my
        }
      ]
    }
  ]
})
