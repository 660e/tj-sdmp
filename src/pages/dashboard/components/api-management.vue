<script lang="ts" setup>
import { onMounted } from 'vue';
import { Chart } from '@antv/g2';

onMounted(() => {
  const chart = new Chart({ container: 'api-management' });
  chart.options({
    type: 'interval',
    autoFit: true,
    height: 300,
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv'
    },
    encode: { x: 'year', color: 'year', y: 'people' },
    transform: [{ type: 'groupX', y: 'sum' }],
    scale: { y: { type: 'sqrt' }, x: { padding: 0 } },
    coordinate: { type: 'polar', outerRadius: 0.85 },
    animate: { enter: { type: 'waveIn' } },
    axis: false,
    legend: { color: { length: 400, layout: { justifyContent: 'center' } } },
    labels: [
      {
        text: 'people',
        position: 'outside',
        formatter: '~s',
        transform: [{ type: 'overlapDodgeY' }]
      }
    ],
    tooltip: { items: [{ channel: 'y', valueFormatter: '~s' }] }
  });
  chart.render();
});
</script>

<template>
  <div class="border border-gray-200 rounded overflow-x-hidden">
    <div class="leading-10 pl-4">接口管理</div>
    <div class="bg-red-50" id="api-management"></div>
  </div>
</template>
