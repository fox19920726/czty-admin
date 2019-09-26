// 主框架引入
import Vue from 'vue'
import ElementUI from 'element-ui'

// element-ui
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// ajax
import axios from 'axios';
Vue.prototype.$axios = axios;

// mock模块
import './mock'

// 弥补axios
import QS from 'qs'
Vue.prototype.qs = QS;

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
