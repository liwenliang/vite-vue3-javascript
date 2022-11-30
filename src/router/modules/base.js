export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
  },
];