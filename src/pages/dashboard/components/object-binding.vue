<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { useGlobalStore } from '@/stores/example-store';
import { Chart } from '@antv/g2';

const $store = useGlobalStore();

let chart: Chart;

watch(
  () => $store.opened,
  () => chart.forceFit()
);

onMounted(() => {
  chart = new Chart({ container: 'object-binding' });
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
  <div class="border border-gray-200 rounded w-0">
    <div class="leading-10 py-1 px-4">
      <span>对象绑定状态</span>
    </div>
    <div class="bg-red-50" id="object-binding"></div>
  </div>
</template>
