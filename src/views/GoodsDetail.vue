<template>
  <div class="min-h-screen">
    <Header />
    <div class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <!-- Images -->
          <div class="space-y-4">
            <div class="relative aspect-square rounded-2xl overflow-hidden bg-card border">
              <img
                :src="mockGoods.images[selectedImage] || '/placeholder.svg'"
                :alt="mockGoods.title"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <button
                v-for="(image, index) in mockGoods.images"
                :key="index"
                @click="selectedImage = index"
                :class="[
                  'relative aspect-square rounded-lg overflow-hidden border-2 transition-all',
                  selectedImage === index
                    ? 'border-primary'
                    : 'border-transparent hover:border-gray-300'
                ]"
              >
                <img
                  :src="image || '/placeholder.svg'"
                  :alt="`Thumbnail ${index + 1}`"
                  class="object-cover w-full h-full"
                />
              </button>
            </div>
          </div>

          <!-- Details -->
          <div class="space-y-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <Badge
                  :variant="mockGoods.status === '진행중' ? 'default' : 'secondary'"
                  class="mb-3"
                >
                  {{ mockGoods.status }}
                </Badge>
                <h1 class="text-3xl font-bold mb-4 text-balance">
                  {{ mockGoods.title }}
                </h1>
                <div class="flex items-center gap-4 text-muted-foreground mb-4">
                  <div class="flex items-center gap-2">
                    <User :size="16" />
                    <span>{{ mockGoods.seller }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Heart :size="16" />
                    <span>{{ mockGoods.likes }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-card rounded-2xl p-6 border space-y-4">
              <div class="flex items-center justify-between pb-4 border-b">
                <div>
                  <p class="text-sm text-muted-foreground mb-1">현재 입찰가</p>
                  <p class="text-3xl font-bold text-primary">
                    {{ mockGoods.currentBid.toLocaleString() }}G
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-muted-foreground mb-1">남은 시간</p>
                  <div class="flex items-center gap-2 text-xl font-bold">
                    <Clock :size="20" class="text-primary" />
                    {{ mockGoods.timeRemaining }}
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p class="text-muted-foreground">시작가</p>
                  <p class="font-semibold">
                    {{ mockGoods.startPrice.toLocaleString() }}G
                  </p>
                </div>
                <div>
                  <p class="text-muted-foreground">즉시구매가</p>
                  <p class="font-semibold">
                    {{ mockGoods.maxPrice.toLocaleString() }}G
                  </p>
                </div>
              </div>
            </div>

            <!-- Bid Input -->
            <div v-if="!mockGoods.isOwner && mockGoods.status === '진행중'" class="space-y-4">
              <div class="flex gap-2">
                <Input
                  type="number"
                  :placeholder="`${(mockGoods.currentBid + 1000).toLocaleString()}G 이상`"
                  v-model="bidAmount"
                  class="flex-1 h-12 text-lg"
                />
                <Button
                  size="lg"
                  class="gap-2 px-8 bg-accent text-accent-foreground hover:bg-accent/90"
                  @click="handleBidClick"
                >
                  <Gavel :size="20" />
                  입찰하기
                </Button>
              </div>
              <div class="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p class="text-sm text-destructive font-medium">
                  ⚠️ 입찰 후에는 취소할 수 없습니다. 신중하게 입찰해주세요.
                </p>
              </div>
            </div>

            <div class="flex gap-2">
              <Button variant="outline" class="flex-1 gap-2">
                <Heart :size="16" />
                찜하기
              </Button>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="bg-card rounded-2xl p-8 border mb-8">
          <h2 class="text-2xl font-bold mb-6">상품 설명</h2>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="text-muted-foreground">애니메이션:</span>
                <span class="font-semibold ml-2">{{ mockGoods.anime }}</span>
              </div>
              <div>
                <span class="text-muted-foreground">캐릭터:</span>
                <span class="font-semibold ml-2">{{ mockGoods.character }}</span>
              </div>
              <div>
                <span class="text-muted-foreground">카테고리:</span>
                <span class="font-semibold ml-2">{{ mockGoods.category }}</span>
              </div>
            </div>
            <p class="text-muted-foreground leading-relaxed">
              {{ mockGoods.description }}
            </p>
          </div>
        </div>

        <!-- Participants -->
        <div class="bg-card rounded-2xl p-8 border mb-8">
          <h2 class="text-2xl font-bold mb-6">
            경매 참여자 ({{ mockGoods.participants.length }})
          </h2>
          <div class="space-y-4">
            <div
              v-for="(participant, index) in mockGoods.participants"
              :key="index"
              class="flex items-center justify-between p-4 bg-background rounded-lg"
            >
              <div class="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{{ participant.name[0] }}</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-semibold">{{ participant.name }}</p>
                  <p class="text-sm text-muted-foreground">
                    {{ participant.time }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg font-bold text-primary">
                  {{ participant.bid.toLocaleString() }}G
                </p>
                <Badge v-if="index === 0" variant="default" class="mt-1">
                  최고입찰
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments -->
        <div class="bg-card rounded-2xl p-8 border mb-8">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageCircle :size="24" />
            댓글 ({{ mockComments.length }})
          </h2>
          
          <!-- Comment input -->
          <div class="mb-8 space-y-3">
            <Textarea
              placeholder="댓글을 입력하세요..."
              v-model="comment"
              class="min-h-[100px]"
            />
            <div class="flex justify-end">
              <Button
                @click="handleCommentSubmit"
                class="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                댓글 작성
              </Button>
            </div>
          </div>

          <!-- Comments list -->
          <div class="space-y-6">
            <div v-for="commentItem in mockComments" :key="commentItem.id" class="space-y-4">
              <!-- Main comment -->
              <div class="flex gap-4">
                <Avatar>
                  <AvatarFallback>{{ commentItem.author[0] }}</AvatarFallback>
                </Avatar>
                <div class="flex-1">
                  <div class="bg-muted/50 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-2">
                      <p class="font-semibold">{{ commentItem.author }}</p>
                      <p class="text-xs text-muted-foreground">{{ commentItem.time }}</p>
                    </div>
                    <p class="text-sm leading-relaxed">{{ commentItem.content }}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    class="mt-2 gap-1"
                    @click="replyTo = replyTo === commentItem.id ? null : commentItem.id"
                  >
                    <Reply :size="12" />
                    답글
                  </Button>
                </div>
              </div>

              <!-- Replies -->
              <div v-if="commentItem.replies.length > 0" class="ml-12 space-y-4">
                <div v-for="reply in commentItem.replies" :key="reply.id" class="flex gap-4">
                  <Avatar class="h-8 w-8">
                    <AvatarFallback class="text-xs">{{ reply.author[0] }}</AvatarFallback>
                  </Avatar>
                  <div class="flex-1">
                    <div class="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <div class="flex items-center justify-between mb-2">
                        <p class="font-semibold text-sm">{{ reply.author }}</p>
                        <p class="text-xs text-muted-foreground">{{ reply.time }}</p>
                      </div>
                      <p class="text-sm leading-relaxed">{{ reply.content }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Reply input -->
              <div v-if="replyTo === commentItem.id" class="ml-12 space-y-3">
                <Textarea
                  placeholder="답글을 입력하세요..."
                  v-model="replyContent"
                  class="min-h-[80px]"
                />
                <div class="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    @click="replyTo = null"
                  >
                    취소
                  </Button>
                  <Button
                    size="sm"
                    @click="handleReplySubmit(commentItem.id)"
                    class="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    답글 작성
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Report Button -->
        <div class="mt-8 text-center">
          <Button variant="ghost" size="sm" class="gap-2 text-muted-foreground">
            <Flag :size="16" />
            신고하기
          </Button>
        </div>
      </div>
    </div>
    <Footer />

    <!-- Bid Alert Dialog -->
    <Teleport to="body">
      <div
        v-if="showBidAlert"
        class="fixed inset-0 z-50 flex items-center justify-center"
        @click.self="showBidAlert = false"
      >
        <div class="fixed inset-0 bg-black/50" />
        <div class="bg-background relative z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>입찰 확인</AlertDialogTitle>
            <AlertDialogDescription class="space-y-2">
              <p class="font-semibold text-foreground">
                {{ (parseInt(bidAmount || '0') || 0).toLocaleString() }}G로 입찰하시겠습니까?
              </p>
              <p class="text-destructive font-medium">
                ⚠️ 입찰 후에는 취소할 수 없습니다.
              </p>
              <p>
                입찰하신 금액은 예치금으로 즉시 Lock되며, 다른 입찰자가 더 높은 가격을 제시하거나 경매가 종료될 때까지 출금하실 수 없습니다.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel @click="showBidAlert = false">취소</AlertDialogCancel>
            <AlertDialogAction
              @click="confirmBid"
              class="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              확인 및 입찰
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </div>
    </Teleport>

    <!-- Low Bid Alert Dialog -->
    <Teleport to="body">
      <div
        v-if="showLowBidAlert"
        class="fixed inset-0 z-50 flex items-center justify-center"
        @click.self="showLowBidAlert = false"
      >
        <div class="fixed inset-0 bg-black/50" />
        <div class="bg-background relative z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>입찰 불가</AlertDialogTitle>
            <AlertDialogDescription>
              <p class="text-foreground font-medium mb-2">
                현재 최고 입찰가보다 높은 금액을 입력해주세요.
              </p>
              <p>
                현재 최고 입찰가: <span class="font-bold text-accent">{{ mockGoods.currentBid.toLocaleString() }}G</span>
              </p>
              <p>
                입력하신 금액: <span class="font-bold">{{ (parseInt(bidAmount || '0') || 0).toLocaleString() }}G</span>
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction @click="showLowBidAlert = false">확인</AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Heart, Clock, User, Gavel, MessageCircle, Reply, Flag } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Avatar from '@/components/ui/Avatar.vue'
import AvatarFallback from '@/components/ui/AvatarFallback.vue'
import AlertDialogHeader from '@/components/ui/AlertDialogHeader.vue'
import AlertDialogTitle from '@/components/ui/AlertDialogTitle.vue'
import AlertDialogDescription from '@/components/ui/AlertDialogDescription.vue'
import AlertDialogFooter from '@/components/ui/AlertDialogFooter.vue'
import AlertDialogAction from '@/components/ui/AlertDialogAction.vue'
import AlertDialogCancel from '@/components/ui/AlertDialogCancel.vue'

const route = useRoute()
const selectedImage = ref(0)
const bidAmount = ref('')
const showBidAlert = ref(false)
const showLowBidAlert = ref(false)
const comment = ref('')
const replyTo = ref<string | null>(null)
const replyContent = ref('')

const mockGoods = {
  id: '1',
  title: '원피스 루피 피규어 한정판',
  seller: '애니덕후123',
  currentBid: 85000,
  startPrice: 50000,
  maxPrice: 150000,
  timeRemaining: '2시간 30분',
  likes: 45,
  images: [
    '/goods/figure-1.jpg',
    '/goods/figure-2.jpg',
    '/goods/figure-3.jpg',
  ],
  status: '진행중' as const,
  category: '피규어',
  anime: '원피스',
  character: '몽키 D. 루피',
  description: '원피스 루피 피규어 한정판입니다. 박스 미개봉 상태이며 상태 매우 좋습니다. 한정판으로 구하기 어려운 제품이니 관심있으신 분들은 입찰 부탁드립니다.',
  isOwner: false,
  participants: [
    { name: '굿즈러버', bid: 85000, time: '5분 전' },
    { name: '애니팬123', bid: 80000, time: '15분 전' },
    { name: '피규어덕후', bid: 75000, time: '1시간 전' },
  ],
}

const mockComments = [
  {
    id: '1',
    author: '애니팬123',
    content: '상태 정말 좋아보이네요! 박스 상태도 궁금합니다.',
    time: '10분 전',
    replies: [
      {
        id: '1-1',
        author: '애니덕후123',
        content: '박스도 미개봉 상태로 깨끗합니다!',
        time: '5분 전'
      }
    ]
  },
  {
    id: '2',
    author: '굿즈러버',
    content: '배송은 어떻게 진행되나요?',
    time: '30분 전',
    replies: []
  }
]

const handleBidClick = () => {
  const bidValue = parseInt(bidAmount.value) || 0
  
  if (isNaN(bidValue) || bidValue <= mockGoods.currentBid) {
    showLowBidAlert.value = true
    return
  }
  
  showBidAlert.value = true
}

const confirmBid = () => {
  console.log('Bid confirmed:', bidAmount.value)
  showBidAlert.value = false
  bidAmount.value = ''
  // TODO: Implement actual bidding logic
}

const handleCommentSubmit = () => {
  console.log('Comment submitted:', comment.value)
  comment.value = ''
  // TODO: Implement comment submission
}

const handleReplySubmit = (commentId: string) => {
  console.log('Reply submitted to comment:', commentId, replyContent.value)
  replyTo.value = null
  replyContent.value = ''
  // TODO: Implement reply submission
}
</script>
