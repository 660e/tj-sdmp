<script lang="ts" setup>
import { onMounted } from 'vue';
import { Chart } from '@antv/g2';

onMounted(() => {
  const chart = new Chart({ container: 'project-space' });
  chart.options({
    type: 'interval',
    autoFit: true,
    height: 300,
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv'
    },
    encode: { x: 'letter', y: 'frequency' },
    axis: { y: { labelFormatter: '.0%' } }
  });
  chart.render();
});
</script>

<template>
  <div class="border border-gray-200 rounded overflow-x-hidden">
    <div class="leading-10 pl-4">项目空间剖分</div>
    <div class="bg-red-50" id="project-space"></div>
  </div>
</template>
