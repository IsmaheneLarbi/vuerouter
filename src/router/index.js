import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Network from '@/components/Network'
import Contact from '@/components/Contact'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/network/:id/:age/:weight',
      name: 'Network',
      component: Network,
      props:true,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
  ]
})
