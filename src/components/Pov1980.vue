<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content custom-modal-color text-white" :class="{ 'modal-enter': isActive }">
        <div class="modal-header">
          <h1 class="modal-title fs-1">POV Vibe 1980</h1>
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
          <hr />
          <div>
            <h5 class="mb-3">&nbsp;관련 영화</h5>
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
    <MovieModal 
      v-if="isMovieModalOpen"
      :is-open="isMovieModalOpen"
      :movie="selectedMovie"
      @close="isMovieModalOpen = false"
    />
  </div>
</template>

<script>
import pov1980Logo from "@/assets/1980 Vibe.png";

import movies from "@/assets/movies.js";  // movies.js import
import MovieModal from './MovieModal.vue';  // MovieModal 컴포넌트 import
import 택시운전사 from "@/assets/posters/택시운전사.jpg";
import 화려한휴가 from "@/assets/posters/화려한휴가.jpg";
import 일구팔칠 from "@/assets/posters/1987.jpg";

export default {
  name: "Pov1980",
  components: {
    MovieModal
  },
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
      isMovieModalOpen: false,
      selectedMovie: null,
      relatedMovies: [
        {
          id: 31,
          title: '택시운전사',
          imageUrl: 택시운전사,
          summary: '어떻게든 택시비를 받아야 하는 만섭의 기지로 검문을 뚫고 겨우 들어선 광주...'
        },
        {
          id: 30,
          title: '화려한 휴가',
          imageUrl: 화려한휴가,
          summary: '1980년 5월, 광주. 평범한 택시기사 민우는 어릴 적 부모님을 여의고...'
        },
        {
          id: 38,
          title: '1987',
          imageUrl: 일구팔칠,
          summary: '1987년 1월, 경찰 조사를 받던 스물두 살 대학생이 사망한다...'
        }
      ]
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
      this.selectedMovie = movies.find(m => m.id === movie.id);
      this.isMovieModalOpen = true;
    }
  }
};
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

@media (max-width: 768px) {
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

/* 관련 영화 섹션 스타일 */
.movie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.movie-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.movie-item:hover {
  transform: scale(1.05);
}

.poster-wrapper {
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

@media (max-width: 768px) {
  .modal-dialog {
    width: 85%; /* 모바일에서는 더 작은 너비 */
    margin: 0.5rem auto;
  }
  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .movie-grid {
    grid-template-columns: 1fr;
  }
}
</style>