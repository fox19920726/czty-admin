import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '@/views/menu/menu'
import Login from '@/views/login/login'
import Dashboard from '@/views/dashboard/dashboard'
import Layout from '@/views/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login,
    hidden: true,
    name: '01'
  },
  {
    path: '/test',
    component: Layout,
    meta: { title: '我是一级', icon: 'location', el: true },
    name: '02',
    children: [
      {
        path: 'configer',
        component: Menu,
        meta: { title: '我是二级', icon: 'iconpingdiguot', el: false },
        name: '03',
        children: [
          {
            path: 'login',
            component: Login,
            meta: { title: '我是三级', icon: 'location', el: true },
            name: '04'
          },
          {
            path: 'aaaaaa',
            component: Menu,
            meta: { title: '我是也3级', icon: 'location', el: true },
            name: '05',
            children: [
              {
                path: 'bbbbb',
                component: Dashboard,
                name: '06',
                meta: { title: '我是4级', icon: 'location', el: true },
              },
              {
                path: 'http://baidu.com',
                name: '07',
                meta: { title: '我也是4级', icon: 'location', el: true }
              }
            ]
          }
        ]
      },
      {
        path: 'dashboard',
        component: Dashboard,
        name: '08',
        meta: { title: '我是2.1级', icon: 'location', el: true }
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

export default router;
