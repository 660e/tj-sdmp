<script lang="ts" setup>
import { ref } from 'vue';
import { routes } from '@/router';

defineOptions({ name: 'app-layout' });

const drawer = ref(false);

const tweak = (offset: number, height: number) => ({ height: `${height - offset}px` });
</script>

<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <q-ajax-bar />
    <q-header>
      <q-toolbar>
        <q-btn @click="drawer = !drawer" icon="menu" dense flat round />
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" bordered show-if-above>
      <q-list>
        <template v-for="r in routes" :key="r.name">
          <q-item v-if="!r.children?.length" :to="{ name: r.name }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info_outline" />
            </q-item-section>
            <q-item-section>{{ r.meta?.name }}</q-item-section>
          </q-item>
          <q-expansion-item v-else :label="r.meta?.name" icon="info_outline" default-opened>
            <q-item v-for="s in r.children" :key="s.name" :to="{ name: s.name }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon />
              </q-item-section>
              <q-item-section>{{ s.meta?.name }}</q-item-section>
            </q-item>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <q-page :style-fn="tweak" class="overflow-auto">
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
