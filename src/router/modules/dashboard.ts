export default {
  path: 'dashboard',
  name: 'dashboard',
  meta: {
    title: '总览'
  },
  component: () => import('@/pages/dashboard/index.vue')
};
