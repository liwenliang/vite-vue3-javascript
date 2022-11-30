export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/AboutView.vue')
  }
]
