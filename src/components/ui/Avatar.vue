<template>
  <div :class="avatarClass" v-bind="$attrs">
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

const avatarClass = computed(() => {
  return cn(
    'relative flex size-8 shrink-0 overflow-hidden rounded-full',
    props.class
  )
})
</script>

