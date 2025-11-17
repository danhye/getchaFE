<template>
  <section class="py-24 bg-muted/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          안전하고 즐거운 경매 경험
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Getcha는 덕후들을 위한 최고의 경매 플랫폼을 목표로 합니다
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-card rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6">
            <component :is="feature.icon" :size="28" class="text-accent" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
          <p class="text-muted-foreground leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Zap, Heart, TrendingUp, Bell, Wallet } from 'lucide-vue-next'

const features = [
  {
    icon: Zap,
    title: '실시간 경매',
    description: 'Redis 기반의 실시간 경매 시스템으로 즉각적인 입찰과 타이머를 제공합니다.',
  },
  {
    icon: Shield,
    title: '안전한 거래',
    description: '예치금 시스템으로 낙찰 후 결제 문제를 방지하고 안전한 거래를 보장합니다.',
  },
  {
    icon: TrendingUp,
    title: 'AI 추천',
    description: '관심 애니메이션 기반 개인화된 굿즈 추천으로 원하는 상품을 쉽게 찾을 수 있습니다.',
  },
  {
    icon: Heart,
    title: '위시리스트',
    description: '관심있는 굿즈를 저장하고 경매 시작 알림을 받아보세요.',
  },
  {
    icon: Bell,
    title: '실시간 알림',
    description: '입찰 갱신, 경매 마감 임박 등 중요한 순간을 놓치지 마세요.',
  },
  {
    icon: Wallet,
    title: '가상화폐 시스템',
    description: 'Getcha만의 골드 시스템으로 간편하고 안전한 결제를 경험하세요.',
  },
]
</script>

