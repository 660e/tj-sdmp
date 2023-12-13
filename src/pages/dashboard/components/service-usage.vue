<script lang="ts" setup>
import { onMounted } from 'vue';
import { Chart } from '@antv/g2';

onMounted(() => {
  const chart = new Chart({ container: 'service-usage' });
  chart.options({
    type: 'line',
    autoFit: true,
    height: 300,
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv'
    },
    encode: { x: 'date', y: 'close' }
  });
  chart.render();
});
</script>

<template>
  <div class="border border-gray-200 rounded overflow-x-hidden">
    <div class="leading-10 pl-4">服务调用统计</div>
    <div class="bg-red-50" id="service-usage"></div>
  </div>
</template>
