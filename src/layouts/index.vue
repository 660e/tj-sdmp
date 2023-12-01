<script setup lang="ts">
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
        <q-item v-for="r in routes" :key="r.name" :to="{ name: r.name }" clickable v-ripple>
          <q-item-section class="text-base text-right">{{ r.meta?.name }}</q-item-section>
        </q-item>
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
