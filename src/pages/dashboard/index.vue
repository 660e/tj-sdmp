<script lang="ts" setup>
import dataEntirety from './components/data-entirety.vue';

import deviceStatus from './components/device-status.vue';
import deviceTrends from './components/device-trends.vue';
import objectBinding from './components/object-binding.vue';

import protocolManagement from './components/protocol-management.vue';
import apiManagement from './components/api-management.vue';
import projectSpace from './components/project-space.vue';
import assignCode from './components/assign-code.vue';

import serviceUsage from './components/service-usage.vue';
import serviceCount from './components/service-count.vue';
import operationMonitoring from './components/operation-monitoring.vue';

defineOptions({ name: 'app-dashboard' });
</script>

<template>
  <div class="p-4 space-y-4">
    <data-entirety />
    <div class="grid grid-cols-4 gap-4">
      <device-status />
      <device-trends class="col-span-2" />
      <object-binding />

      <protocol-management />
      <api-management />
      <project-space />
      <assign-code />

      <service-usage class="col-span-2" />
      <service-count />
      <operation-monitoring />
    </div>
  </div>
</template>
