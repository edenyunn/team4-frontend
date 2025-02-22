<!-- Vibe.vue -->
<template>
  <div class="dark-container" :class="{ 'low-opacity': isModalOpen }">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Vibe</h1>
      <h2 class="welcome-subtitle">
        생성형 AI로 제작된 음악을 통해<br />한국 현대사를 새롭게 느껴보세요
      </h2>
      <div class="divider"></div>
    </div>

    <div class="gallery-grid">
      <button
        v-for="(image, name) in images"
        :key="name"
        class="gallery-item"
        @click="openModal(name)"
        @keydown.enter="openModal(name)"
        :aria-label="`Open ${name} modal`"
      >
        <img :src="image" :alt="`${name} logo`" />
      </button>
    </div>
  </div>

  <Suspense v-if="isModalOpen">
    <component
      :is="currentModal"
      @close="closeModal"
      v-bind="modalProps"
      role="dialog"
      aria-modal="true"
    />
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from "vue";
import pov1950Logo from "@/assets/1950 Vibe.png";
import pov1979Logo from "@/assets/1979 Vibe.png";
import pov1980Logo from "@/assets/1980 Vibe.png";

export default {
  name: "ModalGallery",

  data() {
    return {
      isModalOpen: false,
      currentComponent: null,
      modalProps: {},
      images: {
        Pov1950: pov1950Logo,
        Pov1979: pov1979Logo,
        Pov1980: pov1980Logo,
      },
    };
  },

  computed: {
    currentModal() {
      if (!this.currentComponent) return null;

      return defineAsyncComponent(() =>
        import(`@/components/${this.currentComponent}.vue`)
      );
    },
  },

  methods: {
    openModal(componentName) {
      this.currentComponent = componentName;
      this.isModalOpen = true;
      // Trap focus within modal when opened
      this.$nextTick(() => {
        const modal = this.$el.querySelector('[role="dialog"]');
        if (modal) modal.focus();
      });
    },

    closeModal() {
      this.isModalOpen = false;
      this.currentComponent = null;
      this.modalProps = {};
    },
  },
};
</script>

<style scoped>
.dark-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 웰컴 박스 */
.welcome-section {
  padding: 40px 20px;
  text-align: left;
  margin-top: 60px;
}

.welcome-title {
  font-size: 36px;
  font-weight: bold;
  font-family: "Raleway-Bold";
  color: rgba(255, 255, 255);
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.welcome-subtitle {
  font-size: 18px;
  font-weight: 150;
  font-family: "Pretendard-Light";
  color: rgba(255, 255, 255);
  letter-spacing: -1px;
  line-height: 1.5;
}

/* 구분선 스타일 */
.divider {
  width: calc(100% + 40px); /* 컨테이너보다 좌우로 20px씩 더 길게 */
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px; /* 음수 마진으로 좌우로 확장 */
  margin-top: 55px;
}

.low-opacity {
  opacity: 0.1;
}

/* 갤러리 그리드 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
}

.gallery-item {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 419px; /* Cast.vue와 비슷한 크기로 조정 */
  display: flex;
  justify-content: center;
}

/* hover 상태에서만 아웃라인 표시 */
.gallery-item:hover {
  transform: scale(1.05);
  outline: 2px solid var(--highlight-color, #fff);
  border-radius: 4px;
}

/* focus 상태일 때 아웃라인 제거 */
.gallery-item:focus {
  outline: none;
  transform: scale(1.05);
}

.gallery-item img {
  width: 65%;
  height: auto;
  object-fit: cover;
}

/* 모바일 화면 크기일 때 세로 정렬 */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .gallery-item img {
    width: 80%;
  }
}
</style>