<template>
  <div class="h-screen flex justify-center items-center">
    <h1>Lorem ipsum dolor sit amet.</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'app-layout' });
</script>
