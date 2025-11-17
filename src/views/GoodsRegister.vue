<template>
  <div class="min-h-screen">
    <Header />
    <div class="py-24 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">굿즈 등록</h1>
        <form class="space-y-8 bg-card rounded-2xl p-8 border" @submit.prevent="handleSubmit">
          <!-- Image Upload -->
          <div class="space-y-4">
            <Label>굿즈 이미지 (최대 5개)</Label>
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="relative aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  :src="image || '/placeholder.svg'"
                  :alt="`Upload ${index + 1}`"
                  class="object-cover w-full h-full"
                />
                <button
                  type="button"
                  @click="removeImage(index)"
                  class="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X :size="16" />
                </button>
              </div>
              <label
                v-if="images.length < 5"
                class="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors"
              >
                <Upload :size="32" class="text-muted-foreground mb-2" />
                <span class="text-sm text-muted-foreground">이미지 업로드</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  class="hidden"
                  @change="handleImageUpload"
                />
              </label>
            </div>
          </div>

          <!-- Basic Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <Label html-for="title">제목 *</Label>
              <Input id="title" placeholder="굿즈 제목을 입력하세요" v-model="formData.title" required />
            </div>

            <div class="space-y-2">
              <Label html-for="anime">애니메이션명 *</Label>
              <Input id="anime" placeholder="예: 원피스" v-model="formData.anime" required />
            </div>

            <div class="space-y-2">
              <Label html-for="character">캐릭터명</Label>
              <Input id="character" placeholder="예: 루피" v-model="formData.character" />
            </div>

            <div class="space-y-2">
              <Label html-for="category">굿즈 종류 *</Label>
              <Select v-model="formData.category">
                <SelectItem value="figure">피규어</SelectItem>
                <SelectItem value="photocard">포토카드</SelectItem>
                <SelectItem value="acrylic">아크릴 스탠드</SelectItem>
                <SelectItem value="keyring">키링</SelectItem>
                <SelectItem value="plush">인형</SelectItem>
                <SelectItem value="poster">포스터</SelectItem>
                <SelectItem value="other">그 외 굿즈</SelectItem>
              </Select>
            </div>
          </div>

          <div class="space-y-2">
            <Label html-for="description">상품 설명 *</Label>
            <Textarea
              id="description"
              placeholder="상품의 상태, 특징 등을 자세히 설명해주세요"
              rows="6"
              v-model="formData.description"
              required
            />
          </div>

          <!-- Auction Settings -->
          <div class="space-y-6 pt-6 border-t">
            <h3 class="text-xl font-semibold">경매 설정</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label html-for="startPrice">시작가 (골드) *</Label>
                <Input
                  id="startPrice"
                  type="number"
                  placeholder="10000"
                  min="1000"
                  v-model="formData.startPrice"
                  required
                />
                <p class="text-sm text-muted-foreground">최소 1,000G</p>
              </div>

              <div class="space-y-2">
                <Label html-for="maxPrice">즉시구매가 (골드)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="선택사항"
                  v-model="formData.maxPrice"
                />
                <p class="text-sm text-muted-foreground">
                  설정 시 해당 금액 입찰 시 즉시 낙찰
                </p>
              </div>

              <div class="space-y-2">
                <Label html-for="duration">경매 기간 *</Label>
                <Select v-model="formData.duration">
                  <SelectItem value="1">1일</SelectItem>
                  <SelectItem value="2">2일</SelectItem>
                  <SelectItem value="3">3일 (권장)</SelectItem>
                  <SelectItem value="5">5일</SelectItem>
                  <SelectItem value="7">7일</SelectItem>
                  <SelectItem value="14">14일</SelectItem>
                </Select>
                <p class="text-sm text-muted-foreground">
                  최초 입찰 시점부터 카운트 시작
                </p>
              </div>
            </div>
          </div>

          <div class="flex gap-4 pt-6">
            <Button type="submit" size="lg" class="flex-1">
              등록하기
            </Button>
            <Button type="button" variant="outline" size="lg" @click="$router.back()">
              취소
            </Button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, X } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Select from '@/components/ui/Select.vue'
import SelectItem from '@/components/ui/SelectItem.vue'
import Button from '@/components/ui/Button.vue'

const images = ref<string[]>([])

const formData = ref({
  title: '',
  anime: '',
  character: '',
  category: '',
  description: '',
  startPrice: '',
  maxPrice: '',
  duration: '3',
})

const handleImageUpload = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files) {
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
    images.value = [...images.value, ...newImages].slice(0, 5)
  }
}

const removeImage = (index: number) => {
  images.value = images.value.filter((_, i) => i !== index)
}

const handleSubmit = () => {
  console.log('Register goods:', { ...formData.value, images: images.value })
  // TODO: Implement registration logic
}
</script>
