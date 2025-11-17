<template>
  <div class="min-h-screen">
    <Header />
    <section class="py-24 min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
              <Sparkles :size="32" class="text-accent" />
            </div>
            <h1 class="text-3xl font-bold mb-2">다시 만나서 반가워요!</h1>
            <p class="text-muted-foreground">Getcha에 로그인하세요</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>로그인</CardTitle>
              <CardDescription>
                이메일과 비밀번호를 입력해주세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="space-y-2">
                  <Label html-for="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    v-model="formData.email"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <Label html-for="password">비밀번호</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    v-model="formData.password"
                    required
                  />
                </div>

                <Button type="submit" class="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  로그인
                </Button>
              </form>

              <div class="mt-6 text-center text-sm">
                <p class="text-muted-foreground">
                  아직 계정이 없으신가요?
                  <router-link to="/register" class="text-accent font-medium hover:underline">
                    회원가입
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
import { Sparkles } from 'lucide-vue-next'
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

const formData = ref({
  email: '',
  password: '',
})

const handleSubmit = () => {
  console.log('Login attempt:', formData.value)
  // TODO: Implement login logic
}
</script>
