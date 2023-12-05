<script lang="ts" setup>
import { reactive, ref } from 'vue';

const model = ref('');
const options = reactive(['主机1', '主机2', '主机3']);
</script>

<template>
  <div class="border border-gray-200 rounded">
    <div class="leading-10 pl-4 flex justify-between">
      <span>运行监控</span>
      <q-select v-model="model" :options="options" label="主机" class="w-32 rounded-bl overflow-hidden" dense filled options-dense square />
    </div>
  </div>
</template>
