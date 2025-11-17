<template>
  <div :class="tabsClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch, computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  modelValue?: string
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const tabsClass = computed(() => {
  return cn('flex flex-col gap-2', props.class)
})

const activeTab = ref(props.modelValue || '')

watch(() => props.modelValue, (newVal) => {
  activeTab.value = newVal || ''
})

const setActiveTab = (value: string) => {
  activeTab.value = value
  emit('update:modelValue', value)
}

provide('activeTab', { value: activeTab, setActiveTab })
</script>

