import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/home-page',
          name: 'HomePage',
          component: HomePage,
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name:'Login',
      component: Login,
    },
  ]
})
