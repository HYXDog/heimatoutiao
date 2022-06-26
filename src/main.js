import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入icon图标
import '@/styles/icon.less'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
// 引入axios

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
