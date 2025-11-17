<template>
  <div class="min-h-screen">
    <Header />
    <div class="py-24 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">굿즈 수정</h1>
        <div class="bg-card rounded-2xl p-8 border">
          <p class="text-muted-foreground">굿즈 수정 기능은 곧 제공될 예정입니다.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
</script>
