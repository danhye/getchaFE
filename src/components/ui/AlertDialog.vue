<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="handleOverlayClick"
    >
      <div class="fixed inset-0 bg-black/50" />
      <div
        :class="contentClass"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  open: boolean
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const contentClass = computed(() => {
  return cn(
    'bg-background relative z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg',
    props.class
  )
})

const handleOverlayClick = () => {
  emit('update:open', false)
}
</script>

