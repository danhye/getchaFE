<template>
  <button
    :class="triggerClass"
    :aria-selected="isActive"
    role="tab"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </button>
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

const triggerClass = computed(() => {
  return cn(
    'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50',
    isActive.value
      ? 'bg-background text-foreground shadow-sm'
      : 'text-foreground',
    props.class
  )
})

const handleClick = () => {
  tabsContext.setActiveTab(props.value)
}
</script>

