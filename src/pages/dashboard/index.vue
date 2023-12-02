<script lang="ts" setup>
defineOptions({ name: 'app-dashboard' });
</script>

<template>
  <div class="p-4">
    <div class="flex space-x-4">
      <div class="flex-1 border border-gray-300 rounded flex flex-col bg">
        <span>项目空间总数：1个</span>
        <span>空间总体积：4.9km³</span>
      </div>
      <div class="flex-1 border border-gray-300 rounded flex flex-col bg">
        <span>设备数量：341个</span>
        <span>网关数量：12个</span>
      </div>
      <div class="flex-1 border border-gray-300 rounded flex flex-col bg">3</div>
      <div class="flex-1 border border-gray-300 rounded flex flex-col bg">4</div>
      <div class="flex-1 border border-gray-300 rounded flex flex-col bg">5</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url(@/assets/v5g021_white_9f0e68d.png) no-repeat right bottom;
}
</style>
