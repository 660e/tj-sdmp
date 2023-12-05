<script lang="ts" setup>
import DataEntirety from './components/data-entirety.vue';

import DeviceStatus from './components/device-status.vue';
import DeviceTrends from './components/device-trends.vue';
import ObjectBinding from './components/object-binding.vue';

import ProtocolManagement from './components/protocol-management.vue';

defineOptions({ name: 'app-dashboard' });
</script>

<template>
  <div class="p-4 space-y-4 overflow-x-hidden">
    <data-entirety />
    <div class="grid grid-cols-4 gap-4">
      <device-status />
      <device-trends class="col-span-2" />
      <object-binding />
      <protocol-management />
    </div>
  </div>
</template>
