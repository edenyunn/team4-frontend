<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content custom-modal-color text-white" :class="{ 'modal-enter': isActive }">
        <div class="modal-header">
          <h1 class="modal-title fs-1">POV Vibe 1950</h1>
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
                  src="https://www.youtube.com/embed/UuTTGYqXQlo?si=_4XIMfSapriMcsR6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
            </div>

            <h5 class="mb-3" style="font-weight: bold;" >&nbsp;그날의 전선</h5>
            <p class="movie-description"></p>
          </div>
          <br />
          <div>
            <p>
              평화롭던 거리에 총성이 울리고<br />
              갑작스레 불린 이름들 떠난 길 위에<br />
              전쟁은 형제의 삶을 갈라놓았고<br />
              형은 동생을 위해 모든 걸 걸었네<br />
            </p>
            <p>
              포항의 언덕엔 어린 손이 들었던<br />
              익숙지 않은 총과 흔들리는 용기<br />
              그들은 마지막 전선을 지키려 했고<br />
              교실엔 침묵만이 깊게 남았네<br />
            </p>
            <p>
              멀어지는 고향과 빛바랜 꿈<br />
              소리 없이 내려앉은 먼지 속의 길<br />
              남겨진 이름들은 기억 속에 살아<br />
              그날의 전선은 사라지지 않으리<br />
            </p>
            <p>
              어둠 속 파도를 넘어 인천에 닿아<br />
              기적처럼 열렸던 전세의 새벽<br />
              첩보 속 숨겨진 목숨의 무게로<br />
              바다는 여전히 차갑게 출렁였지<br />
            </p>
            <p>
              휴전의 시간에도 멈추지 않던 싸움<br />
              고지마다 쌓인 피로 남은 흔적들<br />
              끝이 보이지 않는 하늘 아래 병사들<br />
              그들은 무엇을 위해 싸우고 있었나<br />
            </p>
            <p>
              멀어지는 고향과 빛바랜 꿈<br />
              소리 없이 내려앉은 먼지 속의 길<br />
              남겨진 이름들은 기억 속에 살아<br />
              그날의 전선은 사라지지 않으리<br />
            </p>
            <p>
              휴전의 시간에도 멈추지 않던 싸움<br />
              고지마다 쌓인 피로 남은 흔적들<br />
              끝이 보이지 않는 하늘 아래 병사들<br />
              그들은 무엇을 위해 싸우고 있었나<br />
            </p>
            <p>
              길었던 밤의 끝, 희미한 불빛<br />
              전쟁이 남긴 건 잊혀지지 않을 울림<br />
              고지와 바다, 그리고 그들의 이야기<br />
              이제는 시간 속에 조용히 스며들리
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pov1950Logo from "@/assets/1950 Vibe.png";

export default {
  name: "Pov1950",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      pov1950Logo: pov1950Logo,
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