import { route } from 'quasar/wrappers';
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

import dashboard from './modules/dashboard';
import space from './modules/space';

export const routes: RouteRecordRaw[] = [dashboard, space];

export default route(() => {
  let createHistory;

  if (process.env.SERVER) {
    createHistory = createMemoryHistory;
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory;
  } else {
    createHistory = createWebHashHistory;
  }

  return createRouter({
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes: [
      {
        path: '/',
        redirect: 'dashboard',
        component: () => import('@/layouts/index.vue'),
        children: routes
      },
      {
        path: '/login',
        component: () => import('@/pages/index.vue')
      }
    ],
    scrollBehavior: () => ({ left: 0, top: 0 })
  });
});
