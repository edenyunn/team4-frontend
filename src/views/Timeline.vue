<template>
  <div class="timeline-container">
    <!-- 메인 타임라인 선 -->
    <div class="main-timeline-line"></div>
    
    <!-- 타임라인 아이템 -->
    <div 
      v-for="(movie, index) in movies" 
      :key="index" 
      class="timeline-item"
      :class="{ 'right-aligned': index % 2 !== 0 }"
    >
      <!-- 컨텐츠 영역 -->
      <div class="timeline-content">
        <!-- 연결선과 마커 추가 -->
        <div class="content-marker">
          <div class="marker-dot"></div>
          <div class="marker-line"></div>
        </div>

        <div class="movie-card">
          <img :src="movie.imageUrl" :alt="movie.title" class="movie-poster">
          <div class="movie-info">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.summary }}</p>
          </div>
        </div>
      </div>

      <!-- 연도와 사건명 마커 -->
      <div class="timeline-marker">
        <div class="year">{{ movie.eventYear }}</div>
        <div class="event-name">{{ movie.eventName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          eventYear: "1919",
          eventName: "3·1 운동",
          title: "김좌진 속에 울려퍼진 개가리 울음소리",
          summary: "독립군의 항일 무장투쟁",
          imageUrl: "poster1.jpg"
        },
        {
          eventYear: "1919",
          eventName: "3·1 운동",
          title: "신이 부기었다, 적은 결코 없었다",
          summary: "독립군의 항일 무장투쟁",
          imageUrl: "poster2.jpg"
        },
      ]
    };
  }
};
</script>

<style scoped>
.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #000000;
  color: white;
}

/* 메인 타임라인 선 */
.main-timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background-color: white;
  top: 0;
  z-index: 1;
}

/* 타임라인 아이템 */
.timeline-item {
  position: relative;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  min-height: 300px;
}

/* 연도와 사건명 마커 스타일 */
.timeline-marker {
  position: absolute;
  left: 50%;
  top: 50%;
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

/* 오른쪽 정렬 아이템 */
.timeline-item.right-aligned {
  justify-content: flex-end;
}

/* 컨텐츠 영역 */
.timeline-content {
  width: 45%;
  position: relative;
}

/* 새로 추가된 마커와 연결선 스타일 */
.content-marker {
  position: absolute;
  top: 50%;
  z-index: 1;
}

.timeline-item:not(.right-aligned) .content-marker {
  right: -30px;
}

.timeline-item.right-aligned .content-marker {
  left: -30px;
}

.marker-dot {
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.marker-line {
  height: 1px;
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item:not(.right-aligned) .marker-line {
  right: 8px;
  width: 22px;
}

.timeline-item.right-aligned .marker-line {
  left: 8px;
  width: 22px;
}

/* 영화 카드 스타일 */
.movie-card {
  background-color: transparent;
  overflow: hidden;
}

.movie-poster {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.movie-info {
  padding: 15px 0;
}

.movie-info h3 {
  font-size: 1.2em;
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
}

.movie-info p {
  color: #cccccc;
}

/* 반응형 스타일 */
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

  .content-marker {
    display: none;
  }
}
</style>