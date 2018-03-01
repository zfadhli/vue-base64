// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/app.css'
import VueClipboards from 'vue-clipboards'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(VueClipboards)
Vue.use(Toasted)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
