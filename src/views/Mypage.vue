<template>
  <div class="min-h-screen">
    <Header />
    <div class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Profile Header -->
        <div class="bg-card rounded-2xl p-8 border mb-8">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-6">
              <Avatar class="h-24 w-24">
                <AvatarFallback class="text-2xl">
                  {{ userData.name[0] }}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 class="text-3xl font-bold mb-2">{{ userData.name }}</h1>
                <p class="text-muted-foreground">{{ userData.email }}</p>
              </div>
            </div>
            <Button variant="outline" class="gap-2">
              <Settings :size="16" />
              프로필 수정
            </Button>
          </div>

          <!-- Balance -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card class="p-6 bg-primary/5 border-primary/20">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <Wallet :size="20" class="text-primary" />
                  <span class="font-semibold">잔액</span>
                </div>
                <TrendingUp :size="20" class="text-green-500" />
              </div>
              <p class="text-3xl font-bold text-primary">
                {{ userData.balance.toLocaleString() }}G
              </p>
            </Card>

            <Card class="p-6 bg-orange-50 border-orange-200">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <Lock :size="20" class="text-orange-600" />
                  <span class="font-semibold text-orange-900">예치금</span>
                </div>
                <TrendingDown :size="20" class="text-orange-600" />
              </div>
              <p class="text-3xl font-bold text-orange-600">
                {{ userData.lockedBalance.toLocaleString() }}G
              </p>
              <p class="text-sm text-orange-700 mt-2">
                입찰 중인 금액
              </p>
            </Card>
          </div>
        </div>

        <!-- Tabs -->
        <Tabs v-model="activeTab">
          <TabsList class="mb-8">
            <TabsTrigger value="overview" class="gap-2">
              <Star :size="16" />
              개요
            </TabsTrigger>
            <TabsTrigger value="wishlist" class="gap-2">
              <Heart :size="16" />
              찜 목록
            </TabsTrigger>
            <TabsTrigger value="registered" class="gap-2">
              <List :size="16" />
              등록한 경매
            </TabsTrigger>
            <TabsTrigger value="participated" class="gap-2">
              <Gavel :size="16" />
              참여한 경매
            </TabsTrigger>
            <TabsTrigger value="transactions" class="gap-2">
              <Wallet :size="16" />
              거래 내역
            </TabsTrigger>
            <TabsTrigger value="settings" class="gap-2">
              <Settings :size="16" />
              설정
            </TabsTrigger>
          </TabsList>

          <!-- Overview -->
          <TabsContent value="overview" class="space-y-8">
            <Card class="p-8">
              <h2 class="text-2xl font-bold mb-6">관심 애니메이션</h2>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="anime in userData.favoriteAnimes"
                  :key="anime"
                  class="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold"
                >
                  {{ anime }}
                </div>
              </div>
            </Card>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card class="p-6 text-center">
                <Heart :size="32" class="mx-auto mb-3 text-primary" />
                <p class="text-3xl font-bold mb-2">{{ mockWishlist.length }}</p>
                <p class="text-muted-foreground">찜한 굿즈</p>
              </Card>
              <Card class="p-6 text-center">
                <List :size="32" class="mx-auto mb-3 text-primary" />
                <p class="text-3xl font-bold mb-2">{{ mockRegistered.length }}</p>
                <p class="text-muted-foreground">등록한 경매</p>
              </Card>
              <Card class="p-6 text-center">
                <Gavel :size="32" class="mx-auto mb-3 text-primary" />
                <p class="text-3xl font-bold mb-2">{{ mockParticipated.length }}</p>
                <p class="text-muted-foreground">참여한 경매</p>
              </Card>
            </div>
          </TabsContent>

          <!-- Wishlist -->
          <TabsContent value="wishlist">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GoodsCard
                v-for="goods in mockWishlist"
                :key="goods.id"
                :goods="goods"
              />
            </div>
          </TabsContent>

          <!-- Registered -->
          <TabsContent value="registered">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GoodsCard
                v-for="goods in mockRegistered"
                :key="goods.id"
                :goods="goods"
              />
            </div>
          </TabsContent>

          <!-- Participated -->
          <TabsContent value="participated">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GoodsCard
                v-for="goods in mockParticipated"
                :key="goods.id"
                :goods="goods"
              />
            </div>
          </TabsContent>

          <!-- Transactions -->
          <TabsContent value="transactions">
            <Card class="p-8">
              <h2 class="text-2xl font-bold mb-6">거래 내역</h2>
              <div class="space-y-4">
                <div
                  v-for="transaction in mockTransactions"
                  :key="transaction.id"
                  class="flex items-center justify-between p-4 bg-background rounded-lg border"
                >
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-1">
                      <span
                        :class="[
                          'px-3 py-1 rounded-full text-sm font-semibold',
                          transaction.type === '입찰'
                            ? 'bg-blue-100 text-blue-700'
                            : transaction.type === '낙찰'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        ]"
                      >
                        {{ transaction.type }}
                      </span>
                      <span class="text-sm text-muted-foreground">
                        {{ transaction.status }}
                      </span>
                    </div>
                    <p class="font-medium">{{ transaction.description }}</p>
                    <p class="text-sm text-muted-foreground">
                      {{ transaction.date }}
                    </p>
                  </div>
                  <div class="text-right">
                    <p
                      :class="[
                        'text-xl font-bold',
                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                      ]"
                    >
                      {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount.toLocaleString() }}G
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <!-- Settings -->
          <TabsContent value="settings">
            <Card class="p-8">
              <h2 class="text-2xl font-bold mb-6">정보 수정</h2>
              <form class="space-y-6">
                <div class="space-y-2">
                  <Label html-for="nickname">닉네임</Label>
                  <Input
                    id="nickname"
                    :default-value="userData.name"
                    placeholder="닉네임을 입력하세요"
                  />
                </div>

                <div class="space-y-2">
                  <Label>관심 애니메이션 (최대 3개)</Label>
                  <div class="space-y-2">
                    <Input
                      v-for="(anime, index) in userData.favoriteAnimes"
                      :key="index"
                      :default-value="anime"
                      :placeholder="`애니메이션 ${index + 1}`"
                    />
                  </div>
                </div>

                <div class="flex gap-4 pt-4">
                  <Button type="submit" size="lg">
                    저장하기
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    size="lg"
                  >
                    회원 탈퇴
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Wallet, Heart, Gavel, List, Settings, Star, TrendingUp, TrendingDown, Lock } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoodsCard from '@/components/GoodsCard.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Avatar from '@/components/ui/Avatar.vue'
import AvatarFallback from '@/components/ui/AvatarFallback.vue'
import Tabs from '@/components/ui/Tabs.vue'
import TabsList from '@/components/ui/TabsList.vue'
import TabsTrigger from '@/components/ui/TabsTrigger.vue'
import TabsContent from '@/components/ui/TabsContent.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'

const activeTab = ref('overview')

const userData = {
  name: '애니덕후123',
  email: 'user@example.com',
  balance: 245000,
  lockedBalance: 85000,
  favoriteAnimes: ['원피스', '나루토', '귀멸의 칼날'],
}

const mockWishlist = [
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
]

const mockRegistered = [
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
]

const mockParticipated = [
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
]

const mockTransactions = [
  {
    id: '1',
    type: '입찰' as const,
    amount: -85000,
    description: '원피스 루피 피규어 한정판 입찰',
    date: '2025-01-16 14:30',
    status: '예치중',
  },
  {
    id: '2',
    type: '낙찰' as const,
    amount: -50000,
    description: '나루토 카카시 피규어 낙찰',
    date: '2025-01-15 18:20',
    status: '완료',
  },
  {
    id: '3',
    type: '예치금 환원' as const,
    amount: 70000,
    description: '진격의 거인 에렌 키링 입찰 취소',
    date: '2025-01-14 10:15',
    status: '완료',
  },
]
</script>
