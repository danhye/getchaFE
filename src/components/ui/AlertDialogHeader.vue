<template>
  <div :class="headerClass" v-bind="$attrs">
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

const headerClass = computed(() => {
  return cn('flex flex-col gap-2 text-center sm:text-left', props.class)
})
</script>

