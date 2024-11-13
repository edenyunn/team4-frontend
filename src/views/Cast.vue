<template>
  <div class="dark-container">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Cast</h1>
      <h2 class="welcome-subtitle">한국 현대사로 엮은 배우 유니버스<br/>카드뉴스 스토리로 만나보세요</h2>
      <div class="divider"></div> <!-- 새로 추가된 구분선 -->
    </div>

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

    <Suspense v-if="isModalOpen">
      <component
        :is="currentModal"
        @close="closeModal"
        v-bind="modalProps"
        role="dialog"
        aria-modal="true"
      />
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import PovCast1 from '@/assets/Lee Sungmin.png';
import PovCast2 from '@/assets/Song Gangho.png';
import PovCast3 from '@/assets/Lee Jungjae.png';

export default {
  name: 'ModalGallery',
  
  data() {
    return {
      isModalOpen: false,
      currentComponent: null,
      modalProps: {},
      images: {
        PovCast1: PovCast1,
        PovCast2: PovCast2,
        PovCast3: PovCast3,
      }
    };
  },

  computed: {
    currentModal() {
      if (!this.currentComponent) return null;
      
      return defineAsyncComponent(() => 
        import(`@/components/${this.currentComponent}.vue`)
      );
    }
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
    }
  }
};
</script>

<style scoped>
/* 웰컴 박스 */
.welcome-section {
  padding: 40px 20px;
  text-align: left;
}
.welcome-title {
  font-size: 36px;
  font-weight: bold;
  font-family: "Raleway-Bold";
  color: rgba(255, 255, 255);
  margin-bottom: 16px;
  letter-spacing: -1px;
}
.welcome-subtitle {
  font-size: 18px;
  font-weight: 150;
  font-family: "Raleway-SemiBold";
  color: rgba(255, 255, 255);
  letter-spacing: -1px;
}
/* 구분선 스타일 */
.divider {
  width: calc(100% + 40px); /* 컨테이너보다 좌우로 20px씩 더 길게 */
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px; /* 음수 마진으로 좌우로 확장 */
  margin-top: 55px;
}

.gallery-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; /* 세로 중앙 정렬 */
  min-height: 100vh; /* 화면 높이의 100% 사용 */
  padding: 1rem;
  background-color: var(--dark-bg, #1a1a1a);
}

/* 갤러리 그리드 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding: 2rem;
  justify-items: center;
  align-items: center;
  min-height: calc(100vh - 200px); /* welcome section 높이를 고려한 조정 */
}

.gallery-item {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 506px; /* Cast.vue와 비슷한 크기로 조정 */
}

.gallery-item:hover,
.gallery-item:focus {
  transform: scale(1.05);
  outline: 2px solid var(--highlight-color, #fff);
  border-radius: 4px;
}

.gallery-item img {
  width: 60%;
  height: auto;
  object-fit: cover;
}

/* 모바일 화면 크기일 때 세로 정렬 */
@media (max-width: 768px) {
  .gallery-container {
    flex-direction: column;
  }
}
</style>