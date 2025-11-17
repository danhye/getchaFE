<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import Button from './Button.vue'

const props = defineProps<{ class?: string }>()
const emit = defineEmits<(e: 'click') => void>()

const cancelClass = computed(() =>
  cn(props.class, 'your-default-class')
)

const handleClick = () => emit('click')
</script>

<template>
  <Button
    variant="outline"
    :class="cancelClass"
    v-bind="{ ...$attrs }"
    @click="handleClick"
  >
    <slot />
  </Button>
</template>
