<script setup lang="ts">
import Headline2 from "../common/Headline2.vue";

defineProps({
  title: String,
  id: String
})
</script>

<template>
  <section :id="id" class="bg-background border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <Headline2 :title="title"/>
    </div>
  </section>
</template>

<style scoped>

</style>