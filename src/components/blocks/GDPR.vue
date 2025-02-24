<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="container max-w-5xl mx-auto m-8">
    <Headline2 :title="title" />

  </div>
</template>

<style scoped>

</style>