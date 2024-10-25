<!-- components/MovieModal.vue -->
<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">&times;</button>
      <h1>{{ movie?.title || '' }}</h1>
      <div class="modal-body">
        <img :src="movie?.imageUrl" :alt="movie?.title" class="modal-image">
        <p>{{ movie?.event }}</p>
        <p>{{ movie?.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    movie: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  watch: {
    isOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #222222;
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
}

.modal-image {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

.modal-body {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 1rem;
    padding: 1rem;
  }
}
</style>