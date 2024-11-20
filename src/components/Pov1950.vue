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
// script 부분은 변경사항이 없으므로 그대로 유지
import pov1950Logo from "@/assets/1950 Vibe.png";

import movies from "@/assets/movies.js";  
import MovieModal from './MovieModal.vue';  
import 태극기휘날리며 from '@/assets/posters/태극기휘날리며.jpg';
import 포화속으로 from '@/assets/posters/포화속으로.jpg';
import 장사리 from '@/assets/posters/장사리.jpg';
import 인천상륙작전 from '@/assets/posters/인천상륙작전.jpg';
import 웰컴투동막골 from '@/assets/posters/웰컴투동막골.jpg';
import 고지전 from '@/assets/posters/고지전.jpg';

export default {
  name: "Pov1950",
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
      pov1950Logo: pov1950Logo,
      isActive: false,
      isMovieModalOpen: false,
      selectedMovie: null,
      relatedMovies: [
        {
          id: 13,
          title: '태극기 휘날리며',
          imageUrl: 태극기휘날리며,
          summary: '1950년 한국전쟁, 형제의 생존을 위한 처절한 투쟁이 시작된다...'
        },
        {
          id: 14,
          title: '포화 속으로',
          imageUrl: 포화속으로,
          summary: '포화가 몰아치는 전쟁터에서 학도병들의 희생과 용기를 담아낸 이야기...'
        },
        {
          id: 15,
          title: '장사리',
          imageUrl: 장사리,
          summary: '미완의 승리, 이름 없는 영웅들이 펼친 숨겨진 전투 이야기...'
        },
        {
          id: 16,
          title: '인천상륙작전',
          imageUrl: 인천상륙작전,
          summary: '맥아더 장군과 용사들의 전략적 전투로 전쟁의 판도를 바꾸다...'
        },
        {
          id: 17,
          title: '웰컴 투 동막골',
          imageUrl: 웰컴투동막골,
          summary: '전쟁 중에도 평화가 숨쉬는 마을, 동막골에서 벌어지는 따뜻한 이야기...'
        },
        {
          id: 18,
          title: '고지전',
          imageUrl: 고지전,
          summary: '끝나지 않는 고지 쟁탈전, 그 속에 숨겨진 진실을 파헤친다...'
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
      this.selectedMovie = movies.find(m => m.id === movie.id);
      this.isMovieModalOpen = true;
    }
  }
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