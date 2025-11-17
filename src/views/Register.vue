<template>
  <div class="min-h-screen">
    <Header />
    <section class="py-24 min-h-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
              <Sparkles :size="32" class="text-accent" />
            </div>
            <h1 class="text-3xl font-bold mb-2">Getcha에 오신 것을 환영합니다!</h1>
            <p class="text-muted-foreground">회원가입하고 100,000 골드를 받으세요</p>
            
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mt-4">
              <Gift :size="16" class="text-accent" />
              <span class="text-sm font-medium text-accent">가입 즉시 100,000 골드 지급!</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>회원가입</CardTitle>
              <CardDescription>
                모든 필수 항목을 입력해주세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <Label html-for="nickname">닉네임 <span class="text-destructive">*</span></Label>
                    <Input
                      id="nickname"
                      placeholder="덕후123"
                      v-model="formData.nickname"
                      required
                    />
                  </div>

                  <div class="space-y-2">
                    <Label html-for="name">이름 <span class="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      v-model="formData.name"
                      required
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <Label html-for="username">아이디 <span class="text-destructive">*</span></Label>
                  <Input
                    id="username"
                    placeholder="username"
                    v-model="formData.username"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <Label html-for="password">비밀번호 <span class="text-destructive">*</span></Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    v-model="formData.password"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <Label html-for="email">이메일 <span class="text-destructive">*</span></Label>
                  <div class="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      v-model="formData.email"
                      required
                      class="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      @click="emailVerified = true"
                    >
                      {{ emailVerified ? '인증완료' : '인증하기' }}
                    </Button>
                  </div>
                </div>

                <div class="space-y-2">
                  <Label html-for="favoriteAnime">관심 애니메이션 <span class="text-destructive">*</span></Label>
                  <Input
                    id="favoriteAnime"
                    placeholder="최대 3개까지 입력 가능 (쉼표로 구분)"
                    :value="formData.favoriteAnime.join(', ')"
                    @input="handleAnimeInput"
                    required
                  />
                  <p class="text-xs text-muted-foreground">
                    예: 나루토, 원피스, 귀멸의 칼날
                  </p>
                </div>

                <div class="space-y-2">
                  <Label>관심 카테고리 (선택)</Label>
                  <div class="flex flex-wrap gap-2">
                    <Badge
                      v-for="category in categories"
                      :key="category"
                      :variant="formData.categories.includes(category) ? 'default' : 'outline'"
                      class="cursor-pointer"
                      @click="toggleCategory(category)"
                    >
                      {{ category }}
                    </Badge>
                  </div>
                </div>

                <Button
                  type="submit"
                  class="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  :disabled="!emailVerified"
                >
                  회원가입하고 100,000 골드 받기
                </Button>
              </form>

              <div class="mt-6 text-center text-sm">
                <p class="text-muted-foreground">
                  이미 계정이 있으신가요?
                  <router-link to="/login" class="text-accent font-medium hover:underline">
                    로그인
                  </router-link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Gift } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'

const emailVerified = ref(false)

const formData = ref({
  nickname: '',
  name: '',
  username: '',
  password: '',
  email: '',
  favoriteAnime: [] as string[],
  categories: [] as string[],
})

const categories = [
  '피규어',
  '포토카드',
  '아크릴 스탠드',
  '키링',
  '인형',
  '포스터',
  '그 외 굿즈'
]

const handleAnimeInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  formData.value.favoriteAnime = target.value.split(',').map(s => s.trim()).filter(Boolean).slice(0, 3)
}

const toggleCategory = (category: string) => {
  const index = formData.value.categories.indexOf(category)
  if (index > -1) {
    formData.value.categories.splice(index, 1)
  } else {
    formData.value.categories.push(category)
  }
}

const handleSubmit = () => {
  console.log('Register attempt:', formData.value)
  // TODO: Implement registration logic
}
</script>
