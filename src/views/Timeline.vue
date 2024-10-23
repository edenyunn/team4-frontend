<template>
  <div>
    <div class="timeline-item" v-for="(movie, idx) in movies" :key="idx">
      <!-- 왼쪽: 사건 년도 및 설명 -->
      <div class="timeline-content left">
        <h3>{{ movie.eventYear }} {{ movie.event }}</h3>
        <p>{{ movie.summary }}</p>
      </div>
      <!-- 타임라인 중앙의 날짜 -->
      <div class="timeline-date"></div>
      <!-- 오른쪽: 영화 제목과 포스터 -->
      <div class="timeline-content right">
        <h3>{{ movie.title }}</h3>
        <img
          :src="movie.imageUrl"
          alt="event 포스터"
          class="movie-poster"
        />
      </div>
    </div>
  </div>
</template>

<script>
import movies from "@/assets/movies.js";

export default {
  data() {
    return {
      movies: movies,
    };
  },
};
</script>

<style>
/* 기본 타임라인 스타일 */
.timeline {
  position: relative;
  margin: 20px auto;
  padding: 20px 0;
  width: 90%;
  max-width: 1200px;
  box-sizing: border-box;
}

/* 중앙선 그대로 유지 */
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #ddd;
}

.timeline-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.timeline-content {
  position: relative;
  width: 45%;
  /* 배경 제거 */
  background-color: transparent; /* 박스 배경색 투명 처리 */
  /* 그림자 제거 */
  box-shadow: none; /* 그림자 제거 */
  /* 경계선 제거 */
  border: none; /* 테두리 제거 */
}

.timeline-date {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #461c75;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  border-radius: 50%;
  z-index: 1;
}

/* 왼쪽 배치 */
.timeline-content.left {
  order: 1;
  text-align: right;
}

/* 오른쪽 배치 */
.timeline-content.right {
  order: 2;
  text-align: left;
}

.timeline-item:nth-child(even) .timeline-date {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}

/* 반응형 스타일 */
@media screen and (max-width: 768px) {
  .timeline {
    width: 100%;
  }

  .timeline-item {
    flex-direction: column;
  }

  .timeline-content {
    width: 90%;
    text-align: center;
    margin-bottom: 20px;
  }

  .timeline-content.left,
  .timeline-content.right {
    order: 1;
    text-align: center;
  }

  .timeline-date {
    position: relative;
    margin-bottom: 20px;
    left: 0;
    right: 0;
    transform: none;
  }
}
</style>