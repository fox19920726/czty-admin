// 主框架引入
import Vue from 'vue'

// element-ui
import ElementUI from 'element-ui'

// ajax
import axios from 'axios';

// 弥补axios
import QS from 'qs'

// router
import router from './router'

// vuex
import store from './store'

// element-ui
import 'element-ui/lib/theme-chalk/index.css'

// 路由视图文件
import App from './App.vue'

// mock模块
import './mock'

// iconfont
import './iconfont/iconfont.css'

// reset css
import '@/styles/index.scss'

Vue.prototype.qs = QS;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
