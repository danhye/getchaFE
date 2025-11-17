<template>
  <header class="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur-lg">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <router-link to="/" class="flex items-center gap-2">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
            <Sparkles :size="20" class="text-accent-foreground" />
          </div>
          <span class="text-2xl font-bold">Getcha</span>
        </router-link>

        <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <router-link
            to="/goods"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            경매
          </router-link>
          <router-link
            to="/landing#features"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            기능
          </router-link>
          <router-link
            to="/landing#how-it-works"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            이용방법
          </router-link>
        </nav>

        <div class="flex items-center gap-3">
          <Button variant="ghost" size="icon" class="hidden sm:inline-flex">
            <Bell :size="20" />
            <span class="sr-only">알림</span>
          </Button>
          <Button variant="ghost" size="icon" class="hidden sm:inline-flex">
            <Heart :size="20" />
            <span class="sr-only">찜</span>
          </Button>
          <router-link to="/login">
            <Button variant="ghost" size="sm" class="hidden sm:inline-flex">
              <User :size="16" class="mr-2" />
              로그인
            </Button>
          </router-link>
          <router-link to="/register">
            <Button size="sm" class="bg-accent text-accent-foreground hover:bg-accent/90">
              회원가입
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Sparkles, Bell, Heart, User } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

