<template>
  <div :class="fallbackClass" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const fallbackClass = computed(() => {
  return cn(
    'bg-muted flex size-full items-center justify-center rounded-full',
    props.class
  )
})
</script>

