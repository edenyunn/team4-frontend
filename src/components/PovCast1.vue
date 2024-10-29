<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-fullscreen" role="document">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title">POV Cast: 배우개그 유니버스</h5>
          <button type="button" class="btn-close btn-close-white" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <div class="d-flex justify-content-center mb-3">
              <img :src="PovCast1" alt="Pov Cast 이성민" class="modal-image img-fluid" />
            </div>
            <h5 class="mb-3">이성민&nbsp;배우</h5>
          </div>
          <div>
            내용
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PovCast1 from '@/assets/PovCast1.png';

export default {
  name: "PovCast1",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      PovCast1: PovCast1
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
