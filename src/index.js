// 主框架引入
import Vue from 'vue'
import ElementUI from 'element-ui'

// ajax
import axios from 'axios';

// 弥补axios
import QS from 'qs'

// router
import router from './router'

// element-ui
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// mock模块
import './mock'

Vue.prototype.qs = QS;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
