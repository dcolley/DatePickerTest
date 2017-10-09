import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DateRangePicker from '@/components/DateRangePicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/dateRangePicker',
      name: 'DateRangePicker',
      component: DateRangePicker
    },
  ]
})
