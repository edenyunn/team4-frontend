<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content custom-modal-color text-white" :class="{ 'modal-enter': isActive }">
        <div class="modal-header">
          <h1 class="modal-title fs-1">POV 1979</h1>
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
                  src="https://www.youtube.com/embed/eQMmEnWpK6Y?si=On0xB_vhtK3yTV1P"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
            </div>

            <h5 class="mb-3" style="font-weight: bold;" >&nbsp;빼앗긴 들에도 봄은 오는가</h5>
            <p class="movie-description"></p>
          </div>
          <br />
          <div>
            <p>
              궁정동의 저녁, 긴장 속의 만찬<br />
              고요한 술잔이 오가는 순간<br />
              어디선가 울려 퍼진 총성 한 발<br />
              닫혀버린 문 뒤 남은 긴 여운<br />
            </p>
            <p>
              남산 언덕에 스며든 무거운 발자국<br />
              흩어진 그림자 사이 조용한 침묵<br />
              비워진 자리엔 차가운 숨결만<br />
              누구도 예기치 못한 그날의 끝<br />
            </p>
            <p>
              그날의 밤, 흩어져 간 이야기<br />
              어둠 속 머문 지워진 발자국<br />
              말없이 사라진 조용한 얼굴들<br />
              잔잔히 스며든 그날의 기억<br />
            </p>
            <p>
              얼어붙은 거리, 군화 소리 번지고<br />
              서로 다른 선택을 품은 시선들<br />
              누구도 묻지 않는 그 새벽의 풍경<br />
              긴 겨울 속에 스며든 갈등의 흔적<br />
            </p>
            <p>
              아직은 멈춰 선 사람들의 마음<br />
              희미한 자리마다 남은 여운들<br />
              봄을 기다리며 다시 걷는 거리<br />
              누구의 기억 속에 남을 그날<br />
            </p>
            <p>
              그 겨울 밤, 잊혀지지 않을 흔적<br />
              서로 다른 길 위에 남긴 발자국<br />
              멀어진 이야기와 잠든 목소리<br />
              조용히 스며든 그날의 기억<br />
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pov1979Logo from "@/assets/1979 inside.png";

export default {
  name: "Pov1979",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      pov1979Logo: pov1979Logo,
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