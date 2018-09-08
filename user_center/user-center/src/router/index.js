import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import LittleWorld from '@/components/LittleWorld'
import BusStop from '@/components/BusStop'
import DiaryWall from '@/components/DiaryWall'
import TopicStreet from '@/components/TopicStreet'
import CircleEr from '@/components/CircleEr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/homepage',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: '/littleworld',
          name: 'littleworld',
          component: LittleWorld,
        },
        {
          path: '/busstop',
          name: 'BusStop',
          component: BusStop,
        },
        {
          path: '/diarywall',
          name: 'DiaryWall',
          component: DiaryWall,
        },
        {
          path: '/topicstreet',
          name: 'TopicStreet',
          component: TopicStreet,
        },
        {
          path: '/circleer',
          name: 'CircleEr',
          component: CircleEr,
        },
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
