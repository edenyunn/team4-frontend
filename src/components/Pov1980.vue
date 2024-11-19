<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content custom-modal-color text-white" :class="{ 'modal-enter': isActive }">
        <div class="modal-header">
          <h1 class="modal-title fs-1">POV 1980</h1>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <div class="d-flex justify-content-center mb-3"></div>

            <!-- Related Videos Section -->
            <div class="video-container">
              <div class="iframe-wrapper">
                <iframe
                  width="320"
                  height="180"
                  src="https://www.youtube.com/embed/Gy8wDOmHPH8?si=UFvApPeG4iBeot4a"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
            </div>


            <h5 class="mb-3">&nbsp;그날이 오면</h5>
            <p class="movie-description"></p>
          </div>
          <br />
          <div>
            <p>
              렌즈에 담긴 혼란의 순간들<br />
              거리에 번져 가는 발자국 소리<br />
              택시 타고 지나온 그 봄의 풍경<br />
            </p>
            <p>
              어제와는 다른 얼굴들이었지<br />
              담담히 남겨진 그들의 이야기<br />
            </p>
            <p>
              말없이 전해진 진실의 조각들<br />
              시간 속에 묻혀도 잊히지 않아<br />
              언제 나 그 자리 그곳에 남겠지<br />
            </p>
            <p>
              우리가 본 건 지울 수 없는 날들<br />
              말없이 남아 스며든 그 진실 그날의 울림<br />
              희미해져도 조용히 우리 곁에 남아 있겠지<br />
            </p>
            <p>
              어디선가 들려온 작은 영상이<br />
              거짓을 넘어 세상에 번지고<br />
              1987, 다시 피어난 불씨<br />
              우리가 기억한 그 봄의 얼굴<br />
            </p>
            <p>
              바람에 남겨진 그날의 약속<br />
              조용히 스며들어 빛이 되겠지<br />
              이제는 우리 곁에 남은 그 봄 날<br />
              작은 불빛처럼 영원히 피어나<br />
            </p>
            <p>
              우리가 본 건 지울 수 없는 날들<br />
              말없이 남아 스며든 그 진실 그날의 울림<br />
              희미해져도 조용히 우리 곁에 남아 있겠지<br />
            </p>
            <p>
              어디선가 들려온 작은 영상이<br />
              거짓을 넘어 세상에 번지고<br />
              1987, 다시 피어난 불씨<br />
              우리가 기억한 그 봄의 얼굴<br />
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pov1980Logo from "@/assets/1980 inside.png";

export default {
  name: "Pov1980",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      pov1980Logo: pov1980Logo,
      isActive: false,
    };
  },
  mounted() {
    // 마운트 후 애니메이션 시작
    requestAnimationFrame(() => {
      this.isActive = true;
    });
  },
  methods: {
    closeModal() {
      this.isActive = false;
      // 애니메이션이 끝난 후 모달 닫기
      setTimeout(() => {
        this.$emit("close");
      }, 300);
    }
  }
}
</script>

<style scoped>
/* 모달 배경색 변경 */
.custom-modal-color {
  background-color: #333; /* 원하는 색상으로 변경 */
  color: #ecf0f1; /* 텍스트 색상 */
}

/* 헤더와 푸터의 스타일 변경 */
.modal-header {
  background-color: #333; /* 원하는 색상 */
  border-bottom: 1px solid #95a5a6;
  padding: 1rem 1.5rem;
  font-family: "Pretendard-SemiBold";
}

.modal-body {
  background-color: #333; /* 원하는 색상 */
  border-top: 1px solid #95a5a6;
  font-family: "Pretendard-Light";
}

.modal-image {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
}

/* 새로운 트랜지션 스타일 추가 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.modal-enter {
  transform: translateY(0);
  opacity: 1;
}

/* 기존 애니메이션 수정 */
.modal.show {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  z-index: 1050;
}

.modal-header {
  padding: 1rem 2rem;
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  text-align: center;
}

.modal-title {
  font-size: 1.5rem;
}

@media (max-width: 576px) {
  .modal-header {
    padding: 1rem;
  }

  .modal-body {
    padding: 1rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }
}
</style>