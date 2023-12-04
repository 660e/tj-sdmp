<script lang="ts" setup>
import DataEntirety from './components/data-entirety.vue';
import DeviceStatus from './components/device-status.vue';

defineOptions({ name: 'app-dashboard' });
</script>

<template>
  <div class="p-4 space-y-4">
    <data-entirety />
    <div class="flex space-x-4">
      <device-status class="flex-1" />
      <div class="flex-2 border border-gray-300 rounded">2</div>
      <div class="flex-1 border border-gray-300 rounded">3</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-2 {
  flex: 2;
}
</style>
