import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    //name: 'home',
    //component: HomeView
    //component: () => import('@/views/HomeView.vue')
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/showroom',
    name: 'showroom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/ShowroomView.vue')
  },
  {
    path: '/culture',
    name: 'culture',
    component: () => import('@/views/CultureView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/views/ContactUSView.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/views/CompanyView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
