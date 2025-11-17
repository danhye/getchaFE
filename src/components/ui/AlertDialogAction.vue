<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import Button from './Button.vue'

const props = defineProps<{ class?: string }>()
const emit = defineEmits<(e: 'click') => void>()

const actionClass = computed(() =>
  cn("base-button-class", props.class)
)

const handleClick = () => emit('click')
</script>

<template>
  <Button
    :class="actionClass"
    v-bind="{ ...$attrs }"
    @click="handleClick"
  >
    <slot />
  </Button>
</template>
