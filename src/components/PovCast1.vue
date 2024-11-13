<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-secondary">
          <h5 class="modal-title">POV Cast: 배우개그 유니버스 - {{ actorName }}</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>

        <div class="modal-body">
          <Carousel
            :folder-name="cardsFolder"
            v-if="isCarouselVisible"
            @load-error="handleCarouselError"
          />

          <div v-if="errorMessage" class="alert alert-danger text-center">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Carousel from "./CastCarousel.vue";

// Props 설정
const props = defineProps({
  castNumber: {
    type: Number,
    required: true,
  },
  actorName: {
    type: String,
    required: true,
  },
});

// State
const errorMessage = ref("");
const isCarouselVisible = ref(true);

// Emits 설정
const emit = defineEmits({
  close: null,
  error: (error) => error instanceof Error,
});

// 동적 폴더 이름 생성
const cardsFolder = computed(() => `CastCards${props.castNumber}`);

// 에러 핸들링
const handleCarouselError = (error) => {
  errorMessage.value = "카드뉴스를 불러오는데 실패했습니다.";
  isCarouselVisible.value = false;
  emit("error", error);
};

// 모달 닫기
const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal-image {
  max-height: 300px;
  width: auto;
  object-fit: contain;
}

.modal.show {
  display: block;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.modal-header {
  padding: 1rem 1.5rem;
}

.modal-title {
  font-family: "Pretendard-Medium";
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
}
</style>
