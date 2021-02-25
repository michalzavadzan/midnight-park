import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    // route level code-splitting
    // this generates a separate chunk (Games.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Games" */ '../views/Games.vue')
  },
  {
    path: '/creators',
    name: 'Creators',
    // route level code-splitting
    // this generates a separate chunk (Creators.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Creators" */ '../views/Creators.vue')
  },
  {
    path: '/developers',
    name: 'Developers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Developers.vue')
  },
  {
    path: '/genres',
    name: 'Genres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Genres.vue')
  },
  {
    path: '/platforms',
    name: 'Platforms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Platforms.vue')
  },
  {
    path: '/publishers',
    name: 'Publishers',
    // route level code-splitting
    // this generates a separate chunk (Publishers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Publishers" */ '../views/Publishers.vue')
  },
  {
    path: '/tags',
    name: 'Tags',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Tags" */ '../views/Tags.vue')
  },
  {
    path: '/game/:slug',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tags" */ '../views/dynamic/Game.vue')
  },
  {
    path: '/developers/:slug',
    name: 'Developer',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tags" */ '../views/dynamic/Developer.vue')
  },
  {
    path: '/publishers/:slug',
    name: 'Publisher',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tags" */ '../views/dynamic/Publisher.vue')
  },
  {
    path: '/genres/:slug',
    name: 'Genre',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tags" */ '../views/dynamic/Genre.vue')
  },
  {
    path: '/platforms/:id',
    name: 'Platform',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tags" */ '../views/dynamic/Platform.vue')
  },
  {
    path: '/tags/:slug',
    name: 'Tag',
    // route level code-splitting
    // this generates a separate chunk (Tags.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tags" */ '../views/dynamic/Tag.vue')
  },
  {
    path: '/creators/:slug',
    name: 'Creator',
    // route level code-splitting
    // this generates a separate chunk (Creatorss.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Creatorss" */ '../views/dynamic/Creator.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
