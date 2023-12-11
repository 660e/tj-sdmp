<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { routes } from '@/router';
import { useGlobalStore } from '@/stores/example-store';

import type { RouteRecordName, RouteRecordRaw } from 'vue-router';
import type { Breadcrumb } from './models';

defineOptions({ name: 'app-layout' });

const $store = useGlobalStore();
const opened = ref($store.opened);
const toggle = () => ($store.opened = opened.value);

const $route = useRoute();
const findPath = (nodes: RouteRecordRaw[], target: RouteRecordName | null | undefined, current: Breadcrumb[] = []): Breadcrumb[] => {
  for (const node of nodes) {
    const path = [...current, { title: node.meta?.title || '-', name: node.name || '-' }];
    if (node.name === target) return path;
    if (node.children?.length) return findPath(node.children, target, path);
  }
  return [];
};
const breadcrumbs = ref();
watchEffect(() => {
  breadcrumbs.value = findPath(routes, $route.name);
  console.log(breadcrumbs.value);
});

const tweak = (offset: number, height: number) => ({ height: `${height - offset}px` });
</script>

<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <q-ajax-bar />
    <q-header>
      <q-toolbar>
        <q-btn @click="opened = !opened" icon="menu" dense flat round />
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="opened" :width="200" @hide="toggle" @show="toggle" bordered>
      <q-list>
        <template v-for="_1st in routes" :key="_1st.name">
          <q-item v-if="!_1st.children?.length" :to="{ name: _1st.name }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info_outline" />
            </q-item-section>
            <q-item-section>{{ _1st.meta?.title }}</q-item-section>
          </q-item>
          <q-expansion-item v-else :label="_1st.meta?.title" icon="info_outline" default-opened>
            <q-item v-for="_2nd in _1st.children" :key="_2nd.name" :to="{ name: _2nd.name }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon />
              </q-item-section>
              <q-item-section>{{ _2nd.meta?.title }}</q-item-section>
            </q-item>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <q-page :style-fn="tweak" class="overflow-auto">
            <q-breadcrumbs class="pt-4 px-4">
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Components" />
              <q-breadcrumbs-el label="Breadcrumbs" />
            </q-breadcrumbs>
            <h1 class="leading-none pt-4 px-4 flex">
              <b class="w-1 bg-blue-500 mr-2"></b>
              <span class="text-lg">{{ $route.meta.title }}</span>
            </h1>
            <component :is="Component" />
          </q-page>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.q-item,
.q-expansion-item {
  ::v-deep(.q-item__section--avatar) {
    min-width: auto;
  }
}
</style>
