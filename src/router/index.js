import Vue from 'vue'
import Router from 'vue-router'
import Encode from '@/components/Encode'
import Decode from '@/components/Decode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/encode'
    },
    {
      path: '/encode',
      name: 'Encode',
      component: Encode
    },
    {
      path: '/decode',
      name: 'Decode',
      component: Decode
    },
    {
      path: '/decode/:hashcode',
      name: 'DecodeHash',
      component: Decode
    }
  ]
})
