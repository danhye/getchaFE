<template>
  <section id="auctions" class="py-20 px-4 bg-secondary/20">
    <div class="container mx-auto max-w-7xl">
      <div class="flex items-center justify-between mb-12">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <TrendingUp :size="24" class="text-accent" />
            <h2 class="text-3xl md:text-4xl font-bold">실시간 인기 경매</h2>
          </div>
          <p class="text-muted-foreground">지금 가장 핫한 애니메이션 굿즈를 만나보세요</p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GoodsCard
          v-for="(item, index) in trendingItems"
          :key="index"
          :goods="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TrendingUp } from 'lucide-vue-next'
import GoodsCard from '@/components/GoodsCard.vue'

const trendingItems = [
  {
    id: '1',
    title: '원피스 루피 DX 피규어',
    seller: '애니덕후123',
    currentBid: 125000,
    timeRemaining: '2시간 남음',
    likes: 234,
    image: '/one-piece-luffy-figure.jpg',
    status: '진행중' as const,
    category: '피규어',
  },
  {
    id: '2',
    title: '귀멸의 칼날 포토카드 세트',
    seller: '굿즈러버',
    currentBid: 48000,
    timeRemaining: '5시간 남음',
    likes: 189,
    image: '/demon-slayer-photocard.jpg',
    status: '진행중' as const,
    category: '포토카드',
  },
  {
    id: '3',
    title: '나루토 카카시 아크릴 스탠드',
    seller: '칼날덕후',
    currentBid: 32000,
    timeRemaining: '1시간 남음',
    likes: 156,
    image: '/naruto-kakashi-acrylic.jpg',
    status: '진행중' as const,
    category: '아크릴 스탠드',
  },
  {
    id: '4',
    title: '진격의 거인 리바이 병장 피규어',
    seller: '거인팬',
    currentBid: 198000,
    timeRemaining: '3시간 남음',
    likes: 312,
    image: '/attack-on-titan-levi-figure.jpg',
    status: '진행중' as const,
    category: '피규어',
  },
]
</script>

