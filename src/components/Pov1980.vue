<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content bg-dark text-white">
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

            <h5 class="mb-3">&nbsp;그 날이 오면</h5>
            <p class="movie-description"></p>
          </div>
          <br />
          <div>
            <p>
              렌즈에 담긴 혼란의 순간들<br />
              거리에 번져 가는 발자국 소리<br />
              택시 타고 지나온 그 봄의 광주<br />
              흩어진 진실의 조각들<br />
            </p>
            <p>
              화려한 휴가처럼 떠나간 시간<br />
              비밀로 남은 기억의 파편들이<br />
              시간 속에 묻혀도 잊히지 않아<br />
              우리 마음에 오래 남아 있겠지<br />
            </p>
            <p>
              우리가 본 건 지울 수 없는 날들<br />
              말 없이 전해진 침묵 속의 빛<br />
              그날의 울림이 희미해져도<br />
              조용히 우리 곁에 남아 있겠지<br />
            </p>
            <p>
              어디선가 들려온 작은 영상이<br />
              거짓을 넘어 세상에 닿아 가고<br />
              1987, 다시 피어난 불씨<br />
              그날을 기억한 모든 이의 얼굴<br />
            </p>
            <p>
              흔들림 속에 새겨진 그 약속들<br />
              시간 속에서 빛으로 남아가네<br />
              다시 오지 않을 그 봄의 순간이<br />
              작은 불빛처럼 영원히 피어나<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pov1980Logo from "@/assets/1980 record.png";

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
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-header {
  padding: 1rem 1.5rem;
  font-family: "Pretendard-SemiBold";
}

.modal-body {
  font-weight: bold;
  font-family: "Pretendard-Light";
}

.modal-image {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
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

.modal {
  z-index: 1050;
}

.modal-backdrop {
  z-index: 1040;
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