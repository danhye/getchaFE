<template>
  <main class="min-h-screen">
    <Header />
    <div class="pt-16">
      <TrendingSection />
      <CategorySection />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TrendingSection from '@/components/TrendingSection.vue'
import CategorySection from '@/components/CategorySection.vue'
</script>

