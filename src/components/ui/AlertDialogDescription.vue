<template>
  <p :class="descriptionClass" v-bind="$attrs">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const descriptionClass = computed(() => {
  return cn('text-muted-foreground text-sm', props.class)
})
</script>

