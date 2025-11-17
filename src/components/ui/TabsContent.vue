<template>
  <div
    v-if="isActive"
    :class="contentClass"
    role="tabpanel"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  value: string
  class?: string
}

const props = defineProps<Props>()

const tabsContext = inject<{ value: { value: string }, setActiveTab: (value: string) => void }>('activeTab', {
  value: { value: '' },
  setActiveTab: () => {}
})

const isActive = computed(() => tabsContext.value.value === props.value)

const contentClass = computed(() => {
  return cn('flex-1 outline-none', props.class)
})
</script>

