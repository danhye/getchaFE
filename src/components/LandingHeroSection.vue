<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
    <div class="relative z-10 container mx-auto px-4 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
        <Sparkles :size="16" class="text-accent" />
        <span class="text-sm font-medium">애니메이션 굿즈 경매 플랫폼</span>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
        좋아하는 애니메이션 굿즈를
        <br />
        <span class="text-accent">경매로 만나보세요</span>
      </h1>

      <p class="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
        품절된 피규어부터 희귀 포토카드까지
        <br />
        실시간 경매로 원하는 굿즈를 안전하게 거래하세요
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/register">
          <Button size="lg" class="text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90">
            지금 시작하기
          </Button>
        </router-link>
      </div>

      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div>
          <div class="text-4xl font-bold text-accent mb-2">5,000+</div>
          <div class="text-sm text-muted-foreground">등록된 굿즈</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-accent mb-2">1,200+</div>
          <div class="text-sm text-muted-foreground">활성 사용자</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-accent mb-2">98%</div>
          <div class="text-sm text-muted-foreground">거래 성공률</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-accent mb-2">24시간</div>
          <div class="text-sm text-muted-foreground">실시간 지원</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

