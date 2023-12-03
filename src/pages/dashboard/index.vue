<script lang="ts" setup>
import { reactive } from 'vue';

defineOptions({ name: 'app-dashboard' });

const entirety = reactive([
  [
    { label: '项目空间总数：', value: 1, unit: '个' },
    { label: '空间总体积：', value: 4, unit: 'km³' }
  ],
  [
    { label: '设备数量：', value: 341, unit: '个' },
    { label: '网关数量：', value: 12, unit: '个' }
  ],
  [{ value: 6, unit: '个' }, { label: '管理器注册用户数量' }],
  [{ value: 103, unit: '个' }, { label: '服务接口数量' }],
  [{ value: 1473, unit: '次' }, { label: '被调用次数' }]
]);
</script>

<template>
  <div class="p-4">
    <div class="flex space-x-4">
      <div v-for="(entire, index) in entirety" :key="index" class="flex-1 border border-gray-300 rounded p-4 space-y-1 flex flex-col bg">
        <div v-for="(e, i) in entire" :key="i" class="flex">
          <span>{{ e.label || '' }}</span>
          <span>{{ e.value && e.value !== 0 ? e.value : '' }}</span>
          <span>{{ e.unit || '' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url(@/assets/v5g021_white_9f0e68d.png) no-repeat right bottom / 80% auto;
}
</style>
