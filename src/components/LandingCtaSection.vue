<template>
  <section class="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
          <Sparkles :size="16" class="text-accent" />
          <span class="text-sm font-medium">지금 시작하세요</span>
        </div>

        <h2 class="text-4xl md:text-6xl font-bold mb-6 text-balance">
          지금 바로 시작하세요!
        </h2>
        
        <p class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          회원가입하고 <span class="font-bold text-accent">100,000 골드</span>를 무료로 받아보세요
          <br />
          좋아하는 굿즈를 경매로 만날 기회입니다
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/register">
            <Button size="lg" class="text-lg px-10 py-6 bg-accent text-accent-foreground hover:bg-accent/90">
              10만 골드 받기!
              <ArrowRight :size="20" class="ml-2" />
            </Button>
          </router-link>
        </div>

        <p class="mt-8 text-sm text-muted-foreground">
          신용카드 필요 없음 · 언제든지 시작 가능
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, ArrowRight } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

