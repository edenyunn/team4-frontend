<!-- Pov1979.vue -->
<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div
        class="modal-content custom-modal-color text-white"
        :class="{ 'modal-enter': isActive }"
      >
        <div class="modal-header">
          <h1 class="modal-title fs-1">POV Vibe 1979</h1>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
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

            <br />

            <!-- Content Box -->
            <div class="content-box">
              <br />
              <h5 class="vibe-titles">&nbsp;빼앗긴 들에도 봄은 오는가</h5>
              <br />
              <div class="vibe-lyrics">
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
            </div>
          </div>

          <br />
          <hr />

          <div>
            <h5 class="vibe-relatedmovies">&nbsp;🎬 관련 영화 정보</h5>
            <br />
            <div class="movie-grid">
              <div
                v-for="movie in relatedMovies"
                :key="movie.id"
                class="movie-item"
                @click="handleMovieClick(movie)"
              >
                <div class="poster-wrapper">
                  <img
                    :src="movie.imageUrl"
                    :alt="movie.title"
                    class="movie-poster"
                  />
                  <div class="movie-title">
                    <h6>{{ movie.title }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MovieModal 추가 -->
    <Transition name="modal">
      <MovieModal
        v-if="isMovieModalOpen"
        :is-open="isMovieModalOpen"
        :movie="selectedMovie"
        @close="isMovieModalOpen = false"
      />
    </Transition>
  </div>
</template>

<script>
import pov1979Logo from "@/assets/1979 Vibe.png";

import movies from "@/assets/movies.js"; // movies.js import
import MovieModal from "./MovieModal.vue"; // MovieModal 컴포넌트 import

import 남산의부장들 from "@/assets/posters/남산의부장들.jpg";
import 그때그사람들 from "@/assets/posters/그때그사람들.jpg";
import 서울의봄 from "@/assets/posters/서울의봄.jpg";
import 행복의나라 from "@/assets/posters/행복의나라.jpg";

export default {
  name: "Pov1979",
  components: {
    MovieModal,
  },
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
      isMovieModalOpen: false,
      selectedMovie: null,
      relatedMovies: [
        {
          id: 26,
          title: "남산의 부장들",
          imageUrl: 남산의부장들,
          summary:
            "중앙정보부의 권력 다툼 속에 숨겨진 진실, 그날의 긴박했던 이야기...",
        },
        {
          id: 27,
          title: "그때 그 사람들",
          imageUrl: 그때그사람들,
          summary:
            "1979년 10월, 대한민국 현대사를 뒤흔든 충격적인 사건의 재구성...",
        },
        {
          id: 28,
          title: "서울의 봄",
          imageUrl: 서울의봄,
          summary:
            "정권 교체의 분수령이 된 순간, 광화문을 뒤덮은 봄날의 열기...",
        },
        {
          id: 29,
          title: "행복의 나라",
          imageUrl: 행복의나라,
          summary:
            "1979년 10월 26일, 대통령 암살 사건과 그로부터 시작된 정치적 혼란 속에서 펼쳐지는 법정 드라마",
        },
      ],
    };
  },
  mounted() {
    requestAnimationFrame(() => {
      this.isActive = true;
    });
  },
  methods: {
    closeModal() {
      this.isActive = false;
      setTimeout(() => {
        this.$emit("close");
      }, 300);
    },
    handleMovieClick(movie) {
      // movies 배열에서 해당 ID의 영화 정보를 찾습니다
      this.selectedMovie = movies.find((m) => m.id === movie.id);
      this.isMovieModalOpen = true;
    },
  },
};
</script>

<style scoped>
/* 모달 배경색 변경 */
.custom-modal-color {
  background-color: #333;
  color: #ecf0f1;
  max-width: 100%;
  overflow-x: hidden;
}

/* 헤더와 푸터의 스타일 변경 */
.modal-header {
  background-color: #333;
  border-bottom: 1px solid #95a5a6;
  padding: 1rem 1.5rem;
  font-family: "Pretendard-SemiBold";
}

.modal-body {
  background-color: #333;
  border-top: 1px solid #95a5a6;
  font-family: "Pretendard-Light";
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  width: 100%;
}

.modal-image {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
}

/* 모달 다이얼로그 스타일 */
.modal-dialog {
  margin: 1.75rem auto;
  width: 90%;
  max-width: 800px;
  transition: all 0.3s ease;
}

.modal-content {
  background-color: #333;
  transition: all 0.3s ease;
  max-width: 100%;
  overflow-x: hidden;
  transform: translateY(20px);
  opacity: 0;
}

/* 트랜지션 스타일 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-enter {
  transform: translateY(0);
  opacity: 1;
}

/* 모달 기본 스타일 */
.modal.show {
  display: block;
}

.modal {
  z-index: 1050;
}

/* 비디오 컨테이너 스타일 */
.video-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 0;
  margin: 1rem auto;
  padding-top: 56.25%; /* 16:9 비율 */
}

.iframe-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* 콘텐츠 박스 */
.content-box {
  background-color: #555; /* 박스 배경색 */
  padding: 20px; /* 내부 여백 */
  border-radius: 8px; /* 둥근 모서리 */
  margin: 20px; /* 외부 여백 */
}

.vibe-titles {
  font-family: "Pretendard-SemiBold";
  font-size: 1.5rem;
}

.vibe-lyrics {
  font-family: "Pretendard-Light";
  font-size: 1rem;
}

hr {
  width: 50%;
  height: 50px;
  text-align: center;
  margin: 0px auto;
}

.vibe-relatedmovies {
  font-family: "Pretendard-SemiBold";
  font-size: 1.5rem;
}

/* 관련 영화 섹션 스타일 */
.movie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 100%;
}

.movie-item {
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.movie-item:hover {
  transform: scale(1.05);
}

.poster-wrapper {
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.movie-poster {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  border-radius: 8px;
}

.movie-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  color: white;
}

.movie-title h6 {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}

/* 반응형 스타일 */
@media (min-width: 992px) {
  .modal-dialog {
    width: 50%;
  }
}

@media (max-width: 991.98px) {
  .modal-dialog {
    width: 65%;
    margin: 1rem auto;
  }
}

@media (max-width: 768px) {
  .modal-dialog {
    width: 85%;
    margin: 0.5rem auto;
  }

  .modal-header {
    padding: 1rem;
  }

  .modal-body {
    padding: 1rem;
  }

  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .video-container {
    margin: 0.5rem auto;
  }
}

@media (max-width: 480px) {
  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}
</style>