<!-- Cast.vue -->
<template>
  <div class="dark-container" :class="{ 'low-opacity': isModalOpen }">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Cast</h1>
      <h2 class="welcome-subtitle">
        한국 현대사로 엮은 배우 유니버스를<br />카드뉴스 스토리로 만나보세요
      </h2>
      <div class="divider"></div>
    </div>

    <div class="gallery-grid">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        @click="openModal(index + 1)"
        @keydown.enter="openModal(index + 1)"
        :aria-label="`Open modal for ${actors[index + 1]}`"
      >
        <img :src="image" :alt="`${actors[index + 1]} logo`" />
      </button>
    </div>
  </div>

  <!-- 모달 -->
  <Suspense v-if="isModalOpen">
    <PovCastModal
      v-bind="modalProps"
      @close="closeModal"
      role="dialog"
      aria-modal="true"
    />
  </Suspense>
</template>

<script>
import PovCastModal from "@/components/PovCastModal.vue";
import PovCast1 from "@/assets/Lee Sungmin.png";
import PovCast2 from "@/assets/Song Gangho.png";
import PovCast3 from "@/assets/Lee Jungjae.png";

export default {
  name: "ModalGallery",

  components: {
    PovCastModal,
  },

  data() {
    return {
      isModalOpen: false,
      modalProps: { castNumber: 1, actorName: "배우" }, // 초기값
      images: [PovCast1, PovCast2, PovCast3],
      actors: {
        1: "이성민",
        2: "송강호",
        3: "이정재",
      },
    };
  },

  methods: {
    // 모달 열기
    openModal(castNumber) {
      this.modalProps = {
        castNumber,
        actorName: this.actors[castNumber] || "배우",
      };
      this.isModalOpen = true;
    },

    // 모달 닫기
    closeModal() {
      this.isModalOpen = false;
      this.modalProps = { castNumber: 1, actorName: "배우" }; // 초기화
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

/* Welcome Section */
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
  margin-bottom: 16px;
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

/* Divider Style */
.divider {
  width: calc(100% + 40px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px;
  margin-top: 55px;
}

/* Low Opacity */
.low-opacity {
  opacity: 0.1;
}

/* 갤러리 그리드만 수정 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 20px; /* 좌우 여백 추가 */
  justify-items: center;
  align-items: center;
  flex-grow: 1;
  margin: 0 auto; /* 중앙 정렬 */
  width: 100%; /* 전체 너비 사용 */
  max-width: 1600px; /* 너무 넓어지지 않도록 제한 */
}

/* Gallery Items의 크기 조정 */
.gallery-item {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 241px; /* 이미지 크기 제한 */
  display: flex;
  justify-content: center;
}

.gallery-item img {
  width: 100%; /* 컨테이너에 맞게 조정 */
  height: auto;
  object-fit: contain;
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

/* 모바일 스타일 업데이트 */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem 20px;
  }

  .gallery-item {
    max-width: 300px; /* 모바일에서는 더 작게 */
  }
}
</style>