
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' // 加载mockServer即可
import './fiters' // 加载过滤器

Vue.config.productionTip = false
// eslint-disable-next-line import/first
import loading from './common/img/loading.gif'
// 注册全局组件标签
Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
