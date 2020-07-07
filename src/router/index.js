import Vue from 'vue'
import VueRouter from 'vue-router'
import { Layout } from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/About.vue'),
        meta: {
          title: '搜索'
        }
      },
      {
        path: 'friends',
        name: 'Friends',
        component: () => import(/* webpackChunkName: "friends" */ '@/views/friends/index.vue'),
        meta: {
          title: '朋友'
        }
      },
      {
        path: 'friends/:id',
        name: 'FriendDetail',
        component: () => import(/* webpackChunkName: "friendDetail" */ '@/views/friends/Detail.vue'),
        meta: {
          title: '朋友详情'
        }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/Setting.vue'),
        meta: {
          title: '设置'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
