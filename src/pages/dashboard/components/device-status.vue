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
  chart = new Chart({ container: 'device-status' });
  chart.options({
    type: 'interval',
    height: 300,
    autoFit: true,
    data: [
      { id: 'c', value: 526 },
      { id: 'sass', value: 220 },
      { id: 'php', value: 325 },
      { id: 'elixir', value: 561 },
      { id: 'rust', value: 54 }
    ],
    encode: { y: 'value', color: 'id' },
    transform: [{ type: 'stackY' }],
    coordinate: { type: 'theta', innerRadius: 0.3, outerRadius: 0.7 },
    style: { radius: 4, stroke: '#fff', lineWidth: 1 },
    animate: { enter: { type: 'waveIn' } },
    labels: [{ text: 'value', position: 'spider' }]
  });
  chart.render();
});
</script>

<template>
  <div class="border border-gray-200 rounded w-0">
    <div class="leading-10 py-1 px-4">设备状态统计</div>
    <div class="bg-red-50" id="device-status"></div>
  </div>
</template>
