// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { userInfo } from 'os'
import $ from 'jquery'

Vue.config.productionTip = false

Vue.prototype.$ajax=axios   //挂载到Vue的原型上，使得整个组件都可以用到


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
