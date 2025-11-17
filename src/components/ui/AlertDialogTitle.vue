<template>
  <h2 :class="titleClass" v-bind="$attrs">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const titleClass = computed(() => {
  return cn('text-lg font-semibold', props.class)
})
</script>

