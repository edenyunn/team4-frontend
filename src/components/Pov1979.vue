<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title">POV 1979</h5>
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
                  src="https://www.youtube.com/embed/h2yBi1ZRcG8?si=F1Z3G6Cf7LAv6dS4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
            </div>

            <h5 class="mb-3">&nbsp;빼앗긴 들에도 봄은 오는가</h5>
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
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pov1979Logo from "@/assets/1979 record.png";

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