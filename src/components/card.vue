<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100'
  }
})
</script>

<template>
  <div :class="`p-6 rounded-lg shadow-md ${props.bg}`">
    <slot />
  </div>
</template>