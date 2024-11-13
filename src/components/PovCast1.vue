<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-fullscreen" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-secondary">
          <h5 class="modal-title">POV Cast: 배우개그 유니버스</h5>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            aria-label="Close" 
            @click="closeModal"
          ></button>
        </div>

        <div class="modal-body">
          <div class="text-center mb-4">
            <div class="d-flex justify-content-center mb-3">
              <img 
                :src="castImage" 
                :alt="`Pov Cast ${actorName}`" 
                class="modal-image img-fluid" 
                @error="handleImageError"
              />
            </div>
            <h5 class="mb-3">{{ actorName }}&nbsp;배우</h5>
          </div>

          <Carousel 
            :folder-name="cardsFolder"
            v-if="isCarouselVisible" 
            @load-error="handleCarouselError"
          />

          <div 
            v-if="errorMessage" 
            class="alert alert-danger text-center"
          >
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Carousel from './CastCarousel.vue'

// Props with validation 0
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  castNumber: {
    type: [String, Number],
    default: '1',
    validator: (value) => ['1', '2', '3', 1, 2, 3].includes(value)
  }
})

// State
const errorMessage = ref('')
const isCarouselVisible = ref(true)

// Emits with validation
const emit = defineEmits({
  close: null,
  error: (error) => error instanceof Error
})

// 동적 이미지 임포트
const castImage = computed(() => {
  try {
    return new URL(`../assets/PovCast${props.castNumber}.png`, import.meta.url).href
  } catch (error) {
    handleImageError()
    return ''
  }
})

// 배우 이름 매핑
const actorName = computed(() => {
  const names = {
    '1': '이성민',
    '2': '황정민',
    '3': '정우성'
  }
  return names[props.castNumber.toString()] || '배우'
})

// 폴더명 동적 생성
const cardsFolder = computed(() => `CastCards${props.castNumber}`)

// 에러 핸들링
const handleImageError = () => {
  errorMessage.value = '이미지를 불러오는데 실패했습니다.'
  emit('error', new Error('Failed to load cast image'))
}

const handleCarouselError = (error) => {
  errorMessage.value = '카드뉴스를 불러오는데 실패했습니다.'
  isCarouselVisible.value = false
  emit('error', error)
}

// 모달 닫기
const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-image {
  max-height: 300px;
  width: auto;
  object-fit: contain;
}

.modal-header {
  padding: 1rem 1.5rem;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
}

@media (max-width: 768px) {
  .modal-image {
    max-height: 200px;
  }
  
  .modal-body {
    padding: 1rem;
  }
}
</style>