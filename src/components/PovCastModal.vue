<template>
  <!-- 모달 애니메이션을 위한 Transition 컴포넌트 -->
  <Transition name="modal">
    <!-- 
      모달의 최상위 컨테이너
      @click.self: 모달 바깥 영역 클릭시에만 이벤트 발생 (내부 클릭은 무시)
    -->
    <div class="modal show d-block" tabindex="-1" @click.self="closeModal">
      <!-- 실제 모달 다이얼로그 -->
      <div class="modal-dialog modal-lg" role="document">
        <!-- 모달 컨텐츠 컨테이너 -->
        <div class="modal-content text-white">
          <!-- 모달 헤더 영역 -->
          <div class="modal-header border-secondary">
            <h5 class="modal-title">
              <!-- POV Cast 텍스트 -->
              <span class="pov-text">POV Cast: </span>
              <!-- 배우 이름 동적 표시 -->
              <span class="actor-name">{{ actorName }}</span>
            </h5>
            <!-- 닫기 버튼 -->
            <button
              type="button"
              class="btn-close btn-close-white"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
 
          <!-- 모달 본문 영역 -->
          <div class="modal-body">
            <!-- 
              카드 캐러셀 컴포넌트
              isCarouselVisible이 true일 때만 표시
              에러 발생 시 handleCarouselError 메서드 호출
            -->
            <Carousel
              :folder-name="cardsFolder"
              v-if="isCarouselVisible"
              @load-error="handleCarouselError"
            />
 
            <!-- 에러 메시지 표시 영역 -->
            <div v-if="errorMessage" class="alert alert-danger text-center">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
 </template>
 
 <script setup>
 import { ref, computed } from "vue";
 import Carousel from "./CastCarousel.vue";
 
 // props 정의
 const props = defineProps({
  // 캐스트 번호 (필수)
  castNumber: {
    type: Number,
    required: true,
  },
  // 배우 이름 (필수)
  actorName: {
    type: String,
    required: true,
  }
 });
 
 // 에러 메시지 상태 관리
 const errorMessage = ref("");
 // 캐러셀 표시 여부 상태 관리
 const isCarouselVisible = ref(true);
 
 // 동적 폴더 이름 계산 (캐스트 번호에 따라 변경)
 const cardsFolder = computed(() => `CastCards${props.castNumber}`);
 
 // 이벤트 emit 정의
 const emit = defineEmits(["close", "error"]);
 
 /**
 * 캐러셀 로드 에러 처리 함수
 * @param {Error} error - 발생한 에러 객체
 */
 const handleCarouselError = (error) => {
  errorMessage.value = "카드뉴스를 불러오는데 실패했습니다.";
  isCarouselVisible.value = false;
  emit("error", error);
 };
 
 /**
 * 모달 닫기 함수
 * 부모 컴포넌트에 close 이벤트 발생
 */
 const closeModal = () => {
  emit("close");
 };
 </script>
 
 <style scoped>
/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
 transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from {
 opacity: 0;
 transform: scale(0.98) translateY(-20px);
}

.modal-leave-to {
 opacity: 0;
 transform: scale(0.98) translateY(20px);
}

/* Content Animation */
.modal-content {
 animation: contentFade 0.25s ease forwards;
 transform-origin: center center;
 background-color: #333333;
 transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes contentFade {
 from {
   opacity: 0;
   transform: scale(0.98);
 }
 to {
   opacity: 1;
   transform: scale(1);
 }
}

/* 모달 다이얼로그 스타일 */
.modal-dialog {
 transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
 transition: background-color 0.25s ease;
}

/* 반응형 디자인 */
/* 데스크톱 화면 */
@media (min-width: 992px) {
 .modal-dialog {
   width: 40%;
 }
}

/* 태블릿 화면 */
@media (max-width: 991.98px) {
 .modal-dialog {
   width: 60%;
   margin: 1rem auto;
 }
}

/* 모바일 화면 */
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