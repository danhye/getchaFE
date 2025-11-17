<template>
  <label
    :class="labelClass"
    :for="htmlFor"
    v-bind="$attrs"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  htmlFor?: string
  class?: string
}

const props = defineProps<Props>()

const labelClass = computed(() => {
  return cn(
    'flex items-center gap-2 text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
    props.class
  )
})
</script>

