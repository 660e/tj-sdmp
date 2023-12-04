<script lang="ts" setup>
import DataEntirety from './components/data-entirety.vue';

import DeviceStatus from './components/device-status.vue';
import DeviceTrends from './components/device-trends.vue';
import ObjectBinding from './components/object-binding.vue';

defineOptions({ name: 'app-dashboard' });
</script>

<template>
  <div class="p-4 space-y-4 overflow-x-hidden">
    <data-entirety />
    <div class="flex space-x-4">
      <device-status class="flex-1" />
      <device-trends class="flex-2" />
      <object-binding class="flex-1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-2 {
  flex: 2;
}
</style>
