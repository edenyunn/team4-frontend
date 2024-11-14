<template>
  <div class="dark-container" :class="{'low-opacity': isModalOpen}">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Cast</h1>
      <h2 class="welcome-subtitle">한국 현대사로 엮은 배우 유니버스<br />카드뉴스 스토리로 만나보세요</h2>
      <div class="divider"></div>
    </div>

    <!-- 버튼 목록 -->
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
  <!-- 동적 모달 -->
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
import PovCast1 from "@/assets/2Lee Sungmin.png";
import PovCast2 from "@/assets/2Song Gangho.png";
import PovCast3 from "@/assets/2Lee Jungjae.png";

export default {
  name: "ModalGallery",

  data() {
    return {
      isModalOpen: false,
      currentComponent: null,
      modalProps: { castNumber: 1, actorName: "배우" }, // 초기값
      images: {
        PovCast1: PovCast1,
        PovCast2: PovCast2,
        PovCast3: PovCast3,
      },
      actors: {
        1: "이성민",
        2: "송강호",
        3: "이정재",
      },
    };
  },

  computed: {
    // 동적 컴포넌트 로드
    currentModal() {
      if (!this.currentComponent) return null;
      return defineAsyncComponent(() =>
        import(`@/components/${this.currentComponent}.vue`)
      );
    },
  },

  methods: {
    // 파일명에서 숫자 추출
    getCastNumberFromFileName(fileName) {
      const match = fileName.match(/\d+/); // 숫자 추출
      return match ? parseInt(match[0], 10) : 1; // 기본값 1
    },

    // 모달 열기
    openModal(fileName) {
      const castNumber = this.getCastNumberFromFileName(fileName);
      const actorName = this.actors[castNumber] || "배우";
      this.modalProps = { castNumber, actorName };
      this.currentComponent = fileName;
      this.isModalOpen = true;

      // 모달로 포커스 이동
      this.$nextTick(() => {
        const modal = this.$el.querySelector("[role='dialog']");
        if (modal) modal.focus();
      });
    },

    // 모달 닫기
    closeModal() {
      this.isModalOpen = false;
      this.currentComponent = null;
      this.modalProps = { castNumber: 1, actorName: "배우" }; // 초기화
    },
  },
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
  width: calc(100% + 40px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px;
  margin-top: 55px;
}

.low-opacity {
  opacity: 0.1;
}

/* 갤러리 */
.gallery-item {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 506px;
}

.gallery-item:hover,
.gallery-item:focus {
  transform: scale(1.05);
  outline: 2px solid var(--highlight-color, #fff);
  border-radius: 4px;
}

.gallery-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

/* 모바일 화면 크기 */
@media (max-width: 768px) {
  .gallery-container {
    flex-direction: column;
  }
}
</style>
