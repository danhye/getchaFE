# GetchaFE - Vue.js

애니메이션 굿즈 경매 플랫폼 (Vue.js 버전)

## 📋 프로젝트 개요

Getcha는 Vue 3, TypeScript, Vite 기반으로 제작된 애니메이션 굿즈 경매 플랫폼입니다.
본 가이드라인은 AI(코딩 보조 에이전트 포함)가 Getcha 프론트엔드 코드를 작성하거나 수정할 때 따라야 할 규칙과 구조를 정의합니다.

### 프로젝트 정보

- **프로젝트명:** 겟챠(Getcha)
- **진행 기간:** 2025.11.13 ~ 2025.12.21
- **개발 환경:** Java(Spring Boot), Vue.js


### 타겟층

품절로 인해 굿즈를 사지 못한 2030 애니메이션 덕후


### 프로젝트 목표

- 애니메이션 및 캐릭터 굿즈 기반 **개인 간 경매 플랫폼 구축**
- **가상화폐 기반 안전 거래 시스템** 제공
- **사용자 관심 기반 AI 굿즈 추천 시스템** 개발
- 안정적인 UX 제공을 위한 경매 관련 **알림 + 경매 타이머** 구현


---
<br>

## 🛠 Front Tech Stack

- **Vue 3** (Composition API)
- **TypeScript**
- **Vue Router** (라우팅)
- **Vite** (빌드 도구)
- **Tailwind CSS** (스타일링)
- **Lucide Vue Next** (아이콘)

<br>

---
<br>

# 🚀 Getting Started

## 버전
- Node.js 18+
- pnpm 10+
- MySQL 8+
- Vue 3+
- Java 17+ (for Spring Boot)
- Maven or Gradle

## 설치 및 실행

```bash
# 1. npm 설치 
npm install -g npm@latest

# 2. pnpm 설치
npm install -g pnpm

# 3. 의존성 설치 > 루트 경로 
pnpm install

#3. 개발 서버 실행
pnpm dev
```


## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # UI 기본 컴포넌트
│   ├── GoodsCard.vue   # 굿즈 카드 컴포넌트 (통일된 디자인)
│   ├── Header.vue
│   ├── Footer.vue
│   ├── TrendingSection.vue  # 실시간 인기 경매 (GoodsCard 사용)
│   └── CategorySection.vue
├── views/              # 페이지 컴포넌트
│   ├── Home.vue        # 메인 페이지
│   ├── GoodsList.vue   # 굿즈 리스트
│   └── ...
├── router/             # 라우터 설정
├── lib/                # 유틸리티 함수
└── style.css           # 전역 스타일
```

## 💻 주요 화면 구성 목록

- ✅ **헤더**
- ✅ **로그인 페이지**
- ✅ **회원 가입 페이지**
- ✅ **메인 페이지** 
- ✅ **굿즈 리스트 페이지** 
- ✅ **굿즈 등록 페이지**
- ✅ **굿즈 수정 페이지**
- ✅ **굿즈 상세 페이지**
- ✅ **마이페이지**

