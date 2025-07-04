<template>
  <div :data-aos="`fade-${props.vdir}-${props.hdir}`" :class="props.class"><slot /></div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    optional: true
  },
  vdir: {
    type: String,
    default: 'up'
  },
  hdir: {
    type: String,
    default: 'left'
  }
})
</script>

<style scoped>

</style>