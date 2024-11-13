<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-secondary">
          <h5 class="modal-title">POV Cast: 배우개그 유니버스 - {{ actorName }}&nbsp;</h5>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            aria-label="Close" 
            @click="closeModal"
          ></button>
        </div>

        <div class="modal-body">

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

<script>
import PovCast3 from '@/assets/PovCast3.png';

export default {
  name: "PovCast3",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      PovCast3: PovCast3
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-image {
  max-height: 300px;
  width: auto;
  object-fit: contain;
}

.modal.show {
  display: block;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.modal-header {
  padding: 1rem 1.5rem;
}

.modal-title {
  font-family: 'Pretendard-Medium';
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