<template>
  <div class="page-container">
    <div class="timeline-container">
      <!-- 메인 타임라인 선 -->
      <div style="width: 100%; height: 100%; transform: rotate(90deg); transform-origin: 0 0; border: 0.40px white solid"></div>

      <!-- 연도와 사건명 마커들 -->
      <div 
        v-for="(movie, index) in movies" 
        :key="'date-'+index" 
        class="timeline-marker"
        :style="{ top: `${index * 25}%` }"
      >
        <div class="year">{{ movie.eventYear }}</div>
        <div class="event-name">{{ movie.eventName }}</div>
      </div>

      <!-- 영화 컨텐츠와 연결점 -->
      <div 
        v-for="(movie, index) in movies" 
        :key="'content-'+index" 
        class="timeline-item"
        :class="{ 'right-aligned': index % 2 !== 0 }"
        :style="{ top: `${index * 25 + 12.5}%` }"
      >
        <!-- 컨텐츠 영역 -->
        <div class="timeline-content">
          <div class="movie-card">
            <img :src="movie.imageUrl" :alt="movie.title" class="movie-poster">
            <p class="movie-title">{{ movie.title }}</p>
          </div>
        </div>

        <!-- 새로운 연결선 구조 -->
        <div class="line-container">
          <div class="connecting-line"></div>
          <div class="content-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import poster1 from '@/assets/posters/영웅.jpg'
import poster2 from '@/assets/posters/항거.jpg'

export default {
  data() {
    return {
      movies: [
        {
          eventYear: "1909",
          eventName: "안중근 의거",
          title: "한 발의 총성으로, 역사가 흔들렸다",
          imageUrl: poster1
        },
        {
          eventYear: "1919",
          eventName: "3·1 운동",
          title: "형무소 안에 울려 퍼진 개구리 소리?",
          imageUrl: poster2
        },
      ]
    };
  }
};
</script>

<style scoped>
.page-container {
  background-color: #000000;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #000000;
  color: white;
  height: 100vh;
}

.main-timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: white;
  top: 0;
  z-index: 1;
}

.timeline-item {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  min-height: 300px;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  padding: 15px 0;
}

.year {
  color: white;
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 8px;
  background-color: #000000;
  padding: 0 10px;
}

.event-name {
  color: white;
  font-size: 0.9em;
  text-align: center;
  white-space: nowrap;
  background-color: #000000;
  padding: 0 10px;
}

.timeline-item.right-aligned {
  justify-content: flex-end;
}

.timeline-content {
  width: 25%;
  position: relative;
}

/* 새로운 연결선 스타일링 */
.line-container {
  position: absolute;
  top: 50%;
  width: 25%;
  height: 2px;
}

.connecting-line {
  position: absolute;
  height: 2px;
  background-color: white;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.content-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

/* 왼쪽 아이템의 연결선 */
.timeline-item:not(.right-aligned) .line-container {
  left: 23.5%;
}

.timeline-item:not(.right-aligned) .content-dot {
  right: 0px;
}

/* 오른쪽 아이템의 연결선 */
.timeline-item.right-aligned .line-container {
  right: 26.5%;
}

.timeline-item.right-aligned .content-dot {
  left: -4px;
}

.movie-card {
  background-color: transparent;
  overflow: hidden;
}

.movie-poster {
  width: 50%;
  height: auto;
  object-fit: cover;
}

.movie-title {
  margin-top: 10px;
  font-size: 1em;
  color: white;
}

@media screen and (max-width: 768px) {
  .timeline-container {
    padding: 20px 10px;
  }

  .timeline-content {
    width: 80%;
  }

  .main-timeline-line {
    left: 20px;
  }

  .timeline-item,
  .timeline-item.right-aligned {
    justify-content: flex-end;
    margin-left: 40px;
  }

  .timeline-marker {
    left: 20px;
  }

  .line-container {
    display: none;
  }
}
</style>