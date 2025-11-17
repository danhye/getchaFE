<template>
  <section class="py-24 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-balance">
        카테고리별 굿즈 둘러보기
      </h2>
      <p class="text-center text-muted-foreground mb-16 text-lg">
        원하는 카테고리를 선택해서 경매에 참여하세요
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <router-link
          v-for="category in categories"
          :key="category.name"
          :to="category.href"
          class="group relative overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-300"
        >
          <img
            :src="category.image || '/placeholder.svg'"
            :alt="category.name"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-1">{{ category.name }}</h3>
            <p class="text-sm text-white/80">{{ category.count }}개 경매</p>
          </div>
          <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    name: '피규어',
    image: '/categories/figure.jpg',
    count: 1250,
    href: '/goods?category=figure',
  },
  {
    name: '포토카드',
    image: '/categories/photocard.jpg',
    count: 2100,
    href: '/goods?category=photocard',
  },
  {
    name: '아크릴 스탠드',
    image: '/categories/acrylic-stand.jpg',
    count: 890,
    href: '/goods?category=acrylic',
  },
  {
    name: '키링',
    image: '/categories/keyring.jpg',
    count: 1560,
    href: '/goods?category=keyring',
  },
  {
    name: '인형',
    image: '/categories/plush.jpg',
    count: 670,
    href: '/goods?category=plush',
  },
  {
    name: '포스터',
    image: '/categories/poster.jpg',
    count: 430,
    href: '/goods?category=poster',
  },
  {
    name: '그 외 굿즈',
    image: '/categories/other.jpg',
    count: 980,
    href: '/goods?category=other',
  },
  {
    name: '전체보기',
    image: '/categories/all.jpg',
    count: 7880,
    href: '/goods',
  },
]
</script>

