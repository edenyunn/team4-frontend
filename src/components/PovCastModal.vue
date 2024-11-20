<!-- PovCastModal.vue -->
<template>
  <Transition name="modal">
    <div class="modal show d-block" tabindex="-1" @click.self="closeModal">
      <Transition name="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content text-white">
            <div class="modal-header border-secondary">
              <h5 class="modal-title">
                <span class="pov-text">POV Cast: </span>
                <span class="actor-name">{{ actorName }}</span>
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
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from "vue";
import Carousel from "./CastCarousel.vue";

const props = defineProps({
  castNumber: {
    type: Number,
    required: true,
  },
  actorName: {
    type: String,
    required: true,
  }
});

const errorMessage = ref("");
const isCarouselVisible = ref(true);
const cardsFolder = computed(() => `CastCards${props.castNumber}`);
const emit = defineEmits(["close", "error"]);

const handleCarouselError = (error) => {
  errorMessage.value = "카드뉴스를 불러오는데 실패했습니다.";
  isCarouselVisible.value = false;
  emit("error", error);
};

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
/* 모달 배경 애니메이션 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* 모달 다이얼로그 애니메이션 */
.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dialog-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-30px);
}

.dialog-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(30px);
}

/* 모달 컨텐츠 애니메이션 */
.modal-content {
  animation: contentFade 0.3s ease forwards;
  transform-origin: center center;
  background-color: #333333;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes contentFade {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 모달 다이얼로그 스타일 */
.modal-dialog {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
  margin: 1.75rem auto;
  width: 90%;
  max-width: 800px;
}

/* 모달 헤더 스타일 */
.modal-header {
  padding: 1rem 1.5rem;
  font-family: "Pretendard-SemiBold";
}

/* POV Cast 텍스트 스타일 */
.modal-title .pov-text {
  font-family: "Raleway-Bold";
  font-size: 1.5rem;
  color: #fff;
}

/* 배우 이름 스타일 */
.modal-title .actor-name {
  font-family: "Raleway-Bold";
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
}

/* 모달 본문 스타일 */
.modal-body {
  font-family: "Pretendard-Light";
  color: white;
}

/* 경고 메시지 스타일 */
.alert {
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 1rem;
  color: #ff4d4f;
  background-color: rgba(255, 0, 0, 0.1);
  border: none;
}

/* 닫기 버튼 스타일 */
.btn-close {
  font-family: "Raleway-SemiBold", sans-serif;
  transition: transform 0.2s ease;
}

.btn-close:hover {
  transform: scale(1.1);
}

/* 캐러셀 컨테이너 스타일 */
.carousel-container {
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 0.9rem;
  color: #e3e3e3;
}

/* 모달 오버레이 스타일 */
.modal {
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
}

/* 반응형 디자인 */
@media (min-width: 992px) {
  .modal-dialog {
    width: 40%;
  }
}

@media (max-width: 991.98px) {
  .modal-dialog {
    width: 60%;
    margin: 1rem auto;
  }
}

@media (max-width: 767.98px) {
  .modal-dialog {
    width: 85%;
    margin: 0.5rem auto;
  }

  .modal-title .pov-text,
  .modal-title .actor-name {
    font-size: 1.2rem;
  }
}
</style>