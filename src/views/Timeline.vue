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

/* PC 버전은 그대로 유지 */
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
  font-size: 36px;
  font-weight: 500;
  font-family: 'BlackHanSans-Regular';
  margin-bottom: 16px;
}
.welcome-subtitle {
  font-size: 20px;
  font-weight: 150;
  font-family: 'NotoSansKR-VariableFont_wght';
  color: rgba(255, 255, 255, 0.8);
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
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
}

.year-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  z-index: 2;
}

.year {
  font-size: 30px;
  font-weight: bold;
  font-family: 'NotoSansKR-VariableFont_wght';
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.event {
  font-size: 17px;
  font-family: 'NotoSansKR-VariableFont_wght';
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.movie-card {
  width: 20%;
  border-radius: 8px;
}

.item-left .movie-card {
  margin-right: auto;
  margin-left: 20%;
}

.item-right .movie-card {
  margin-left: auto;
  margin-right: 20%;
}

/* 타임라인 아이템 간격 조정 */
.timeline-item {
  display: flex;
  margin-bottom: 100px;  /* 아이템 간 간격 늘림 */
  position: relative;
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
  margin-top: 8px;
  font-size: 7px;
  color: rgba(255, 255, 255, 0.8);
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

/* 모바일 버전 스타일 */
@media (max-width: 768px) {
  .dark-container {
    max-width: 430px;
    margin: 0 auto;
  }

  .movie-card {
    width: 45%;
  }
  
  .timeline-line {
    left: 50%;
  }
  
  .year-marker {
    width: 120px;
    z-index: 2;
  }

  .year {
    font-size: 15px;
    margin-bottom: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  .event {
    font-size: 7px;
    text-align: center;
    word-wrap: break-word;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.2;
    max-width: 110px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  .item-left .movie-card {
    margin-right: auto;
    margin-left: 5%;
    margin-top: 50px;
  }

  .item-right .movie-card {
    margin-left: auto;
    margin-right: 5%;
    margin-top: 50px;
  }

  .timeline-item {
    margin-bottom: 80px;
  }
}

/* 더 작은 화면 대응 */
@media (max-width: 480px) {
  .movie-card {
    width: 50%;
  }

  .year {
    font-size: 20px;
  }

  .event {
    font-size: 12px;
  }
}
</style>