import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/xiaoming',
      name: 'xiaoming',
      component: {
        template: "<div>我是小明</div>"
      }
    },
    {
      path: '/zhoupeng',
      name: 'zhoupeng',
      component: {
        template: "<div>我是周鹏</div>"
      }
    }
  ]
})
