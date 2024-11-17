<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-secondary">
          <h5 class="modal-title">
            POV Cast: 배우 개그 유니버스 - {{ actorName }}
          </h5>
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

const errorMessage = ref("");
const isCarouselVisible = ref(true);

// 동적 폴더 이름 계산
const cardsFolder = computed(() => `CastCards${props.castNumber}`);

// Emits 설정
const emit = defineEmits(["close", "error"]);

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
/* 모달 스타일 */
.modal-content {
  font-family: "Raleway-SemiBold", sans-serif;
}

.modal-title {
  font-family: "Raleway-Bold", sans-serif;
  font-size: 1.5rem;
  color: #fff;
}

.modal-body {
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 1rem;
  color: #d1d1d1;
}

.alert {
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 1rem;
  color: #ff4d4f;
  background-color: rgba(255, 0, 0, 0.1);
  border: none;
}

/* 버튼 스타일 */
.btn-close {
  font-family: "Raleway-SemiBold", sans-serif;
}

.carousel-container {
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 0.9rem;
  color: #e3e3e3;
}
</style>
