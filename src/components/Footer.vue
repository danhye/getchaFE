<template>
  <footer class="border-t border-border/40 py-12 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-2 md:col-span-1">
          <router-link to="/" class="flex items-center gap-2 mb-4">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
              <Sparkles :size="20" class="text-accent-foreground" />
            </div>
            <span class="text-2xl font-bold">Getcha</span>
          </router-link>
          <p class="text-sm text-muted-foreground leading-relaxed mb-4">
            애니메이션 굿즈 경매 플랫폼
            <br />
            품절된 굿즈도 경매로 겟!
          </p>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone :size="16" />
            <span>문의: 02-1234-5678</span>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-4">서비스</h3>
          <ul class="space-y-3">
            <li>
              <router-link
                to="#auctions"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                경매 둘러보기
              </router-link>
            </li>
            <li>
              <router-link
                to="#features"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                기능 소개
              </router-link>
            </li>
            <li>
              <router-link
                to="#pricing"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                요금제
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                이용 가이드
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">회사</h3>
          <ul class="space-y-3">
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                회사 소개
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                공지사항
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                채용
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                제휴 문의
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">법적 고지</h3>
          <ul class="space-y-3">
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                이용약관
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                개인정보처리방침
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                위치기반서비스
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                청소년 보호정책
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 gap-4">
        <p class="text-sm text-muted-foreground">
          © 2025 Getcha. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <router-link
            to="#"
            class="text-muted-foreground hover:text-accent transition-colors"
          >
            <Twitter :size="20" />
            <span class="sr-only">Twitter</span>
          </router-link>
          <router-link
            to="#"
            class="text-muted-foreground hover:text-accent transition-colors"
          >
            <Instagram :size="20" />
            <span class="sr-only">Instagram</span>
          </router-link>
          <router-link
            to="#"
            class="text-muted-foreground hover:text-accent transition-colors"
          >
            <Facebook :size="20" />
            <span class="sr-only">Facebook</span>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Sparkles, Twitter, Instagram, Facebook, Phone } from 'lucide-vue-next'
</script>

