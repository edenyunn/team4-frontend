<template>
  <div class="carousel-container">
    <div v-if="images.length > 0" id="cardNewsCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- 인디케이터 -->
      <div class="carousel-indicators">
        <button
          v-for="(_, index) in images"
          :key="'indicator-' + index"
          type="button"
          :data-bs-target="'#cardNewsCarousel'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="'슬라이드 ' + (index + 1)"
        ></button>
      </div>

      <!-- 캐러셀 0내용 -->
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="'slide-' + index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img
            :src="image"
            class="d-block w-100"
            :alt="'카드뉴스 ' + (index + 1)"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- 이전/다음 버튼 -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#cardNewsCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">이전</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#cardNewsCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">다음</span>
      </button>
    </div>
    <div v-else class="loading-placeholder">
      이미지를 불러오는 중...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  folderName: {
    type: String,
    required: true
  }
})

const images = ref([])

// 동적으로 이미지 불러오기
const loadImages = async () => {
  try {
    // PNG 파일들을 동적으로 import
    const imageModules = import.meta.glob('/src/assets/CastCards*/*.png', { eager: true })
    
    // 현재 폴더에 해당하는 이미지만 필터링
    const folderImages = Object.entries(imageModules)
      .filter(([path]) => path.includes(props.folderName))
      .map(([path, module]) => module.default)
      .sort((a, b) => {
        // 파일명의 숫자를 추출하여 정렬
        const getNumber = (path) => parseInt(path.split('/').pop().split('.')[0])
        return getNumber(a) - getNumber(b)
      })

    images.value = folderImages
  } catch (error) {
    console.error('이미지 로드 중 에러 발생:', error)
    images.value = []
  }
}

// 이미지 로드 에러 처리
const handleImageError = (event) => {
  console.error('이미지 로드 실패:', event.target.src)
  event.target.src = '/fallback-image.png'
}

// 키보드 네비게이션
const handleKeyDown = (event) => {
  const carousel = document.getElementById('cardNewsCarousel')
  if (!carousel) return

  if (event.key === 'ArrowLeft') {
    carousel.querySelector('.carousel-control-prev')?.click()
  } else if (event.key === 'ArrowRight') {
    carousel.querySelector('.carousel-control-next')?.click()
  }
}

// folderName이 변경될 때마다 이미지 다시 로드
watch(() => props.folderName, () => {
  loadImages()
})

onMounted(() => {
  loadImages()
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #000;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-placeholder {
  color: #fff;
  text-align: center;
  padding: 20px;
}

.carousel-item img {
  width: 100%;
  height: 100%; /* 컨테이너 높이를 기준으로 이미지 크기 조정 */
  object-fit: cover; /* 이미지를 컨테이너에 맞게 자름 */
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.carousel-indicators {
  margin-bottom: 0;
  padding: 10px 0;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.5);
}

.carousel-indicators button.active {
  background-color: #fff;
}

@media (max-width: 768px) {
  .carousel-container {
    max-width: 100%;
  }
  
  .carousel-item img {
    max-height: 60vh;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    width: 15%;
  }
}
</style>