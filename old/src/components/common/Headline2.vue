<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <h2
      data-aos="fade-up"
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-foreground/80"
  >
    {{title}}
  </h2>
  <div data-aos="fade-up" class="w-full mb-4">
    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
  </div>
</template>

<style scoped>
</style>