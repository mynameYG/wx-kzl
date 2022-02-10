import Vue from 'vue'
import App from './App'
import { myRequest } from './util/api.js'
import uView from 'uview-ui';
Vue.prototype.$ajax = myRequest
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

//原型追加工具函数

Vue.prototype.$api = {};//定义api对象

const app = new Vue({
    ...App
})
app.$mount()
