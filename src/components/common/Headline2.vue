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
</template>

<style scoped>
</style>