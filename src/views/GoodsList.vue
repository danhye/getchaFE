<template>
  <div class="min-h-screen py-24 px-4">
    <Header />
    <div class="max-w-7xl mx-auto pt-16">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold">굿즈 경매</h1>
        <router-link to="/goods/register">
          <Button size="lg" class="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus :size="20" />
            굿즈 등록
          </Button>
        </router-link>
      </div>

      <div class="bg-card rounded-2xl p-6 mb-8 border">
        <div class="flex items-center gap-2 mb-4">
          <SlidersHorizontal :size="20" class="text-muted-foreground" />
          <h2 class="font-semibold">필터</h2>
        </div>
        
        <div class="space-y-4">
          <div class="relative">
            <Search :size="20" class="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              v-model="searchQuery"
              placeholder="애니메이션명, 캐릭터명, 굿즈 종류로 검색하세요..."
              class="pl-12 h-12 text-base"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Select v-model="statusFilter">
              <SelectItem value="all">전체 상태</SelectItem>
              <SelectItem value="진행중">진행중</SelectItem>
              <SelectItem value="완료">완료</SelectItem>
            </Select>

            <Select v-model="categoryFilter">
              <SelectItem value="all">전체 카테고리</SelectItem>
              <SelectItem value="피규어">피규어</SelectItem>
              <SelectItem value="포토카드">포토카드</SelectItem>
              <SelectItem value="아크릴 스탠드">아크릴 스탠드</SelectItem>
              <SelectItem value="키링">키링</SelectItem>
              <SelectItem value="인형">인형</SelectItem>
              <SelectItem value="포스터">포스터</SelectItem>
              <SelectItem value="기타">그 외 굿즈</SelectItem>
            </Select>

            <Select v-model="sortBy">
              <SelectItem value="recent">최신순</SelectItem>
              <SelectItem value="ending">마감 임박순</SelectItem>
              <SelectItem value="price-low">낮은 가격순</SelectItem>
              <SelectItem value="price-high">높은 가격순</SelectItem>
              <SelectItem value="popular">인기순</SelectItem>
            </Select>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <p class="text-muted-foreground">총 {{ mockGoods.length }}개의 경매</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GoodsCard
          v-for="goods in mockGoods"
          :key="goods.id"
          :goods="goods"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Plus, SlidersHorizontal } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoodsCard from '@/components/GoodsCard.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import SelectItem from '@/components/ui/SelectItem.vue'

const searchQuery = ref('')
const statusFilter = ref('all')
const categoryFilter = ref('all')
const sortBy = ref('recent')

const mockGoods = [
  {
    id: '1',
    title: '원피스 루피 피규어 한정판',
    seller: '애니덕후123',
    currentBid: 85000,
    timeRemaining: '2시간 30분',
    likes: 45,
    image: '/goods/figure-1.jpg',
    status: '진행중' as const,
    category: '피규어',
  },
  {
    id: '2',
    title: '나루토 사스케 포토카드 세트',
    seller: '굿즈러버',
    currentBid: 32000,
    timeRemaining: '5시간 15분',
    likes: 23,
    image: '/goods/photocard-1.jpg',
    status: '진행중' as const,
    category: '포토카드',
  },
  {
    id: '3',
    title: '귀멸의 칼날 탄지로 아크릴 스탠드',
    seller: '칼날덕후',
    currentBid: 15000,
    timeRemaining: '1일 3시간',
    likes: 67,
    image: '/goods/acrylic-1.jpg',
    status: '진행중' as const,
    category: '아크릴 스탠드',
  },
  {
    id: '4',
    title: '진격의 거인 에렌 키링',
    seller: '거인팬',
    currentBid: 8000,
    timeRemaining: '완료',
    likes: 12,
    image: '/goods/keyring-1.jpg',
    status: '완료' as const,
    category: '키링',
  },
]
</script>

