import Vue from 'vue'
// 自定义过滤器
import moment from 'moment'
Vue.filter('data-format', function (value, formatStr = 'YYY-MM-DD HH:mm:ss') {
  return moment(value).format(formatStr)
})
