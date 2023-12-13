<script lang="ts" setup>
import { onMounted } from 'vue';
import { Chart } from '@antv/g2';

onMounted(() => {
  const chart = new Chart({ container: 'assign-code' });
  chart.options({
    type: 'interval',
    autoFit: true,
    height: 300,
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
  <div class="border border-gray-200 rounded overflow-x-hidden">
    <div class="leading-10 pl-4">设备赋码统计</div>
    <div class="bg-red-50" id="assign-code"></div>
  </div>
</template>
