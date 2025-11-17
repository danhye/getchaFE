<template>
  <div class="min-h-screen">
    <Header />
    <LandingHeroSection />
    <LandingFeaturesSection />
    <LandingHowItWorksSection />
    <LandingCtaSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LandingHeroSection from '@/components/LandingHeroSection.vue'
import LandingFeaturesSection from '@/components/LandingFeaturesSection.vue'
import LandingHowItWorksSection from '@/components/LandingHowItWorksSection.vue'
import LandingCtaSection from '@/components/LandingCtaSection.vue'
</script>
