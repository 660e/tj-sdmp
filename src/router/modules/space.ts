export default {
  path: 'space',
  name: 'space',
  meta: {
    title: '空间管理'
  },
  children: [
    {
      path: 'overview',
      name: 'space-overview',
      meta: {
        title: '空间总览'
      },
      component: () => import('@/pages/space/overview/index.vue')
    }
  ]
};
