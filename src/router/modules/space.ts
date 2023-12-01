export default {
  path: 'space',
  children: [
    {
      path: 'overview',
      component: () => import('@/pages/index.vue')
    }
  ]
};
