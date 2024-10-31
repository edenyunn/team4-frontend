<!-- Timeline.vue -->
<template>
  <div class="dark-container">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Welcome to<br/>POV</h1>
      <h2 class="welcome-subtitle">Major Films in Modern Korean History</h2>
    </div>

    <!-- Timeline Section -->
    <div class="timeline-section">
      <div class="timeline-line"></div>
      
      <!-- Timeline Items -->
      <div v-for="(movie, index) in movies" :key="index" class="timeline-item" 
           :class="{ 'item-left': index % 2 === 0, 'item-right': index % 2 !== 0 }">
        <!-- Year Marker -->
        <div class="year-marker">
          <span class="year">{{ movie.eventYear }}</span>
          <span class="event">{{ movie.event }}</span>
        </div>

        <!-- Movie Card -->
        <div class="movie-card">
          <img 
            :src="movie.imageUrl" 
            :alt="movie.title" 
            class="movie-poster"
            @click="openModal(movie)"
          >
          <p class="movie-summary text-center">{{ movie.summary }}</p>
        </div>
      </div>
    </div>

    <!-- Movie Modal -->
    <MovieModal 
      :is-open="isModalOpen"
      :movie="selectedMovie"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import movies from '@/assets/movies.js'
import MovieModal from '@/components/MovieModal.vue'

export default {
  name: 'Timeline',
  components: {
    MovieModal
  },
  setup() {
    const moviesList = ref(movies)
    const isModalOpen = ref(false)
    const selectedMovie = ref(null)

    const openModal = (movie) => {
      selectedMovie.value = movie
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      selectedMovie.value = null
    }

    return {
      movies: moviesList,
      isModalOpen,
      selectedMovie,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
/* 맨 위에 추가 */
html, body {
  margin: 0;
  padding: 0;
  background-color: #222222;
  min-height: 100vh;
  width: 100%;
}

.dark-container {
  background-color: #222222;
  min-height: 100vh;
  color: white;
  font-family: 'Raleway', sans-serif;
  padding: 0;
  margin: 0;
}

.icons {
  display: flex;
  gap: 4px;
}

/* 웰컴 박스 */
.welcome-section {
  padding: 40px 20px;
  text-align: center;
}
.welcome-title {
  font-size: 48px;
  font-weight: 500;
  font-family: 'BlackHanSans-Regular';
  margin-bottom: 16px;
}
.welcome-subtitle {
  font-size: 48px;
  font-weight: 150;
  font-family: 'NotoSansKR-VariableFont_wght';
  color: rgba(255, 255, 255);
}

.timeline-section {
  position: relative;
  padding: 20px;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: rgb(255, 255, 255);
  transform: translateX(-50%);
}

.year-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.year {
  font-size: 48px;
  font-weight: bold;
  font-family: 'NotoSansKR-VariableFont_wght';
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background-color: #222222; /* 배경색 추가 */
  padding: 0 10px; /* 좌우 패딩 추가 */
}

.event {
  font-size: 48px;
  font-family: 'NotoSansKR-VariableFont_wght';
  color: rgba(255, 255, 255);
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background-color: #222222; /* 배경색 추가 */
  padding: 0 10px; /* 좌우 패딩 추가 */
  white-space: pre-line;
}

.movie-card {
  width: 35%;
  border-radius: 8px;
}

.item-left .movie-card {
  margin-right: auto;
  margin-left: 5px;
}

.item-right .movie-card {
  margin-left: auto;
  margin-right: 5px;
}

/* 타임라인 아이템 간격 조정 */
.timeline-item {
  display: flex;
  margin-bottom: 100px;  /* 아이템 간 간격 늘림 */
  position: relative;
  align-items: center;
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.movie-poster:hover {
  transform: scale(1.05);
}

.movie-summary {
  margin-top: 20px;
  font-size: 48px;
  color: rgba(255, 255, 255);
  white-space: pre-line;
}

/* 사이드바 스타일 */
.sidebar-button {
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.sidebar.closed {
  transform: translateX(100%);
}

/* 아이폰 화면(430px 이하)에서의 고정값 */
@media screen and (max-width: 431px) {
  .welcome-title { font-size: 24px; }
  .welcome-subtitle { font-size: 19px; }
  .year { font-size: 15px; }
  .event { font-size: 8px; }
  .movie-summary { font-size: 8px; }
  .movie-card { width: 120px; }
  .timeline-item { margin-bottom: 20px; }
}

/* 모바일 화면(431px-577px 범위)에서의 고정값 */
@media screen and (min-width: 431px) and (max-width: 577px) {
 .welcome-title { font-size: 24px; }
 .welcome-subtitle { font-size: 19px; }
 .year { font-size: 15px; }
 .event { font-size: 10px; }
 .movie-summary { font-size: 10px; }
 .movie-card { width: 135px; }
 .timeline-item { margin-bottom: 20px; }
}

/* 태블릿 화면(577px-1025px 범위)에서의 고정값 */
@media screen and (min-width: 577px) and (max-width: 1025px) {
 .welcome-title { font-size: 24px; }
 .welcome-subtitle { font-size: 19px; }
 .year { font-size: 20px; }
 .event { font-size: 15px; }
 .movie-summary { font-size: 15px; }
 .movie-card { width: 200px; }
 .timeline-item { margin-bottom: 20px; }
}

/* 데스크톱 화면(1025px-1919px 범위)에서의 고정값 */
@media screen and (min-width: 1025px) and (max-width: 1919px) {
  .welcome-title { font-size: 36px; }
  .welcome-subtitle { font-size: 36px; }
  .year { font-size: 30px; }
  .event { font-size: 30px; }
  .movie-summary { font-size: 25px; }
  .movie-card { width: 350px; }
  .timeline-item { margin-bottom: 20px; }
}
</style>