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
          <p class="movie-summary">{{ movie.summary }}</p>
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
  font-weight: bold;
  margin-bottom: 16px;
}
.welcome-subtitle {
  font-size: 20px;
  font-weight: 500;
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

.timeline-item {
  display: flex;
  margin-bottom: 60px;
  position: relative;
}

.year-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222222;
  padding: 8px;
}

.year {
  font-size: 30px;
  font-weight: bold;
}

.event {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
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
  font-size: 14px;
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

@media (max-width: 768px) {
  .movie-card {
    width: 80%;
  }
  
  .timeline-line {
    left: 20px;
  }
  
  .year-marker {
    left: 20px;
    align-items: flex-start;
  }
  
  .item-left .movie-card,
  .item-right .movie-card {
    margin-left: 40px;
  }
}



</style>