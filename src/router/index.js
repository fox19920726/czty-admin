import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/demo/login'
import Logout from '@/views/demo/logout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logout',
    component: Logout
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

export default router;
