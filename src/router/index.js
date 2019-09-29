import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Logout from '../views/logout'

Vue.use(VueRouter)

const routes = [
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
