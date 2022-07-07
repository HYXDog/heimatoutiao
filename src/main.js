import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入收藏，转发，关注功能
import '@/components'
// 引入css样式
import '@/styles/reset.less'
import '@/styles/index.less'
// 引入icon图标
import '@/styles/icon.less'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
// 引入全局组件
import Myicon from '@/components/Myicon.vue'
// 导出过滤器
import * as obj from '@/filters'
import FollowUser from '@/components/FollowUser.vue'
Vue.component(FollowUser.name, FollowUser)
Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})
Vue.use(Myicon)

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
