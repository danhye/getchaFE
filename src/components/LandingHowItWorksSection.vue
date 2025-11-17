<template>
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          이용방법
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          간단한 4단계로 경매를 시작하세요
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative"
          >
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-6">
                <div class="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                  <component :is="step.icon" :size="40" class="text-accent-foreground" />
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {{ index + 1 }}
                </div>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
              <p class="text-muted-foreground leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UserPlus, Upload, Gavel, Trophy } from 'lucide-vue-next'

const steps = [
  {
    icon: UserPlus,
    title: '회원가입',
    description: '이메일 인증과 관심 애니메이션을 등록하고 100,000 골드를 받으세요',
  },
  {
    icon: Upload,
    title: '굿즈 등록',
    description: '판매할 굿즈를 등록하고 시작가, 경매 기간을 설정하세요',
  },
  {
    icon: Gavel,
    title: '입찰 참여',
    description: '원하는 굿즈에 입찰하고 실시간으로 경매에 참여하세요',
  },
  {
    icon: Trophy,
    title: '낙찰 완료',
    description: '낙찰되면 자동으로 거래가 완료되고 판매자와 연락하세요',
  },
]
</script>

