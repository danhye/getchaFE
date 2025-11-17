<template>
  <router-link
    :to="`/goods/${goods.id}`"
    class="group bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300"
  >
    <div class="relative aspect-square overflow-hidden">
      <img
        :src="goods.image || '/placeholder.svg'"
        :alt="goods.title"
        :class="[
          'object-cover w-full h-full group-hover:scale-105 transition-transform duration-300',
          isCompleted ? 'grayscale opacity-60' : ''
        ]"
      />
      
      <div
        v-if="isCompleted"
        class="absolute inset-0 flex items-center justify-center bg-black/50"
      >
        <div class="bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-lg">
          경매 종료
        </div>
      </div>

      <div class="absolute top-3 left-3">
        <Badge
          :variant="goods.status === '진행중' ? 'default' : 'secondary'"
          :class="
            goods.status === '진행중'
              ? 'bg-accent text-accent-foreground'
              : 'bg-gray-500'
          "
        >
          {{ goods.status }}
        </Badge>
      </div>
      <div class="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 flex items-center gap-1">
        <Heart :size="16" class="text-accent" />
        <span class="text-sm font-medium">{{ goods.likes }}</span>
      </div>
    </div>

    <div class="p-4">
      <h3 class="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
        {{ goods.title }}
      </h3>
      <p class="text-sm text-muted-foreground mb-3">{{ goods.seller }}</p>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-muted-foreground">현재 입찰가</p>
          <p class="text-lg font-bold text-accent">
            {{ goods.currentBid.toLocaleString() }}G
          </p>
        </div>
        <div class="text-right">
          <div
            :class="[
              'flex items-center gap-1 px-3 py-1 rounded-full',
              isCompleted
                ? 'bg-gray-200 text-gray-600'
                : 'bg-accent/10 text-accent'
            ]"
          >
            <Clock :size="20" />
            <span class="font-bold text-sm">{{ goods.timeRemaining }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Heart, Clock } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'

interface Goods {
  id: string
  title: string
  seller: string
  currentBid: number
  timeRemaining: string
  likes: number
  image: string
  status: '진행중' | '완료'
  category: string
}

interface Props {
  goods: Goods
}

const props = defineProps<Props>()

const isCompleted = computed(() => props.goods.status === '완료')
</script>

