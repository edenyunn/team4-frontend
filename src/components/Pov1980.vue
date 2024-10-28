<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-fullscreen" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title">Pov1980</h5>
          <button type="button" class="btn-close btn-close-white" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <div class="d-flex justify-content-center mb-3">
              <img :src="pov1980Logo" alt="Pov1980" class="modal-image img-fluid" />
            </div>
            <h5 class="mb-3">1980&nbsp;5.18민주화운동</h5>
            <p class="movie-description">그 날이 오면</p>
          </div>
          <br>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pov1980Logo from '@/assets/pov1980logo.png';

export default {
  name: "Pov1980",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      pov1980Logo: pov1980Logo
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
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
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

.modal {
  z-index: 1050;
}

.modal-backdrop {
  z-index: 1040;
}

.modal-header {
  padding: 1rem 2rem;
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
}

.modal-title {
  font-size: 1.5rem;
}

@media (max-width: 576px) {
  .modal-header {
    padding: 1rem;
  }
  
  .modal-body {
    padding: 1rem;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
}
</style>
